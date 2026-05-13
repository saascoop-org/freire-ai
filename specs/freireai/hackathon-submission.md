# Gemma 4 Good Hackathon Submission

## Project Name

FreireAI Literacy Companion

## One-Liner

A Gemma-powered literacy companion that helps educators practice Paulo Freire's dialogical method: listen first, generate situated codifications, ask better questions, and facilitate digital culture circles.

## Public Links

- Repository: https://github.com/HackathonBrTeam/FreireAI-Literacy-Companion-Pilot
- Landing page: https://hackathonbrteam.github.io/FreireAI-Literacy-Companion-Pilot/
- Interactive demo: https://freireai-literacy-companion-pilot.onrender.com/demo

## Demo Videos

Pitch:

- PT-BR: https://youtu.be/szbLGf-msP8
- EN: https://youtu.be/ExffAZGN1IU
- ES: https://youtu.be/JbOS4mjqnYE

Method and project overview:

- PT-BR: https://youtu.be/BJlh8anWzs8
- EN: https://youtu.be/8K2AAatNFN4
- ES: https://youtu.be/nR82GBn8dS0

## Problem

Adult and youth literacy programs often lack time and tools to transform learner language into meaningful literacy activities. Educators may collect learner speech, writing samples, and everyday concerns, but turning that material into generative themes, situated reading activities, and culture-circle prompts requires careful preparation.

Generic AI tutors can make this worse when they behave like oracles. They often give final answers, rank learners, or flatten social context into generic content. That risks reproducing what Paulo Freire criticized as the "banking education" model: depositing information into learners instead of cultivating critical inquiry, dialogue, and collective action.

## Solution

FreireAI is a dialogical literacy companion for educators. It uses Gemma as a pedagogical mediator, not as a replacement teacher. The educator remains responsible for judgment, adaptation, consent, and action.

The solution supports a five-step process:

1. Map the learner vocabulary and theme universe.
2. Generate codifications of everyday reality.
3. Simulate pedagogy-of-the-question responses.
4. Summarize active-listening insights for lesson planning.
5. Prepare digital culture-circle prompts and peer collaboration.

The application is trilingual in PT-BR, EN, and ES. It includes a public landing page, a Render-hosted interactive demo, a deterministic local fallback, optional Gemma API mode, and local Markdown export.

## How Gemma Is Used

The backend exposes `/api/gemma` and calls a configured Gemma provider from the server side, so API keys are not exposed in the browser.

Gemma is used for three educator-facing tasks:

- `theme_map`: extracts generative words, themes, tensions, evidence, and educator questions.
- `codification`: creates situated stories, dialogue scenes, or image prompts for educator review.
- `question_assistant`: responds to learner questions with inquiry-oriented prompts instead of final-answer tutoring.

The prompt contracts are defined in `specs/freireai/ai-contracts.md`. The contracts instruct the model to avoid learner ranking, diagnosis, stereotypes, punitive moderation, deficit language, and final-answer framing.

## Technical Architecture

- Static frontend: HTML, CSS, JavaScript.
- Public landing page: GitHub Pages from the `docs/` folder.
- Interactive demo: Render web service.
- Optional Node backend: `server.mjs`.
- Model gateway: `/api/gemma`.
- Local fallback: deterministic browser logic for offline and low-connectivity demos.
- Export: local Markdown file with timestamped process records.
- Automated validation: Playwright smoke tests for landing localization, demo flow, export, and Gemma mode availability.

## Demo Flow

1. Open the landing page.
2. Select PT-BR, EN, or ES.
3. Open the interactive demo.
4. Choose local mode or Gemma via API.
5. Analyze learner speech, writing, or transcript samples.
6. Review generated words, themes, tensions, evidence, and questions.
7. Generate a codification draft.
8. Simulate a learner question and receive inquiry-oriented prompts.
9. Review active-listening insights and culture-circle planning.
10. Export the process record as Markdown.

## Responsible AI Choices

- Generated content is always a draft for educator review.
- The educator remains in control of interpretation and classroom action.
- Evidence is shown beside suggested themes.
- Local mode works without sending learner data to a server.
- Gemma mode sends only the current task payload to the configured provider.
- The tool avoids learner ranking, diagnosis, stereotypes, punitive moderation, and deficit language.
- Real learner use should require consent, data minimization, and human review processes.

## Validation Status

Automated smoke validation has passed for the public GitHub Pages landing page and the Render-hosted demo. The automated suite checks:

