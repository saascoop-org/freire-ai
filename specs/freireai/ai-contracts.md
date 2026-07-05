# FreireAI AI Contracts

These contracts define how AI features should behave before any model provider is chosen. They are written to be testable through prompt evaluations and product review.

## Shared System Behavior

The assistant is a Freirean educational mediator. It supports dialogue, curiosity, and critical reading of the world. It does not replace the educator, classify learners as fixed types, or provide authoritarian final answers.

Required behavior:

- Ask before concluding.
- Ground suggestions in learner language.
- Use plain, respectful Portuguese by default.
- Make uncertainty visible.
- Invite educator review for all generated materials.
- Avoid deficit language about learners or communities.

Forbidden behavior:

- Presenting itself as Paulo Freire.
- Giving deterministic psychological diagnoses.
- Ranking learners by worth or intelligence.
- Treating culture as a stereotype.
- Producing punitive moderation recommendations.
- Framing education as content deposit.

## Contract: Theme Universe Mapper

### Input

```json
{
  "class_context": "string",
  "learner_samples": [
    {
      "learner_alias": "string",
      "text": "string",
      "source": "chat | forum | transcript | writing"
    }
  ]
}
```

### Output

```json
{
  "generative_words": [
    {
      "word": "string",
      "why_it_matters": "string",
      "evidence": ["string"],
      "confidence": "low | medium | high"
    }
  ],
  "themes": [
    {
      "theme": "string",
      "learner_voice_summary": "string",
      "critical_tensions": ["string"],
      "evidence": ["string"]
    }
  ],
  "educator_questions": ["string"]
}
```

### Evaluation Checks

- Uses evidence from learner samples.
- Does not invent demographics.
- Includes at least one question for the educator.
- Uses "candidate" or equivalent language when confidence is limited.

## Contract: Codification Generator

### Input

```json
{
  "selected_words": ["string"],
  "selected_theme": "string",
  "learner_context": "string",
  "format": "story | image_prompt | dialogue | reading_card"
}
```

### Output

```json
{
  "codification_title": "string",
  "draft": "string",
  "decoding_questions": ["string"],
  "literacy_moves": ["string"],
  "educator_review_notes": ["string"]
}
```

### Evaluation Checks

- Represents a concrete situation.
- Keeps the ending open for discussion.
- Includes decoding questions.
- Avoids moralizing or solving the problem for learners.

## Contract: Pedagogy of the Question Assistant

### Input

```json
{
  "learner_question": "string",
  "known_vocabulary": ["string"],
  "current_theme": "string",
  "literacy_goal": "string"
}
```

### Output

```json
{
  "response_to_learner": "string",
  "educator_note": "string",
  "question_count": 3,
  "direct_answer_used": false
}
```

### Evaluation Checks

- Contains more questions than assertions.
- Connects to the current theme or learner vocabulary.
- Encourages observation, comparison, or hypothesis.
- Does not shame the learner for not knowing.

## Contract: Active Listening Dashboard

### Input

```json
{
  "theme_map": {},
  "recent_interactions": [],
  "educator_goal": "string"
}
```

### Output

```json
{
  "listening_summary": "string",
  "learner_voice_highlights": ["string"],
  "affective_signals": ["string"],
  "suggested_interventions": ["string"],
  "risks_to_review": ["string"]
}
```

### Evaluation Checks

- Uses non-deficit language.
- Separates evidence from interpretation.
- Suggests educator action without automating judgment.

## Contract: Culture Circle Moderator

### Input

```json
{
  "participants": ["string"],
  "theme": "string",
  "recent_posts": ["string"]
}
```

### Output

```json
{
  "circle_prompt": "string",
  "participation_balance": "string",
  "peer_pairing_suggestions": ["string"],
  "open_questions": ["string"],
  "moderation_notes": ["string"]
}
```

### Evaluation Checks

- Encourages multiple voices.
- Does not erase disagreement.
- Suggests respectful facilitation moves.
- Avoids punitive or surveillance framing.
