# FreireAI Literacy Companion - Product Specification

## Vision

FreireAI is a literacy companion that helps educators practice dialogical, problem-posing education inspired by Paulo Freire. The system must not behave like an oracle that deposits answers. It should mediate listening, questioning, codification, decoding, and collaborative reflection between educators and learners.

## Product Principles

1. Start from the learner's world.
2. Prefer questions that deepen inquiry over direct answers.
3. Make learner language visible to educators.
4. Treat generated content as a draft for human review.
5. Strengthen horizontal dialogue in the learning community.
6. Keep the educator accountable for pedagogical decisions.

## Primary Users

### Educator

Needs to understand the vocabulary, themes, doubts, feelings, and cultural references that emerge from learners. Uses this information to prepare classes, create codifications, and facilitate culture circles.

### Learner

Needs a respectful companion that listens, asks good questions, encourages reflection, and helps transform everyday experience into reading, writing, and critical inquiry.

### Facilitator or Program Coordinator

Needs a summarized view of engagement, risks, themes, and evidence that the AI remains aligned with dialogical practice.

## Pillars and Capabilities

### 1. Vocabulary and Theme Universe Mapper

The system analyzes learner text, transcripts, and forum interactions to surface:

- Generative words.
- Recurring themes.
- Community references.
- Sentiment and affective signals.
- Questions that learners are already asking.

The output must show evidence snippets and confidence levels so the educator can interpret, correct, or reject suggestions.

### 2. Reality Codification Generator

The system turns selected words and themes into codification drafts:

- Short stories.
- Image prompts.
- Dialogue scenes.
- Reading cards.
- Writing prompts.

Codifications must be concrete, situated, age-appropriate, and open to critical decoding. They must avoid stereotypes, moralizing conclusions, and ready-made answers.

### 3. Pedagogy of the Question Assistant

The assistant responds to learner questions with:

- Clarifying questions.
- Hypothesis prompts.
- Invitations to observe the world.
- Connections to learner vocabulary.
- Short scaffolds only when needed.

The assistant may answer directly only when safety, accessibility, or basic orientation requires it. Even then, it should return to inquiry.

### 4. Active Listening Dashboard

The educator dashboard synthesizes:

- Technical progress.
- Learner voices.
- Emerging themes.
- Curiosity patterns.
- Emotional signals.
- Suggested educator actions.

The dashboard must not rank learners as fixed ability categories. It should help the educator listen more carefully and plan better interventions.

### 5. Digital Culture Circle

The system supports collaborative dialogue by:

- Surfacing under-heard voices.
- Suggesting peer pairings.
- Proposing circle prompts.
- Summarizing agreements, tensions, and open questions.
- Encouraging learners to teach and learn with one another.

Moderation should protect dignity and participation while preserving disagreement as a learning resource.

## MVP Scope

The MVP is a teacher-facing prototype with five linked work areas:

1. Paste or load learner interaction samples.
2. Generate a theme universe map.
3. Create codification drafts from selected themes.
4. Simulate a learner assistant response in the pedagogy-of-the-question style.
5. Review active-listening insights and culture-circle prompts.

The first implementation can use deterministic local logic for demonstration. Production AI integration is specified separately in `ai-contracts.md`.

## Non-Goals for MVP

- Automated grading.
- Replacing the educator.
- Fully autonomous moderation.
- High-stakes learner diagnosis.
- Real student data storage.
- Direct image generation without educator review.

## Acceptance Criteria

- Given learner text, the app identifies candidate generative words and themes with visible evidence.
- Given a selected theme, the app generates at least one codification draft and three decoding questions.
- Given a learner question, the assistant responds primarily with questions and avoids final-answer framing.
- Given a class summary, the dashboard highlights learner voice, affective signals, and suggested educator actions.
- Given a group of learners, the culture-circle view suggests prompts and peer collaboration patterns.
- Every AI-generated output is labeled as a draft for educator review.