- PT-BR, EN, and ES landing localization.
- Localized application names.
- Pitch and method video links.
- Screenshot mapping for each language.
- Landing page demo button.
- Render demo access.
- Five-step local workflow.
- Local/fallback generation.
- Markdown export.
- Gemma mode availability.

An invited educator validation session is still pending. Until that session is completed, FreireAI should be presented as a pilot prototype and should use fictional or minimized learner data only.

## Feedback Forms

The invited validation feedback forms are available in three languages:

- PT-BR: https://forms.gle/DqN81THFrxWgRTM29
- EN: https://forms.gle/Nh8DMk3V8YLgks9o7
- ES: https://forms.gle/7rhoc6rcBh1LCTxt7

## Judging Strengths

- Social impact: supports literacy as civic participation.
- Clear AI role: Gemma mediates dialogue rather than replacing teachers.
- Pedagogical grounding: based on Paulo Freire's dialogical method.
- Multilingual accessibility: PT-BR, EN, and ES.
- Practical artifact: exportable records for educators.
- Responsible design: local fallback, evidence, review-first workflow, and server-side API handling.
- Verifiable delivery: public landing page, Render demo, videos, docs, and smoke tests.

## Remaining Pilot Work

- Run one invited educator validation session and record it in `specs/freireai/validation-log.md`.
- Add a Portuguese-first localization review.
- Add an accessibility pass for keyboard and screen readers.
- Add automated tests for local analysis helpers.
- Add automated evaluation prompts for AI contract compliance.
- Add consent and data-minimization screens before real learner data is used.
- Add educator approval workflow for generated artifacts.
- Add human review and incident handling process.

## Kaggle Submission Copy

FreireAI Literacy Companion is a Gemma-powered literacy companion designed to help educators practice Paulo Freire's dialogical method in adult and youth literacy contexts. Instead of acting as an AI tutor that gives final answers, FreireAI helps the educator listen first, identify generative words and themes, create situated codifications, ask better questions, and prepare digital culture circles.

The problem we are addressing is both practical and pedagogical. Literacy educators often work with rich learner language: stories about work, transport, housing, health, family, digital messages, and neighborhood life. That material can become powerful reading and writing work, but educators need time to organize it into themes, questions, and activities. Generic AI systems often skip the listening stage and behave like oracles. In Freirean terms, that can reproduce the "banking education" model by depositing answers instead of creating dialogue.

FreireAI uses Gemma as a dialogical mediator. The model supports three core tasks: mapping learner vocabulary and themes, drafting codifications of everyday reality, and generating inquiry-oriented responses to learner questions. The educator remains responsible for reviewing, adapting, and deciding what belongs in the classroom. The system is designed to avoid learner ranking, diagnosis, stereotypes, punitive moderation, deficit language, and final-answer framing.

The demo implements a five-step workflow. First, the educator enters speech, writing, or transcript samples and reviews a vocabulary and theme map. Second, the educator generates a codification draft, such as a short scene or prompt grounded in learner reality. Third, the educator simulates a learner question and receives prompts that answer by opening inquiry rather than closing it. Fourth, the app summarizes active-listening evidence for lesson planning. Fifth, it prepares a digital culture-circle prompt for collective reading, writing, dialogue, and action.

The application is trilingual in Portuguese, English, and Spanish. It has a public landing page on GitHub Pages and an interactive demo deployed on Render. The frontend is built with HTML, CSS, and JavaScript. The optional Node backend exposes a server-side `/api/gemma` gateway, keeping provider keys out of the browser. The application also includes a deterministic local fallback, so the demo remains usable in low-connectivity settings or when a model provider is unavailable. Educators can export the process record as a local Markdown file.

Responsible AI choices are central to the project. Generated content is always labeled and treated as a draft. Evidence is shown beside suggested themes. Local mode does not send learner data to a server. Gemma mode sends only the current task payload to the configured provider. For real learner use, FreireAI should require consent, data minimization, educator approval, and human review processes.

The public landing page is available at https://hackathonbrteam.github.io/FreireAI-Literacy-Companion-Pilot/ and the interactive demo is available at https://freireai-literacy-companion-pilot.onrender.com/demo. The source repository is available at https://github.com/HackathonBrTeam/FreireAI-Literacy-Companion-Pilot.

Automated smoke validation has passed for the public landing page and Render demo. The test suite checks trilingual landing localization, localized application names, video links, screenshot mapping, demo access, the five-step local workflow, local fallback generation, Markdown export, and Gemma mode availability. An invited educator validation session is still pending, so the current release should be understood as a pilot prototype using fictional or minimized learner data.
