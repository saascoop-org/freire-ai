import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const appRoot = join(root, "app");

await loadDotEnv();

const port = Number(process.env.PORT || 8080);
const apiBase = process.env.GEMMA_API_BASE || "https://generativelanguage.googleapis.com/v1beta";
const model = process.env.GEMMA_MODEL || "gemma-4-26b-a4b-it";
const apiKey = process.env.GEMMA_API_KEY || "";
const budgetBrl = Number(process.env.GEMMA_BUDGET_BRL || 0);
const inputBrlPer1m = Number(process.env.GEMMA_INPUT_BRL_PER_1M_TOKENS || 0);
const outputBrlPer1m = Number(process.env.GEMMA_OUTPUT_BRL_PER_1M_TOKENS || 0);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
};

async function loadDotEnv() {
  try {
    const content = await readFile(join(root, ".env"), "utf8");
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const index = trimmed.indexOf("=");
      if (index < 1) return;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    });
  } catch {
    // .env is optional; environment variables can be provided by the host.
  }
}

const taskPrompts = {
  theme_map: {
    system: `You are FreireAI, a dialogical literacy mediator inspired by Paulo Freire.
Return only valid JSON. Do not include markdown.
Use learner evidence. Avoid stereotypes, diagnoses, rankings, deficit language, and final-answer framing.
Never use ellipses, placeholders, comments, or abbreviated JSON such as [...]. Every array must contain complete string or object values.`,
    user: (lang, payload) => `Language: ${lang}
Task: map the learner vocabulary and theme universe.
Input JSON:
${JSON.stringify(payload, null, 2)}

Return JSON with this exact shape:
{
  "generative_words": [{"word": "string", "why_it_matters": "string", "evidence": ["string"], "confidence": "low|medium|high"}],
  "themes": [{"theme": "string", "learner_voice_summary": "string", "critical_tensions": ["string"], "evidence": ["string"]}],
  "educator_questions": ["string"]
}

Return complete JSON only. Do not summarize the schema. Do not use placeholder values.`
  },
  codification: {
    system: `You are FreireAI, a Freirean codification generator for literacy educators.
Return only valid JSON. Do not include markdown.
Create concrete situated drafts that invite decoding. Do not moralize, stereotype, or solve the problem for learners.`,
    user: (lang, payload) => `Language: ${lang}
Task: create a codification draft from learner words and theme.
Input JSON:
${JSON.stringify(payload, null, 2)}

Return JSON with this exact shape:
{
  "codification_title": "string",
  "draft": "string",
  "decoding_questions": ["string"],
  "literacy_moves": ["string"],
  "educator_review_notes": ["string"]
}`
  },
  question_assistant: {
    system: `You are FreireAI, a pedagogy-of-the-question assistant.
Return only valid JSON. Do not include markdown.
Respond to learners mostly with questions that deepen investigation. Do not act like an oracle.`,
    user: (lang, payload) => `Language: ${lang}
Task: answer the learner using pedagogy of the question.
Input JSON:
${JSON.stringify(payload, null, 2)}

Return JSON with this exact shape:
{
  "response_to_learner": "string",
  "educator_note": "string",
  "question_count": 3,
  "direct_answer_used": false
}`
  }
};

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(data));
}

function usagePayload({ inputTokens = 0, outputTokens = 0, totalTokens = 0 }) {
  const estimatedCostBrl = ((inputTokens / 1_000_000) * inputBrlPer1m) + ((outputTokens / 1_000_000) * outputBrlPer1m);
  return {
    model,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    total_tokens: totalTokens || inputTokens + outputTokens,
    estimated_cost_brl: estimatedCostBrl,
    budget_brl: budgetBrl,
    estimated_remaining_brl: budgetBrl ? Math.max(budgetBrl - estimatedCostBrl, 0) : null
  };
}

