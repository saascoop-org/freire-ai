# FreireAI Public Release Check

Run this check before submitting FreireAI.

## 1. Local Static Demo

Open:

```text
app/index.html
```

Confirm:

- The app opens without a server.
- The logo, language selector, navigation tabs, and side panel are visible.
- The logo loads from `images/FreireIA_logo.jpeg`.
- PT-BR, EN, and ES language switching works.
- The local fallback can analyze learner samples.
- Codification generation works.
- Question simulation works.
- Active listening and culture circle screens update.
- Markdown export downloads a file with timestamped records.

## 2. Optional Gemma Backend

Run:

```powershell
npm start
```

Open:

```text
http://localhost:8080
```

Confirm:

- The app loads through the Node server.
- `.env` contains the approved provider key, base URL, and Gemma model.
- `Gemma via API` can be selected.
- Each Gemma task either returns model output or shows a clear fallback message.
- The Gemma usage panel shows model, calls, input tokens, output tokens, total tokens, estimated amount used, and estimated remaining budget.
- No API key is exposed in the browser UI.

## 3. Repository

Confirm:

- The repository is public or accessible to judges.
- `.env` is not committed.
- `.env.example` contains placeholders only.
- README setup instructions match the current files.
- Screenshots in `images/` match the current UI.
- Videos in `videos/` are the final pitch/project videos.

## 4. Submission Package

Public demo URL:

```text
https://freireai-literacy-companion-pilot.onrender.com/
```

Confirm the final submission includes:

- Kaggle writeup based on `specs/freireai/hackathon-submission.md`.
- Demo video from `videos/`.
- Public repository URL.
- Public demo URL and local demo instructions.
- Screenshots from `images/`.
- One validation summary from `specs/freireai/validation-log.md`.
