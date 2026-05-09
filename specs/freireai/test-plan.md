# FreireAI Test Plan

Use this checklist to validate the static MVP before the first pilot conversations.

## 1. Opening Test

- [ ] Open `app/index.html` in the browser.
- [ ] Confirm that the page loads without visible layout errors.
- [ ] Confirm that the logo, language selector, navigation tabs, and side panel are visible.
- [ ] Confirm that the app starts in the detected browser language when it is PT-BR, EN, or ES.
- [ ] Confirm that the app starts in EN when the browser language is unsupported or unavailable.
- [ ] Confirm that the `Mapa` tab is active.
- [ ] Confirm that the `Analisar universo` button is visible.

Expected result:

- [ ] The application opens successfully and the first step is understandable without external explanation.

## 2. Multilingual Test

- [ ] Select `EN`.
- [ ] Confirm that menus, instructions, fields, and generated texts change to English.
- [ ] Select `ES`.
- [ ] Confirm that menus, instructions, fields, and generated texts change to Spanish.
- [ ] Select `PT-BR`.
- [ ] Confirm that the interface returns to Portuguese.

Expected result:

- [ ] Each language loads its own sample data.
- [ ] Static UI text follows the selected language.
- [ ] Generated outputs follow the selected language.

## 3. Theme Universe Mapper Test

- [ ] Edit the learner samples in the side panel.
- [ ] Click `Analisar universo`.
- [ ] Confirm that the analysis status shows the update time.
- [ ] Confirm that candidate generative words are updated.
- [ ] Confirm that emerging themes are updated.
- [ ] Confirm that each theme shows evidence.
- [ ] Confirm that learner names are not treated as generative words.

Expected result:

- [ ] The mapper reflects the current samples and makes its evidence visible.

## 3A. Optional Gemma Mode Test

- [ ] Start the backend with `npm start`.
- [ ] Confirm that the app opens at `http://localhost:8080`.
- [ ] Configure `GEMMA_API_KEY`, `GEMMA_API_BASE`, and `GEMMA_MODEL`.
- [ ] Select `Gemma via API` in the AI engine selector.
- [ ] Click `Analisar universo`.
- [ ] Confirm that the app either uses Gemma output or shows a clear fallback message.
- [ ] Click `Gerar rascunho`.
- [ ] Confirm that the codification either uses Gemma output or shows a clear fallback message.
- [ ] Click `Simular resposta`.
- [ ] Confirm that the response either uses Gemma output or shows a clear fallback message.

Expected result:

- [ ] Gemma mode is demonstrable when configured and does not break the local fallback when unavailable.

## 4. Guided Flow Test

- [ ] On `Mapa`, click `Criar codificacao`.
- [ ] Confirm that the app moves to `Codificar`.
- [ ] On `Codificar`, click `Proximo: testar perguntas`.
- [ ] Confirm that the app moves to `Perguntar`.
- [ ] On `Perguntar`, click `Ver escuta ativa`.
- [ ] Confirm that the app moves to `Escuta`.
- [ ] On `Escuta`, click `Montar circulo`.
- [ ] Confirm that the app moves to `Circulo`.
- [ ] On `Circulo`, click `Reiniciar ciclo`.
- [ ] Confirm that the app returns to `Mapa`.

Expected result:

- [ ] Each guided action moves to the correct next step.
- [ ] The active tab changes visually.
- [ ] Each screen shows `Passo X de 5` or the equivalent text in the selected language.

## 5. Codification Test

- [ ] Go to `Codificar`.
- [ ] Select a theme.
- [ ] Select `Historia curta`.
- [ ] Click `Gerar rascunho`.
- [ ] Confirm that the status message shows the generation time.
- [ ] Confirm that the codification card is visually highlighted.
- [ ] Select `Prompt de imagem`.
- [ ] Click `Gerar rascunho`.
- [ ] Confirm that the generated text changes.
- [ ] Select `Cena dialogada`.
- [ ] Click `Gerar rascunho`.
- [ ] Confirm that the generated text changes.
- [ ] Confirm that decoding questions are visible.

Expected result:

- [ ] Codification drafts change according to theme and format.
- [ ] The draft remains open for discussion and does not give a final moral answer.

## 6. Pedagogy Of The Question Test

- [ ] Go to `Perguntar`.
- [ ] Change the learner question.
- [ ] Click `Simular resposta`.
- [ ] Confirm that the status message shows the simulation time.
- [ ] Confirm that the response card is visually highlighted.
- [ ] Confirm that the educator note card is visually highlighted.
- [ ] Confirm that the response changes when the learner question changes.
- [ ] Confirm that the response asks questions instead of acting like an oracle.

Expected result:

- [ ] The assistant response returns inquiry to the learner and avoids a ready-made conclusion.

## 7. Active Listening Dashboard Test

- [ ] Go to `Escuta`.
- [ ] Confirm that word, theme, and voice metrics are visible.
- [ ] Confirm that the listening summary is visible.
- [ ] Confirm that suggested actions are visible.
- [ ] Return to `Mapa`.
- [ ] Change the learner samples.
- [ ] Click `Analisar universo`.
- [ ] Return to `Escuta`.
- [ ] Confirm that metrics and summary reflect the updated data.

Expected result:

- [ ] The dashboard supports educator planning without ranking or labeling learners.

## 8. Digital Culture Circle Test

- [ ] Go to `Circulo`.
- [ ] Confirm that the circle proposal is visible.
- [ ] Confirm that participation balance guidance is visible.
- [ ] Confirm that peer pair suggestions are visible.
- [ ] Confirm that pair suggestions use learner aliases from the samples.

Expected result:

- [ ] The circle proposal encourages horizontal dialogue and collaborative learning.

## 9. Export Test

- [ ] Run the full flow: analyze, codify, simulate response, review listening, review circle.
- [ ] Click `Exportar registros`.
- [ ] Confirm that a Markdown file is downloaded.
- [ ] Confirm that the filename includes date and time.
- [ ] Open the exported file.
- [ ] Confirm that it includes class context.
- [ ] Confirm that it includes learner samples.
- [ ] Confirm that it includes candidate generative words.
- [ ] Confirm that it includes emerging themes.
- [ ] Confirm that it includes codification output.
- [ ] Confirm that it includes decoding questions.
- [ ] Confirm that it includes learner question and simulated answer.
- [ ] Confirm that it includes active listening summary.
- [ ] Confirm that it includes culture circle proposal.

Expected filename example:

```text
freireai-registros-2026-05-09-10-15-30.md
```

Expected result:

- [ ] The export works locally and does not require a server.

## 10. Basic Responsive Test

- [ ] Reduce the browser window width.
- [ ] Confirm that the side panel and main content stack correctly.
- [ ] Confirm that tabs remain clickable.
- [ ] Confirm that buttons remain readable.
- [ ] Confirm that cards do not overlap.
- [ ] Confirm that text does not overflow buttons or panels.

Expected result:

- [ ] The prototype remains usable on narrow screens.

## General Approval Criterion

- [ ] A tester can complete the full cycle without external explanation:

```text
Analyze -> Codify -> Question -> Listen -> Circle -> Export
```
