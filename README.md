# FreireAI Literacy Companion Pilot

FreireAI is an AI literacy companion grounded in Paulo Freire's dialogical pedagogy. It helps educators listen to learner language, identify generative themes, create codifications of reality, practice the pedagogy of the question, and prepare digital culture circles.

The project is built with Spec Driven Development: product behavior and AI contracts are specified first, then implemented as verifiable slices.

## Why This Fits Gemma 4 Good

FreireAI uses Gemma as a pedagogical mediator, not as an oracle. The model is asked to:

- map learner vocabulary and themes with evidence;
- draft situated codifications for educator review;
- answer learner questions with better questions;
- support active listening and culture-circle planning;
- avoid ranking, deficit language, stereotypes, and final-answer framing.

The app also keeps a local deterministic fallback so the demo works even without network access.

## Current Prototype

Open `app/index.html` directly for the local static MVP.

For Gemma mode, run the optional backend:

```powershell
copy .env.example .env
# Edit .env with your provider key/model.
npm start
```

Then open:

```text
http://localhost:8080
```

In the side panel, change `AI engine` / `Motor de IA` to `Gemma via API`.

## Environment

The backend defaults to Google AI Studio / Google Generative Language API:

```text
GEMMA_API_KEY=...
GEMMA_API_BASE=https://generativelanguage.googleapis.com/v1beta
GEMMA_MODEL=gemma-4-26b-a4b-it
GEMMA_BUDGET_BRL=10.00
GEMMA_INPUT_BRL_PER_1M_TOKENS=0.40
GEMMA_OUTPUT_BRL_PER_1M_TOKENS=1.75
PORT=8080
```

Use the Gemma model and provider approved for your hackathon submission. The backend also keeps compatibility with OpenAI-style chat completions endpoints when `GEMMA_API_BASE` points to that kind of provider.

The budget and token-rate values are only local estimates for the demo panel. Check the provider billing page for the real balance.

## Prototype Features

- Vocabulary and theme universe mapper.
- Reality codification generator.
- Pedagogy-of-the-question assistant.
- Active-listening dashboard.
- Digital culture circle planner.
- Multilingual interface in PT-BR, EN, and ES.
- Automatic browser-language detection with EN fallback.
- Guided five-step testing flow.
- Local Markdown export with timestamped filename.
- Optional Gemma backend with local fallback.

## Specification

The core specs live in:

- `specs/freireai/product-spec.md`
- `specs/freireai/ai-contracts.md`
- `specs/freireai/tasks.md`
- `specs/freireai/test-plan.md`
- `specs/freireai/hackathon-submission.md`
- `specs/freireai/feedback-form-template.md`
- `specs/freireai/validation-log.md`
- `specs/freireai/public-release-check.md`

## Demo Assets

- `videos/FreireAI_pitch_PT-BR.mp4`
- `videos/FreireAI_pitch_EN.mp4`
- `videos/FreireAI_pitch_ES.mp4`
- `videos/FreireAI_project_PT-BR.mp4`
- `videos/FreireAI_project_EN.mp4`
- `videos/FreireAI_project_ES.mp4`
- screenshots in `images/`

## Privacy Posture

The static demo stores no learner data on a server. Export is local to the browser. When Gemma mode is enabled, only the current task payload is sent to the configured model provider, and all generated material remains a draft for educator review.
