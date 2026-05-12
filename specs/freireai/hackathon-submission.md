# Gemma 4 Good Hackathon Submission Draft

## Project Name

FreireAI Literacy Companion

## One-Liner

A Gemma-powered literacy companion that helps educators practice Paulo Freire's dialogical method: listening first, generating situated codifications, asking better questions, and facilitating digital culture circles.

## Problem

Adult and youth literacy programs often lack time and tools to transform learner language into meaningful literacy activities. Generic AI tutors tend to answer like oracles, which risks reproducing Paulo Freire's "banking education" model: depositing answers instead of cultivating critical inquiry.

## Solution

FreireAI uses Gemma as a dialogical mediator. It supports educators through a five-step cycle:

1. Map the learner vocabulary and theme universe.
2. Generate codifications of everyday reality.
3. Simulate pedagogy-of-the-question responses.
4. Summarize active-listening insights for lesson planning.
5. Prepare digital culture-circle prompts and peer collaboration.

## How Gemma Is Used

The optional backend exposes `/api/gemma` and calls a configured Gemma model through an OpenAI-compatible chat completions endpoint.

Gemma tasks:

- `theme_map`: extracts generative words, themes, tensions, evidence, and educator questions.
- `codification`: creates stories, dialogue scenes, or image prompts for educator review.
- `question_assistant`: responds to learner questions with inquiry-oriented prompts.

The prompt contracts are defined in `specs/freireai/ai-contracts.md`.

## Technical Architecture

- Static frontend: HTML, CSS, JavaScript.
- Optional Node backend: `server.mjs`.
- Model gateway: `/api/gemma`.
- Local fallback: deterministic browser logic for offline demos.
- Export: local Markdown file with timestamped process records.

## Why This Matters

The project targets literacy as civic participation. Learners can work with words from their own lives: transportation, work, housing, health, digital messages, and neighborhood issues. The educator stays responsible for interpretation and action, while Gemma accelerates listening, drafting, and reflective questioning.

## Responsible AI Choices

- Generated content is always a draft.
- The tool avoids learner ranking, diagnosis, punitive moderation, and deficit language.
- Evidence is shown beside themes.
- The educator reviews and adapts all suggestions.
- Local mode works without sending learner data anywhere.
- Gemma mode sends only the current task payload to the configured provider.

## Demo Flow

Public landing page: https://hackathonbrteam.github.io/FreireAI-Literacy-Companion-Pilot/

Interactive demo: https://freireai-literacy-companion-pilot.onrender.com/demo

1. Open the app.
2. Select language.
3. Choose local mode or Gemma mode.
4. Analyze learner samples.
5. Generate a codification.
6. Simulate a learner response.
7. Review active listening and culture circle.
8. Export the records.

## Feedback Forms

The invited validation feedback forms are available in three languages:

- PT-BR: https://forms.gle/DqN81THFrxWgRTM29
- EN: https://forms.gle/Nh8DMk3V8YLgks9o7
- ES: https://forms.gle/7rhoc6rcBh1LCTxt7

## Judging Strengths

- Social impact: literacy, educator support, inclusion.
- Clear AI role: Gemma mediates dialogue rather than replacing teachers.
- Multilingual accessibility: PT-BR, EN, ES.
- Practical artifact: exportable records for real educators.
- Responsible design: local fallback, evidence, and review-first workflow.

## Remaining Pilot Work

- Add automated evaluation prompts for AI contract compliance.
- Add hosted Gemma provider configuration.
- Run a small educator feedback cycle.
- Add consent and data-minimization screens before real learner data is used.