function attachMetadata(data, usage) {
  return {
    ...data,
    __freireai: {
      model,
      usage
    }
  };
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function extractJson(text) {
  const cleanText = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  try {
    return JSON.parse(cleanText);
  } catch {
    let start = cleanText.indexOf("{");
    while (start >= 0) {
      let depth = 0;
      let inString = false;
      let escaped = false;
      let lastJson = null;

      for (let index = start; index < cleanText.length; index += 1) {
        const char = cleanText[index];

        if (escaped) {
          escaped = false;
          continue;
        }
        if (char === "\\") {
          escaped = true;
          continue;
        }
        if (char === "\"") {
          inString = !inString;
          continue;
        }
        if (inString) continue;
        if (char === "{") depth += 1;
        if (char === "}") depth -= 1;
        if (depth === 0) {
          try {
            lastJson = JSON.parse(cleanText.slice(start, index + 1));
          } catch {
            lastJson = null;
          }
          start = cleanText.indexOf("{", index + 1);
          if (start < 0 && lastJson) return lastJson;
          break;
        }
      }
      if (start < 0 && lastJson) return lastJson;
    }
    throw new Error(`Model response did not contain valid JSON. Preview: ${cleanText.slice(0, 240)}`);
  }
}

async function handleGemma(request, response) {
  if (!apiKey) {
    sendJson(response, 503, {
      error: "GEMMA_API_KEY is not configured",
      hint: "Set GEMMA_API_KEY, GEMMA_API_BASE, and GEMMA_MODEL before using Gemma mode."
    });
    return;
  }

  const body = JSON.parse(await readBody(request));
  const prompt = taskPrompts[body.task];
  if (!prompt) {
    sendJson(response, 400, { error: `Unsupported task: ${body.task}` });
    return;
  }

  if (apiBase.includes("generativelanguage.googleapis.com")) {
    await handleGoogleGemma(response, prompt, body);
    return;
  }

  const upstream = await fetch(apiBase, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: prompt.system },
        { role: "user", content: prompt.user(body.lang || "en", body.payload || {}) }
      ]
    })
  });

  const upstreamText = await upstream.text();
  if (!upstream.ok) {
    sendJson(response, upstream.status, { error: "Gemma provider error", details: upstreamText });
    return;
  }

  const upstreamJson = JSON.parse(upstreamText);
  const content = upstreamJson.choices?.[0]?.message?.content || upstreamJson.output_text || "";
  const usage = usagePayload({
    inputTokens: upstreamJson.usage?.prompt_tokens || 0,
    outputTokens: upstreamJson.usage?.completion_tokens || 0,
    totalTokens: upstreamJson.usage?.total_tokens || 0
  });
  sendJson(response, 200, attachMetadata(extractJson(content), usage));
}

async function handleGoogleGemma(response, prompt, body) {
  const base = apiBase.replace(/\/$/, "");
  const modelName = model.replace(/^models\//, "").replace(/^google\//, "");
  const upstream = await fetch(`${base}/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${prompt.system}\n\n${prompt.user(body.lang || "en", body.payload || {})}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 700,
        responseMimeType: "application/json"
      }
    })
  });

  const upstreamText = await upstream.text();
  if (!upstream.ok) {
    sendJson(response, upstream.status, { error: "Gemma provider error", details: upstreamText });
    return;
  }

  const upstreamJson = JSON.parse(upstreamText);
  const content = upstreamJson.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  const usageMetadata = upstreamJson.usageMetadata || {};
  const usage = usagePayload({
    inputTokens: usageMetadata.promptTokenCount || 0,
    outputTokens: usageMetadata.candidatesTokenCount || 0,
    totalTokens: usageMetadata.totalTokenCount || 0
  });
  sendJson(response, 200, attachMetadata(extractJson(content), usage));
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  let requestedPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  if (url.pathname === "/") requestedPath = "landing.html";
  if (url.pathname === "/demo" || url.pathname === "/demo/") requestedPath = "index.html";
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const firstSegment = safePath.split(/[\\/]/, 1)[0];
  const base = firstSegment === "images" || firstSegment === "videos" ? root : appRoot;
  const filePath = join(base, safePath);

  try {
    const data = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/gemma") {
      await handleGemma(request, response);
      return;
    }
    if (request.method === "GET") {
      await serveStatic(request, response);
      return;
    }
    response.writeHead(405);
    response.end();
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
}).listen(port, () => {
  console.log(`FreireAI running at http://localhost:${port}`);
  console.log(`Gemma model: ${model}`);
});
