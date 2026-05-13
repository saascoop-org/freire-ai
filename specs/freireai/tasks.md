# FreireAI Spec-Driven Task Plan

## Phase 0 - Repository Foundation

- [x] Create product specification.
- [x] Create AI behavior contracts.
- [x] Create first static prototype.
- [ ] Add automated tests for local analysis helpers.
- [ ] Add accessibility pass for keyboard and screen readers.

## Phase 1 - Local MVP Prototype

- [x] Build five-pillar interface.
- [x] Add deterministic theme extraction from sample learner text.
- [x] Add codification draft generation.
- [x] Add pedagogy-of-the-question response simulator.
- [x] Add active-listening dashboard.
- [x] Add culture-circle prompt generator.

## Phase 2 - AI Integration

- [x] Choose initial privacy posture: local-first demo with optional configured Gemma provider.
- [x] Implement server-side AI gateway.
- [x] Configure the approved Gemma model/provider for the final hackathon submission.
- [x] Validate outputs against `ai-contracts.md`.
- [ ] Add educator approval workflow for generated artifacts.
- [ ] Store only consented and minimized learner data.

## Phase 3 - Pilot Readiness

- [ ] Add user roles.
- [ ] Add class/session model.
- [ ] Add Portuguese-first localization review.
- [ ] Add data export for educators.
- [ ] Add human review and incident handling process.
- [x] Create external feedback form from `specs/freireai/feedback-form-template.md`.
- [ ] Record at least one invited validation session in `specs/freireai/validation-log.md`.
- [ ] Complete `specs/freireai/public-release-check.md`.
- [x] Deploy public demo URL.
- [ ] Publish repository and connect demo/video/write-up for hackathon submission.

## Phase 4 - Learning Evidence

- [ ] Define pilot metrics aligned with dialogical learning.
- [ ] Track educator actions taken from listening insights.
- [ ] Track learner participation balance without ranking learners.
- [ ] Document qualitative evidence from culture circles.

## Remaining Work - Precedence Order

1. Validate the published landing page and interactive demo.
   - Confirm the GitHub Pages landing page loads: https://hackathonbrteam.github.io/FreireAI-Literacy-Companion-Pilot/
   - Confirm the Render interactive demo loads: https://freireai-literacy-companion-pilot.onrender.com/demo
   - Confirm PT-BR, EN, and ES language switching works on both surfaces.
   - Confirm the landing page video links and feedback links open correctly.

2. Complete one invited validation session.
   - Use fictional or minimized learner examples.
   - Test local fallback and Gemma via API.
   - Record results in `specs/freireai/validation-log.md`.
   - Extract the submission summary from the validation notes.

3. Run the public release check.
   - Complete `specs/freireai/public-release-check.md`.
   - Confirm `.env` is not committed.
   - Confirm `.env.example` contains placeholders only.
   - Confirm screenshots, videos, repository URL, landing URL, and demo URL are final.

4. Finish submission materials.
   - Update `specs/freireai/hackathon-submission.md` with the validation summary.
   - Connect the public repository, GitHub Pages landing page, Render demo, videos, screenshots, and feedback forms.
   - Prepare the final Kaggle/write-up submission.

5. Complete pre-submission quality passes.
   - Add a Portuguese-first localization review.
   - Add an accessibility pass for keyboard and screen readers.
   - Add automated tests for local analysis helpers if time permits.
   - Add automated evaluation prompts for AI contract compliance if time permits.

6. Strengthen privacy and educator-control flows.
   - Add educator approval workflow for generated artifacts.
   - Add consent and data-minimization screens before real learner data is used.
   - Add human review and incident handling process.

7. Move post-MVP platform work to backlog.
   - Add user roles.
   - Add class/session model.
   - Add structured educator data export.
   - Define pilot metrics aligned with dialogical learning.
   - Track educator actions and learner participation without ranking learners.
