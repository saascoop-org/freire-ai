const translations = {
  "pt-BR": {
    brandSubtitle: "Companheiro de alfabetização dialógica",
    languageLabel: "Idioma",
    tabsLabel: "Áreas do protótipo",
    tabMap: "Mapa",
    tabCodify: "Codificar",
    tabQuestion: "Perguntar",
    tabListening: "Escuta",
    tabCircle: "Círculo",
    classContextLabel: "Contexto da turma",
    classContextDefault: "Turma de alfabetização de jovens e adultos em território urbano",
    samplesLabel: "Amostras de fala, escrita ou transcrição",
    analyzeButton: "Analisar universo",
    exportButton: "Exportar registros",
    aiModeLabel: "Motor de IA",
    aiModeLocal: "Local demonstrativo",
    aiModeGemma: "Gemma via API",
    aiStatusLocal: "Modo local ativo. A demo funciona sem servidor.",
    aiStatusGemmaReady: "Modo Gemma ativo. As próximas ações tentarão usar o backend /api/gemma.",
    aiStatusGemmaSuccess: "Gemma respondeu com sucesso. Uso atualizado abaixo.",
    aiStatusGemmaFallback: "Gemma indisponível. Mantive o resultado local para a demo continuar.",
    usageTitle: "Uso do Gemma",
    usageModel: "Modelo",
    usageCalls: "Chamadas",
    usageInputTokens: "Tokens entrada",
    usageOutputTokens: "Tokens saída",
    usageTotalTokens: "Tokens totais",
    usageSpent: "Estimado usado",
    usageRemaining: "Estimado restante",
    usageNote: "Estimativa local baseada nos tokens retornados pela API e nas taxas configuradas.",
    draftHint: "Rascunhos gerados localmente para revisão do educador.",
    stepOneBadge: "Passo 1 de 5",
    stepTwoBadge: "Passo 2 de 5",
    stepThreeBadge: "Passo 3 de 5",
    stepFourBadge: "Passo 4 de 5",
    stepFiveBadge: "Passo 5 de 5",
    mapNextTitle: "Revise o mapa gerado",
    mapNextBody: "Confira as palavras e temas. Quando fizerem sentido para a turma, avance para criar uma codificação da realidade.",
    mapNextButton: "Criar codificação",
    codifyNextTitle: "Escolha tema e formato",
    codifyNextBody: "Gere um rascunho e observe se ele abre conversa em vez de encerrar a resposta.",
    codifyNextButton: "Próximo: testar perguntas",
    questionNextTitle: "Simule uma pergunta real",
    questionNextBody: "A resposta deve devolver investigação ao estudante, não entregar uma conclusão pronta.",
    questionNextButton: "Ver escuta ativa",
    listeningNextTitle: "Planeje a intervenção",
    listeningNextBody: "Use a síntese como apoio para decidir a próxima atividade com a turma.",
    listeningNextButton: "Montar círculo",
    circleNextTitle: "Leve para a prática",
    circleNextBody: "Revise a proposta, ajuste com sua leitura da turma e reinicie o ciclo com novas falas depois da atividade.",
    circleNextButton: "Reiniciar ciclo",
    mapEyebrow: "1. Universo vocabular e temático",
    mapTitle: "Escutar antes de propor",
    generativeWordsTitle: "Palavras geradoras candidatas",
    emergingThemesTitle: "Temas emergentes",
    educatorQuestionsTitle: "Perguntas para o educador",
    codifyEyebrow: "2. Codificações da realidade",
    codifyTitle: "Transformar tema em cena discutível",
    themeSelectLabel: "Tema para codificação",
    formatSelectLabel: "Formato",
    formatStory: "História curta",
    formatImage: "Prompt de imagem",
    formatDialogue: "Cena dialogada",
    generateDraftButton: "Gerar rascunho",
    codificationFallback: "Codificação",
    decodingQuestionsTitle: "Perguntas de decodificação",
    questionEyebrow: "3. Pedagogia da pergunta",
    questionTitle: "Responder perguntando melhor",
    learnerQuestionLabel: "Pergunta do estudante",
    learnerQuestionDefault: "Por que a passagem aumenta se o ônibus continua cheio?",
    simulateAnswerButton: "Simular resposta",
    studentAnswerTitle: "Resposta ao estudante",
    educatorNoteTitle: "Nota ao educador",
    listeningEyebrow: "4. Dashboard de escuta ativa",
    listeningTitle: "Evidências para planejar a aula",
    candidateWordsMetric: "palavras candidatas",
    emergingThemesMetric: "temas emergentes",
    voicesMetric: "vozes registradas",
    listeningSummaryTitle: "Síntese de escuta",
    suggestedActionsTitle: "Ações sugeridas",
    circleEyebrow: "5. Círculo de cultura digital",
    circleTitle: "Aprender em comunhão",
    circleProposalTitle: "Proposta de círculo",
    participationBalanceTitle: "Equilíbrio de participação",
    peerPairsTitle: "Pares colaborativos",
    evidenceLabel: "evidência(s)",
    noEvidence: "sem evidência",
    voiceFallback: "Voz",
    analysisStatus: ({ time, words, themes, samples }) =>
      `Análise atualizada às ${time}: ${words} palavras, ${themes} temas, ${samples} registros.`,
    codificationStatus: ({ time, format, theme }) =>
      `Rascunho gerado às ${time}: ${format} para "${theme}".`,
    responseStatus: ({ time }) =>
      `Resposta simulada às ${time}. Revise se ela devolve a investigação ao estudante.`,
    exportStatus: ({ filename }) => `Arquivo exportado: ${filename}`,
    exportTitle: "Registros do processo FreireAI",
    exportGeneratedAt: "Gerado em",
    exportLanguage: "Idioma",
    exportClassContext: "Contexto da turma",
    exportSamples: "Amostras",
    exportWords: "Palavras geradoras candidatas",
    exportThemes: "Temas emergentes",
    exportCodification: "Codificação gerada",
    exportStudentQuestion: "Pergunta do estudante",
    exportStudentAnswer: "Resposta ao estudante",
    exportEducatorNote: "Nota ao educador",
    exportListening: "Escuta ativa",
    exportCircle: "Círculo de cultura digital",
    selectedThemeFallback: "Tema da turma",
    draftTitle: (theme) => `Rascunho: ${theme}`,
    sampleText: `Maria: Eu pego dois ônibus para chegar no trabalho e fico pensando no preço da passagem.
João: No mercado tudo aumentou, mas meu salário não acompanha. Como a gente calcula isso?
Ana: Quero escrever uma carta para pedir melhoria na rua, porque quando chove a água entra em casa.
Carlos: Meu filho me ajuda no celular, mas eu quero aprender a ler as mensagens sozinho.
Lia: A escola podia falar mais do nosso bairro, da feira, do posto de saúde e do trabalho.`,
    stopwords: ["a", "as", "o", "os", "um", "uma", "de", "da", "do", "das", "dos", "e", "em", "no", "na", "nos", "nas", "para", "por", "porque", "que", "com", "como", "eu", "me", "meu", "minha", "mais", "muito", "muita", "quando", "isso", "essa", "esse", "ele", "ela", "gente"],
    themes: [
      {
        name: "Trabalho, renda e custo de vida",
        keywords: ["trabalho", "salario", "mercado", "preco", "passagem", "aumentou", "calcula"],
        tension: "Como o cotidiano econômico aparece nas palavras e nos cálculos da turma?"
      },
      {
        name: "Direito à cidade e moradia",
        keywords: ["rua", "chove", "agua", "casa", "bairro", "posto", "feira"],
        tension: "Que relação a turma percebe entre leitura, escrita e reivindicação coletiva?"
      },
      {
        name: "Autonomia digital e leitura",
        keywords: ["celular", "mensagens", "ler", "escrever", "carta", "sozinho"],
        tension: "Que práticas digitais podem virar situações reais de alfabetização?"
      }
    ],
    educatorQuestions: [
      "Que palavras da turma carregam experiências concretas e podem abrir uma investigação?",
      "Que tema precisa ser problematizado com cuidado para não virar palestra?",
      "Que estudante ou grupo ainda aparece pouco nas evidências coletadas?"
    ],
    codificationDrafts: ({ theme, words, format, firstWord }) => {
      const base = `Uma roda de estudantes observa uma situação do cotidiano ligada a ${theme.toLowerCase()}. No quadro aparecem palavras recolhidas da turma: ${words}. A cena termina com uma decisão em aberto, para que o grupo leia a realidade antes de escrever uma resposta.`;
      return {
        historia: `${base} Cada pessoa conta o que percebeu, mas ninguém encerra a conversa. A pergunta que fica é: o que nessa situação foi feito por pessoas e, por isso, pode ser transformado por pessoas?`,
        imagem: `Imagem realista e respeitosa de uma roda de alfabetização de jovens e adultos discutindo ${theme.toLowerCase()}, com elementos do bairro, trabalho, transporte e escrita cotidiana. A composição deve deixar espaço para debate, sem heróis individuais nem conclusão moral pronta.`,
        dialogo: `Educadora: "Que palavra daqui nasceu da vida de vocês?" Estudante: "Talvez ${firstWord || "trabalho"}." Grupo: "Mas essa palavra mostra só um problema ou também uma possibilidade?" A conversa segue com diferentes interpretações.`
      }[format];
    },
    decodingQuestions: [
      "O que vocês reconhecem da própria vida nessa cena?",
      "Quem toma decisões nessa situação e quem fica sem voz?",
      "Que palavras precisamos ler, escrever ou calcular para compreender melhor esse problema?",
      "Que outras explicações existem além da primeira que apareceu?"
    ],
    questionResponse: ({ question, words }) =>
      `Sua pergunta abre um bom caminho de investigação. O que você já observou sobre isso no seu trajeto ou no seu bairro? Quem decide o preço e quem sente primeiro a mudança? Se compararmos ${words || "as palavras da turma"} com a pergunta "${question}", que pistas aparecem para pesquisar juntos?`,
    educatorNote: ({ theme }) =>
      `A resposta manteve o foco em ${theme.toLowerCase()} e devolveu a curiosidade ao estudante. Uma próxima atividade pode comparar relatos da turma, valores reais e textos públicos sobre o tema.`,
    listeningSummary: ({ themes }) =>
      `As falas apontam para ${themes || "temas ainda em formação"}. O foco pedagógico deve partir dessas experiências, separando evidências das interpretações do educador.`,
    suggestedActions: [
      "Escolher uma palavra geradora e pedir que a turma conte onde ela aparece na vida diária.",
      "Criar uma leitura curta com vocabulário da turma e uma pergunta aberta no final.",
      "Convidar estudantes que trouxeram experiências diferentes para comparar pontos de vista.",
      "Registrar uma dúvida coletiva para pesquisar antes da próxima aula."
    ],
    circlePrompt: ({ theme }) =>
      `Comecem pelo tema "${theme}". Cada pessoa escolhe uma palavra da lista e conta uma situação concreta em que ela apareceu. Depois o grupo decide quais perguntas precisam ser investigadas com leitura, escrita ou cálculo.`,
    participation: "Amostras com poucas vozes devem ser tratadas como convite à escuta, não como diagnóstico. O educador pode abrir a próxima roda chamando experiências ainda ausentes.",
    pairSuggestion: ({ current, next }) => `${current} conversa com ${next} sobre uma palavra comum.`,
    addMoreVoices: "Adicionar mais vozes para sugerir pares colaborativos."
  },
  en: {
    brandSubtitle: "Dialogical literacy companion",
    languageLabel: "Language",
    tabsLabel: "Prototype areas",
    tabMap: "Map",
    tabCodify: "Codify",
    tabQuestion: "Question",
    tabListening: "Listen",
    tabCircle: "Circle",
    classContextLabel: "Class context",
    classContextDefault: "Adult literacy group in an urban community",
    samplesLabel: "Speech, writing, or transcript samples",
    analyzeButton: "Analyze universe",
    exportButton: "Export records",
    aiModeLabel: "AI engine",
    aiModeLocal: "Local demo",
    aiModeGemma: "Gemma via API",
    aiStatusLocal: "Local mode is active. The demo works without a server.",
    aiStatusGemmaReady: "Gemma mode is active. The next actions will try the /api/gemma backend.",
    aiStatusGemmaSuccess: "Gemma responded successfully. Usage was updated below.",
    aiStatusGemmaFallback: "Gemma is unavailable. The local result was kept so the demo can continue.",
    usageTitle: "Gemma usage",
    usageModel: "Model",
    usageCalls: "Calls",
    usageInputTokens: "Input tokens",
    usageOutputTokens: "Output tokens",
    usageTotalTokens: "Total tokens",
    usageSpent: "Estimated spent",
    usageRemaining: "Estimated remaining",
    usageNote: "Local estimate based on API token metadata and configured rates.",
    draftHint: "Local drafts generated for educator review.",
    stepOneBadge: "Step 1 of 5",
    stepTwoBadge: "Step 2 of 5",
    stepThreeBadge: "Step 3 of 5",
    stepFourBadge: "Step 4 of 5",
    stepFiveBadge: "Step 5 of 5",
    mapNextTitle: "Review the generated map",
    mapNextBody: "Check the words and themes. When they make sense for the group, move on to create a reality codification.",
    mapNextButton: "Create codification",
    codifyNextTitle: "Choose theme and format",
    codifyNextBody: "Generate a draft and check whether it opens dialogue instead of closing the answer.",
    codifyNextButton: "Next: test questions",
    questionNextTitle: "Simulate a real question",
    questionNextBody: "The response should return inquiry to the learner, not deliver a ready conclusion.",
    questionNextButton: "View active listening",
    listeningNextTitle: "Plan the intervention",
    listeningNextBody: "Use the summary to support your decision about the next activity with the group.",
    listeningNextButton: "Build circle",
    circleNextTitle: "Take it into practice",
    circleNextBody: "Review the proposal, adjust it with your reading of the group, and restart the cycle with new voices after the activity.",
    circleNextButton: "Restart cycle",
    mapEyebrow: "1. Vocabulary and theme universe",
    mapTitle: "Listen before proposing",
    generativeWordsTitle: "Candidate generative words",
    emergingThemesTitle: "Emerging themes",
    educatorQuestionsTitle: "Questions for the educator",
    codifyEyebrow: "2. Reality codifications",
    codifyTitle: "Turn a theme into a discussable scene",
    themeSelectLabel: "Theme for codification",
    formatSelectLabel: "Format",
    formatStory: "Short story",
    formatImage: "Image prompt",
    formatDialogue: "Dialogue scene",
    generateDraftButton: "Generate draft",
    codificationFallback: "Codification",
    decodingQuestionsTitle: "Decoding questions",
    questionEyebrow: "3. Pedagogy of the question",
    questionTitle: "Answer by asking better",
    learnerQuestionLabel: "Learner question",
    learnerQuestionDefault: "Why does the bus fare go up if the bus is still full?",
    simulateAnswerButton: "Simulate answer",
    studentAnswerTitle: "Answer to the learner",
    educatorNoteTitle: "Note to educator",
    listeningEyebrow: "4. Active listening dashboard",
    listeningTitle: "Evidence for lesson planning",
    candidateWordsMetric: "candidate words",
    emergingThemesMetric: "emerging themes",
    voicesMetric: "registered voices",
    listeningSummaryTitle: "Listening summary",
    suggestedActionsTitle: "Suggested actions",
    circleEyebrow: "5. Digital culture circle",
    circleTitle: "Learn in communion",
    circleProposalTitle: "Circle proposal",
    participationBalanceTitle: "Participation balance",
    peerPairsTitle: "Peer pairs",
    evidenceLabel: "evidence item(s)",
    noEvidence: "no evidence",
    voiceFallback: "Voice",
    analysisStatus: ({ time, words, themes, samples }) =>
      `Analysis updated at ${time}: ${words} words, ${themes} themes, ${samples} records.`,
    codificationStatus: ({ time, format, theme }) =>
      `Draft generated at ${time}: ${format} for "${theme}".`,
    responseStatus: ({ time }) =>
      `Response simulated at ${time}. Check whether it returns inquiry to the learner.`,
    exportStatus: ({ filename }) => `File exported: ${filename}`,
    exportTitle: "FreireAI process records",
    exportGeneratedAt: "Generated at",
    exportLanguage: "Language",
    exportClassContext: "Class context",
    exportSamples: "Samples",
    exportWords: "Candidate generative words",
    exportThemes: "Emerging themes",
    exportCodification: "Generated codification",
    exportStudentQuestion: "Learner question",
    exportStudentAnswer: "Answer to learner",
    exportEducatorNote: "Note to educator",
    exportListening: "Active listening",
    exportCircle: "Digital culture circle",
    selectedThemeFallback: "Class theme",
    draftTitle: (theme) => `Draft: ${theme}`,
    sampleText: `Maria: I take two buses to get to work and keep thinking about the fare.
John: Everything at the market got more expensive, but my wage did not keep up. How do we calculate that?
Ana: I want to write a letter asking for street repairs, because rainwater gets into my house.
Carlos: My son helps me with the phone, but I want to learn to read messages by myself.
Lia: School could talk more about our neighborhood, the street market, the health clinic, and work.`,
    stopwords: ["a", "an", "the", "and", "or", "but", "to", "of", "in", "on", "for", "with", "by", "my", "me", "i", "we", "our", "that", "this", "do", "does", "did", "is", "are", "was", "were", "be", "about", "more", "into"],
    themes: [
      {
        name: "Work, income, and cost of living",
        keywords: ["work", "wage", "market", "fare", "expensive", "calculate", "buses"],
        tension: "How does everyday economic life appear in the class words and calculations?"
      },
      {
        name: "Right to the city and housing",
        keywords: ["street", "rainwater", "house", "neighborhood", "clinic", "market", "repairs"],
        tension: "How does the group connect reading and writing with collective claims?"
      },
      {
        name: "Digital autonomy and reading",
        keywords: ["phone", "messages", "read", "write", "letter", "myself"],
        tension: "Which digital practices can become real literacy situations?"
      }
    ],
    educatorQuestions: [
      "Which class words carry concrete experiences and can open an investigation?",
      "Which theme needs careful problem-posing so it does not become a lecture?",
      "Which learner or group is still underrepresented in the collected evidence?"
    ],
    codificationDrafts: ({ theme, words, format, firstWord }) => {
      const base = `A circle of learners observes an everyday situation connected to ${theme.toLowerCase()}. On the board are words collected from the group: ${words}. The scene ends with an open decision, so the group can read reality before writing a response.`;
      return {
        historia: `${base} Each person shares what they noticed, but nobody closes the conversation. The question that remains is: what in this situation was made by people and therefore can be changed by people?`,
        imagem: `Respectful realistic image of an adult literacy circle discussing ${theme.toLowerCase()}, with elements of the neighborhood, work, transportation, and everyday writing. Leave room for debate, without individual heroes or a ready moral conclusion.`,
        dialogo: `Educator: "Which word here was born from your lives?" Learner: "Maybe ${firstWord || "work"}." Group: "Does this word show only a problem, or also a possibility?" The conversation continues with different interpretations.`
      }[format];
    },
    decodingQuestions: [
      "What do you recognize from your own life in this scene?",
      "Who makes decisions in this situation, and who is left without a voice?",
      "Which words do we need to read, write, or calculate to understand this problem better?",
      "What other explanations exist beyond the first one that appeared?"
    ],
    questionResponse: ({ question, words }) =>
      `Your question opens a good path for investigation. What have you already observed about this on your route or in your neighborhood? Who decides the price, and who feels the change first? If we compare ${words || "the class words"} with the question "${question}", what clues can we research together?`,
    educatorNote: ({ theme }) =>
      `The answer stayed connected to ${theme.toLowerCase()} and returned curiosity to the learner. A next activity could compare class stories, real values, and public texts about the theme.`,
    listeningSummary: ({ themes }) =>
      `The samples point to ${themes || "themes still taking shape"}. Pedagogical planning should start from these experiences while separating evidence from educator interpretation.`,
    suggestedActions: [
      "Choose one generative word and ask the group where it appears in daily life.",
      "Create a short reading with class vocabulary and an open question at the end.",
      "Invite learners with different experiences to compare points of view.",
      "Record a collective question to research before the next class."
    ],
    circlePrompt: ({ theme }) =>
      `Start with the theme "${theme}". Each person chooses one word from the list and shares a concrete situation where it appeared. Then the group decides which questions need reading, writing, or calculation.`,
    participation: "Samples with few voices should be treated as an invitation to listen, not as a diagnosis. The educator can open the next circle by inviting experiences that are still absent.",
    pairSuggestion: ({ current, next }) => `${current} talks with ${next} about a shared word.`,
    addMoreVoices: "Add more voices to suggest peer pairs."
  },
  es: {
    brandSubtitle: "Compañero de alfabetización dialógica",
    languageLabel: "Idioma",
    tabsLabel: "Áreas del prototipo",
    tabMap: "Mapa",
    tabCodify: "Codificar",
    tabQuestion: "Preguntar",
    tabListening: "Escucha",
    tabCircle: "Círculo",
    classContextLabel: "Contexto del grupo",
    classContextDefault: "Grupo de alfabetización de jóvenes y adultos en territorio urbano",
    samplesLabel: "Muestras de habla, escritura o transcripción",
    analyzeButton: "Analizar universo",
    exportButton: "Exportar registros",
    aiModeLabel: "Motor de IA",
    aiModeLocal: "Demo local",
    aiModeGemma: "Gemma vía API",
    aiStatusLocal: "Modo local activo. La demo funciona sin servidor.",
    aiStatusGemmaReady: "Modo Gemma activo. Las próximas acciones intentarán usar el backend /api/gemma.",
    aiStatusGemmaSuccess: "Gemma respondió correctamente. El uso se actualizó abajo.",
    aiStatusGemmaFallback: "Gemma no está disponible. Se mantuvo el resultado local para que la demo continúe.",
    usageTitle: "Uso de Gemma",
    usageModel: "Modelo",
    usageCalls: "Llamadas",
    usageInputTokens: "Tokens entrada",
    usageOutputTokens: "Tokens salida",
    usageTotalTokens: "Tokens totales",
    usageSpent: "Estimado usado",
    usageRemaining: "Estimado restante",
    usageNote: "Estimación local basada en los tokens devueltos por la API y las tarifas configuradas.",
    draftHint: "Borradores generados localmente para revisión del educador.",
    stepOneBadge: "Paso 1 de 5",
    stepTwoBadge: "Paso 2 de 5",
    stepThreeBadge: "Paso 3 de 5",
    stepFourBadge: "Paso 4 de 5",
    stepFiveBadge: "Paso 5 de 5",
    mapNextTitle: "Revisa el mapa generado",
    mapNextBody: "Comprueba las palabras y temas. Cuando tengan sentido para el grupo, avanza para crear una codificación de la realidad.",
    mapNextButton: "Crear codificación",
    codifyNextTitle: "Elige tema y formato",
    codifyNextBody: "Genera un borrador y observa si abre conversación en vez de cerrar la respuesta.",
    codifyNextButton: "Siguiente: probar preguntas",
    questionNextTitle: "Simula una pregunta real",
    questionNextBody: "La respuesta debe devolver investigación al estudiante, no entregar una conclusión lista.",
    questionNextButton: "Ver escucha activa",
    listeningNextTitle: "Planifica la intervención",
    listeningNextBody: "Usa la síntesis como apoyo para decidir la próxima actividad con el grupo.",
    listeningNextButton: "Armar círculo",
    circleNextTitle: "Llevar a la práctica",
    circleNextBody: "Revisa la propuesta, ajústala con tu lectura del grupo y reinicia el ciclo con nuevas voces después de la actividad.",
    circleNextButton: "Reiniciar ciclo",
    mapEyebrow: "1. Universo vocabular y temático",
    mapTitle: "Escuchar antes de proponer",
    generativeWordsTitle: "Palabras generadoras candidatas",
    emergingThemesTitle: "Temas emergentes",
    educatorQuestionsTitle: "Preguntas para el educador",
    codifyEyebrow: "2. Codificaciones de la realidad",
    codifyTitle: "Convertir un tema en escena discutible",
    themeSelectLabel: "Tema para codificación",
    formatSelectLabel: "Formato",
    formatStory: "Historia corta",
    formatImage: "Prompt de imagen",
    formatDialogue: "Escena dialogada",
    generateDraftButton: "Generar borrador",
    codificationFallback: "Codificación",
    decodingQuestionsTitle: "Preguntas de decodificación",
    questionEyebrow: "3. Pedagogía de la pregunta",
    questionTitle: "Responder preguntando mejor",
    learnerQuestionLabel: "Pregunta del estudiante",
    learnerQuestionDefault: "¿Por qué sube el pasaje si el autobús sigue lleno?",
    simulateAnswerButton: "Simular respuesta",
    studentAnswerTitle: "Respuesta al estudiante",
    educatorNoteTitle: "Nota al educador",
    listeningEyebrow: "4. Dashboard de escucha activa",
    listeningTitle: "Evidencias para planificar la clase",
    candidateWordsMetric: "palabras candidatas",
    emergingThemesMetric: "temas emergentes",
    voicesMetric: "voces registradas",
    listeningSummaryTitle: "Síntesis de escucha",
    suggestedActionsTitle: "Acciones sugeridas",
    circleEyebrow: "5. Círculo de cultura digital",
    circleTitle: "Aprender en comunión",
    circleProposalTitle: "Propuesta de círculo",
    participationBalanceTitle: "Equilibrio de participación",
    peerPairsTitle: "Pares colaborativos",
    evidenceLabel: "evidencia(s)",
    noEvidence: "sin evidencia",
    voiceFallback: "Voz",
    analysisStatus: ({ time, words, themes, samples }) =>
      `Análisis actualizado a las ${time}: ${words} palabras, ${themes} temas, ${samples} registros.`,
    codificationStatus: ({ time, format, theme }) =>
      `Borrador generado a las ${time}: ${format} para "${theme}".`,
    responseStatus: ({ time }) =>
      `Respuesta simulada a las ${time}. Revisa si devuelve la investigación al estudiante.`,
    exportStatus: ({ filename }) => `Archivo exportado: ${filename}`,
    exportTitle: "Registros del proceso FreireAI",
    exportGeneratedAt: "Generado en",
    exportLanguage: "Idioma",
    exportClassContext: "Contexto del grupo",
    exportSamples: "Muestras",
    exportWords: "Palabras generadoras candidatas",
    exportThemes: "Temas emergentes",
    exportCodification: "Codificación generada",
    exportStudentQuestion: "Pregunta del estudiante",
    exportStudentAnswer: "Respuesta al estudiante",
    exportEducatorNote: "Nota al educador",
    exportListening: "Escucha activa",
    exportCircle: "Círculo de cultura digital",
    selectedThemeFallback: "Tema del grupo",
    draftTitle: (theme) => `Borrador: ${theme}`,
    sampleText: `María: Tomo dos autobuses para llegar al trabajo y pienso en el precio del pasaje.
Juan: En el mercado todo subió, pero mi salario no acompaña. ¿Cómo calculamos eso?
Ana: Quiero escribir una carta para pedir mejoras en la calle, porque cuando llueve entra agua en casa.
Carlos: Mi hijo me ayuda con el celular, pero quiero aprender a leer los mensajes solo.
Lía: La escuela podría hablar más de nuestro barrio, la feria, el centro de salud y el trabajo.`,
    stopwords: ["a", "al", "el", "la", "los", "las", "un", "una", "de", "del", "en", "y", "o", "pero", "para", "por", "porque", "que", "con", "como", "mi", "mis", "yo", "me", "mas", "cuando", "eso", "este", "esta", "todo"],
    themes: [
      {
        name: "Trabajo, ingresos y costo de vida",
        keywords: ["trabajo", "salario", "mercado", "precio", "pasaje", "subio", "calculamos", "autobuses"],
        tension: "¿Cómo aparece la vida económica cotidiana en las palabras y cálculos del grupo?"
      },
      {
        name: "Derecho a la ciudad y vivienda",
        keywords: ["calle", "llueve", "agua", "casa", "barrio", "salud", "feria"],
        tension: "¿Qué relación percibe el grupo entre lectura, escritura y reivindicación colectiva?"
      },
      {
        name: "Autonomía digital y lectura",
        keywords: ["celular", "mensajes", "leer", "escribir", "carta", "solo"],
        tension: "¿Qué prácticas digitales pueden convertirse en situaciones reales de alfabetización?"
      }
    ],
    educatorQuestions: [
      "¿Qué palabras del grupo cargan experiencias concretas y pueden abrir una investigación?",
      "¿Qué tema necesita ser problematizado con cuidado para no convertirse en una charla vertical?",
      "¿Qué estudiante o grupo aparece poco en las evidencias recogidas?"
    ],
    codificationDrafts: ({ theme, words, format, firstWord }) => {
      const base = `Una ronda de estudiantes observa una situación cotidiana vinculada a ${theme.toLowerCase()}. En la pizarra aparecen palabras recogidas del grupo: ${words}. La escena termina con una decisión abierta, para que el grupo lea la realidad antes de escribir una respuesta.`;
      return {
        historia: `${base} Cada persona cuenta lo que percibió, pero nadie cierra la conversación. La pregunta que queda es: ¿qué en esta situación fue hecho por personas y, por eso, puede ser transformado por personas?`,
        imagem: `Imagen realista y respetuosa de una ronda de alfabetización de jóvenes y adultos discutiendo ${theme.toLowerCase()}, con elementos del barrio, trabajo, transporte y escritura cotidiana. La composición debe dejar espacio para el debate, sin héroes individuales ni conclusión moral preparada.`,
        dialogo: `Educadora: "¿Qué palabra de aquí nació de la vida de ustedes?" Estudiante: "Tal vez ${firstWord || "trabajo"}." Grupo: "¿Esa palabra muestra solo un problema o también una posibilidad?" La conversación sigue con distintas interpretaciones.`
      }[format];
    },
    decodingQuestions: [
      "¿Qué reconocen de su propia vida en esta escena?",
      "¿Quién toma decisiones en esta situación y quién queda sin voz?",
      "¿Qué palabras necesitamos leer, escribir o calcular para comprender mejor este problema?",
      "¿Qué otras explicaciones existen además de la primera que apareció?"
    ],
    questionResponse: ({ question, words }) =>
      `Tu pregunta abre un buen camino de investigación. ¿Qué ya observaste sobre eso en tu trayecto o en tu barrio? ¿Quién decide el precio y quién siente primero el cambio? Si comparamos ${words || "las palabras del grupo"} con la pregunta "${question}", ¿qué pistas aparecen para investigar juntos?`,
    educatorNote: ({ theme }) =>
      `La respuesta mantuvo el foco en ${theme.toLowerCase()} y devolvió la curiosidad al estudiante. Una próxima actividad puede comparar relatos del grupo, valores reales y textos públicos sobre el tema.`,
    listeningSummary: ({ themes }) =>
      `Las muestras apuntan a ${themes || "temas todavía en formación"}. La planificación pedagógica debe partir de esas experiencias, separando evidencias de interpretaciones del educador.`,
    suggestedActions: [
      "Elegir una palabra generadora y pedir que el grupo cuente dónde aparece en la vida diaria.",
      "Crear una lectura corta con vocabulario del grupo y una pregunta abierta al final.",
      "Invitar a estudiantes con experiencias distintas a comparar puntos de vista.",
      "Registrar una pregunta colectiva para investigar antes de la próxima clase."
    ],
    circlePrompt: ({ theme }) =>
      `Empiecen por el tema "${theme}". Cada persona elige una palabra de la lista y cuenta una situación concreta en que apareció. Luego el grupo decide qué preguntas necesitan lectura, escritura o cálculo.`,
    participation: "Las muestras con pocas voces deben tratarse como invitación a escuchar, no como diagnóstico. El educador puede abrir la próxima ronda convocando experiencias todavía ausentes.",
    pairSuggestion: ({ current, next }) => `${current} conversa con ${next} sobre una palabra compartida.`,
    addMoreVoices: "Agregar más voces para sugerir pares colaborativos."
  }
};

const state = {
  lang: "en",
  aiMode: "local",
  words: [],
  themes: [],
  samples: [],
  analysisCount: 0,
  usage: {
    calls: 0,
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0,
    estimatedCostBrl: 0,
    budgetBrl: null,
    model: "-"
  }
};

function t(key) {
  return translations[state.lang][key];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s:]/g, " ");
}

function parseSamples(raw) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const parts = line.split(":");
      if (parts.length > 1) {
        return { alias: parts[0].trim(), text: parts.slice(1).join(":").trim() };
      }
      return { alias: `${t("voiceFallback")} ${index + 1}`, text: line };
    });
}

function applyStaticTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    element.setAttribute(attribute, t(key));
  });
}

function setLanguage(lang) {
  state.lang = lang;
  document.querySelector("#idioma").value = lang;
  applyStaticTranslations();
  updateAiStatus();
  document.querySelector("#contexto").value = t("classContextDefault");
  document.querySelector("#amostras").value = t("sampleText");
  document.querySelector("#duvida").value = t("learnerQuestionDefault");
  analyze();
  simulateQuestionAssistant();
}

function detectPreferredLanguage() {
  const supported = Object.keys(translations);
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const normalizedLanguages = browserLanguages.filter(Boolean).map((lang) => lang.toLowerCase());

  if (normalizedLanguages.some((lang) => lang === "pt-br" || lang.startsWith("pt-"))) {
    return "pt-BR";
  }

  if (normalizedLanguages.some((lang) => lang === "es" || lang.startsWith("es-"))) {
    return "es";
  }

  if (normalizedLanguages.some((lang) => lang === "en" || lang.startsWith("en-"))) {
    return "en";
  }

  return supported.includes("en") ? "en" : supported[0];
}

function setAiMode(mode) {
  state.aiMode = mode;
  updateAiStatus();
  renderUsage();
}

function updateAiStatus(messageKey) {
  const status = document.querySelector("#status-ia");
  if (!status) return;
  const key = messageKey || (state.aiMode === "gemma" ? "aiStatusGemmaReady" : "aiStatusLocal");
  status.textContent = t(key);
  status.classList.remove("flash");
  void status.offsetWidth;
  status.classList.add("flash");
}

async function callGemma(task, payload) {
  if (state.aiMode !== "gemma") return null;
  const response = await fetch("/api/gemma", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, lang: state.lang, payload })
  });
  if (!response.ok) {
    throw new Error(`Gemma request failed: ${response.status}`);
  }
  const json = await response.json();
  registerUsage(json.__freireai);
  delete json.__freireai;
  updateAiStatus("aiStatusGemmaSuccess");
  return json;
}

function registerUsage(metadata) {
  const usage = metadata?.usage;
  if (!usage) return;
  state.usage.calls += 1;
  state.usage.inputTokens += usage.input_tokens || 0;
  state.usage.outputTokens += usage.output_tokens || 0;
  state.usage.totalTokens += usage.total_tokens || 0;
  state.usage.estimatedCostBrl += usage.estimated_cost_brl || 0;
  state.usage.budgetBrl = typeof usage.budget_brl === "number" && usage.budget_brl > 0 ? usage.budget_brl : state.usage.budgetBrl;
  state.usage.model = metadata.model || usage.model || state.usage.model;
  renderUsage();
}

function formatNumber(value) {
  return new Intl.NumberFormat(state.lang).format(Math.round(value || 0));
}

function formatBrl(value) {
  return new Intl.NumberFormat(state.lang, { style: "currency", currency: "BRL" }).format(value || 0);
}

function renderUsage() {
  const remaining = state.usage.budgetBrl === null ? null : Math.max(state.usage.budgetBrl - state.usage.estimatedCostBrl, 0);
  document.querySelector("#usage-model").textContent = state.usage.model;
  document.querySelector("#usage-calls").textContent = formatNumber(state.usage.calls);
  document.querySelector("#usage-input").textContent = formatNumber(state.usage.inputTokens);
  document.querySelector("#usage-output").textContent = formatNumber(state.usage.outputTokens);
  document.querySelector("#usage-total").textContent = formatNumber(state.usage.totalTokens);
  document.querySelector("#usage-spent").textContent = formatBrl(state.usage.estimatedCostBrl);
  document.querySelector("#usage-remaining").textContent = remaining === null ? "-" : formatBrl(remaining);
}

async function analyze() {
  const raw = document.querySelector("#amostras").value;
  state.samples = parseSamples(raw);
  const learnerText = state.samples.map((sample) => sample.text).join(" ");
  const normalized = normalize(learnerText);
  const stopwords = new Set(t("stopwords"));
  const counts = new Map();

  normalized.split(/\s+/).forEach((word) => {
    if (word.length < 4 || stopwords.has(word)) return;
    counts.set(word, (counts.get(word) || 0) + 1);
  });

  state.words = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([word, count]) => ({ word, count }));

  state.themes = t("themes")
    .map((rule) => {
      const evidence = state.samples
        .filter((sample) => rule.keywords.some((keyword) => normalize(sample.text).includes(keyword)))
        .map((sample) => `${sample.alias}: ${sample.text}`);
      return { ...rule, evidence };
    })
    .filter((theme) => theme.evidence.length > 0);

  renderAll();
  updateAnalysisStatus();

  if (state.aiMode === "gemma") {
    try {
      const ai = await callGemma("theme_map", {
        class_context: document.querySelector("#contexto").value,
        learner_samples: state.samples
      });
      if (ai?.generative_words?.length) {
        state.words = ai.generative_words.slice(0, 12).map((item) => ({
          word: item.word,
          count: item.confidence === "high" ? 3 : item.confidence === "medium" ? 2 : 1
        }));
      }
      if (ai?.themes?.length) {
        state.themes = ai.themes.map((item) => ({
          name: item.theme,
          tension: item.critical_tensions?.[0] || item.learner_voice_summary || "",
          evidence: item.evidence || []
        }));
      }
      renderAll();
      updateAnalysisStatus();
    } catch (error) {
      console.warn(error);
      updateAiStatus("aiStatusGemmaFallback");
    }
  }
}

function updateAnalysisStatus() {
  state.analysisCount += 1;
  const status = document.querySelector("#status-analise");
  const now = new Date().toLocaleTimeString(state.lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  status.textContent = t("analysisStatus")({
    time: now,
    words: state.words.length,
    themes: state.themes.length,
    samples: state.samples.length
  });
  status.classList.remove("flash");
  void status.offsetWidth;
  status.classList.add("flash");
}

function renderAll() {
  renderMap();
  renderCodificationOptions();
  renderListening();
  renderCircle();
}

function renderMap() {
  const words = document.querySelector("#palavras");
  words.innerHTML = state.words
    .map((item) => `<span class="chip"><b>${escapeHtml(item.word)}</b>${item.count}x</span>`)
    .join("");

  const themes = document.querySelector("#temas");
  themes.innerHTML = state.themes
    .map((theme) => `
      <div class="theme-card">
        <strong>${escapeHtml(theme.name)}</strong>
        <span>${escapeHtml(theme.tension)}</span>
        <small>${theme.evidence.length} ${escapeHtml(t("evidenceLabel"))}: ${escapeHtml(theme.evidence[0] || t("noEvidence"))}</small>
      </div>
    `)
    .join("");

  renderList("#perguntas-educador", t("educatorQuestions"));
}

function renderCodificationOptions() {
  const previous = document.querySelector("#tema-codificacao").value;
  const select = document.querySelector("#tema-codificacao");
  select.innerHTML = state.themes
    .map((theme) => `<option value="${escapeHtml(theme.name)}">${escapeHtml(theme.name)}</option>`)
    .join("");
  select.value = state.themes.some((theme) => theme.name === previous) ? previous : state.themes[0]?.name || "";
  generateCodification(false);
}

async function generateCodification(useGemma = false) {
  const themeName = document.querySelector("#tema-codificacao").value || state.themes[0]?.name || t("selectedThemeFallback");
  const formatSelect = document.querySelector("#formato-codificacao");
  const format = formatSelect.value;
  const formatLabel = formatSelect.options[formatSelect.selectedIndex]?.textContent || format;
  const wordList = state.words.slice(0, 5).map((item) => item.word).join(", ");
  const firstWord = state.words[0]?.word;

  document.querySelector("#codificacao-titulo").textContent = t("draftTitle")(themeName);
  document.querySelector("#codificacao-texto").textContent = t("codificationDrafts")({
    theme: themeName,
    words: wordList,
    format,
    firstWord
  });
  renderList("#decodificacao", t("decodingQuestions"));
  updateCodificationStatus(themeName, formatLabel);

  if (useGemma && state.aiMode === "gemma") {
    try {
      const ai = await callGemma("codification", {
        selected_words: state.words.slice(0, 8).map((item) => item.word),
        selected_theme: themeName,
        learner_context: document.querySelector("#amostras").value,
        format
      });
      if (ai?.codification_title) {
        document.querySelector("#codificacao-titulo").textContent = ai.codification_title;
      }
      if (ai?.draft) {
        document.querySelector("#codificacao-texto").textContent = ai.draft;
      }
      if (ai?.decoding_questions?.length) {
        renderList("#decodificacao", ai.decoding_questions);
      }
      updateCodificationStatus(themeName, formatLabel);
    } catch (error) {
      console.warn(error);
      updateAiStatus("aiStatusGemmaFallback");
    }
  }
}

function updateCodificationStatus(themeName, formatLabel) {
  const status = document.querySelector("#status-codificacao");
  const panel = document.querySelector("#codificacao-panel");
  const now = new Date().toLocaleTimeString(state.lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  status.textContent = t("codificationStatus")({ time: now, format: formatLabel, theme: themeName });
  status.classList.remove("flash");
  panel.classList.remove("flash-panel");
  void status.offsetWidth;
  status.classList.add("flash");
  panel.classList.add("flash-panel");
}

async function simulateQuestionAssistant(useGemma = false) {
  const question = document.querySelector("#duvida").value.trim();
  const theme = document.querySelector("#tema-codificacao").value || state.themes[0]?.name || t("selectedThemeFallback");
  const words = state.words.slice(0, 4).map((item) => item.word).join(", ");
  document.querySelector("#resposta-estudante").textContent = t("questionResponse")({ question, words });
  document.querySelector("#nota-educador").textContent = t("educatorNote")({ theme });
  updateResponseStatus();

  if (useGemma && state.aiMode === "gemma") {
    try {
      const ai = await callGemma("question_assistant", {
        learner_question: question,
        known_vocabulary: state.words.slice(0, 8).map((item) => item.word),
        current_theme: theme,
        literacy_goal: "dialogical literacy and critical inquiry"
      });
      if (ai?.response_to_learner) {
        document.querySelector("#resposta-estudante").textContent = ai.response_to_learner;
      }
      if (ai?.educator_note) {
        document.querySelector("#nota-educador").textContent = ai.educator_note;
      }
      updateResponseStatus();
    } catch (error) {
      console.warn(error);
      updateAiStatus("aiStatusGemmaFallback");
    }
  }
}

function updateResponseStatus() {
  const status = document.querySelector("#status-resposta");
  const responsePanel = document.querySelector("#resposta-panel");
  const notePanel = document.querySelector("#nota-panel");
  const now = new Date().toLocaleTimeString(state.lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  status.textContent = t("responseStatus")({ time: now });
  status.classList.remove("flash");
  responsePanel.classList.remove("flash-panel");
  notePanel.classList.remove("flash-panel");
  void status.offsetWidth;
  status.classList.add("flash");
  responsePanel.classList.add("flash-panel");
  notePanel.classList.add("flash-panel");
}

function exportRecords() {
  const now = new Date();
  const generatedAt = now.toLocaleString(state.lang);
  const timestamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("-");
  const filename = `freireai-registros-${timestamp}.md`;
  const context = document.querySelector("#contexto").value.trim();
  const samples = document.querySelector("#amostras").value.trim();
  const codificationTitle = document.querySelector("#codificacao-titulo").textContent.trim();
  const codificationText = document.querySelector("#codificacao-texto").textContent.trim();
  const learnerQuestion = document.querySelector("#duvida").value.trim();
  const learnerAnswer = document.querySelector("#resposta-estudante").textContent.trim();
  const educatorNote = document.querySelector("#nota-educador").textContent.trim();
  const listeningSummary = document.querySelector("#sintese-escuta").textContent.trim();
  const circlePrompt = document.querySelector("#prompt-circulo").textContent.trim();
  const participation = document.querySelector("#participacao").textContent.trim();

  const markdown = [
    `# ${t("exportTitle")}`,
    "",
    `**${t("exportGeneratedAt")}:** ${generatedAt}`,
    `**${t("exportLanguage")}:** ${state.lang}`,
    "",
    `## ${t("exportClassContext")}`,
    context,
    "",
    `## ${t("exportSamples")}`,
    "```text",
    samples,
    "```",
    "",
    `## ${t("exportWords")}`,
    ...state.words.map((item) => `- ${item.word}: ${item.count}x`),
    "",
    `## ${t("exportThemes")}`,
    ...state.themes.map((theme) => `- **${theme.name}**: ${theme.tension} (${theme.evidence.length} ${t("evidenceLabel")})`),
    "",
    `## ${t("exportCodification")}`,
    `**${codificationTitle}**`,
    "",
    codificationText,
    "",
    `## ${t("decodingQuestionsTitle")}`,
    ...Array.from(document.querySelectorAll("#decodificacao li")).map((item) => `- ${item.textContent}`),
    "",
    `## ${t("exportStudentQuestion")}`,
    learnerQuestion,
    "",
    `## ${t("exportStudentAnswer")}`,
    learnerAnswer,
    "",
    `## ${t("exportEducatorNote")}`,
    educatorNote,
    "",
    `## ${t("exportListening")}`,
    listeningSummary,
    "",
    ...Array.from(document.querySelectorAll("#acoes li")).map((item) => `- ${item.textContent}`),
    "",
    `## ${t("exportCircle")}`,
    circlePrompt,
    "",
    participation,
    "",
    ...Array.from(document.querySelectorAll("#pares li")).map((item) => `- ${item.textContent}`),
    ""
  ].join("\n");

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  updateExportStatus(filename);
}

function updateExportStatus(filename) {
  const status = document.querySelector("#status-exportacao");
  status.textContent = t("exportStatus")({ filename });
  status.classList.remove("flash");
  void status.offsetWidth;
  status.classList.add("flash");
}

function renderListening() {
  document.querySelector("#metric-palavras").textContent = state.words.length;
  document.querySelector("#metric-temas").textContent = state.themes.length;
  document.querySelector("#metric-vozes").textContent = new Set(state.samples.map((sample) => sample.alias)).size;
  const topThemes = state.themes.map((theme) => theme.name.toLowerCase()).join(", ");
  document.querySelector("#sintese-escuta").textContent = t("listeningSummary")({ themes: topThemes });
  renderList("#acoes", t("suggestedActions"));
}

function renderCircle() {
  const theme = state.themes[0]?.name || t("selectedThemeFallback");
  document.querySelector("#prompt-circulo").textContent = t("circlePrompt")({ theme });
  document.querySelector("#participacao").textContent = t("participation");
  const aliases = state.samples.map((sample) => sample.alias);
  const pairs = aliases.length > 1
    ? aliases.slice(0, 4).map((alias, index) => t("pairSuggestion")({ current: alias, next: aliases[(index + 1) % aliases.length] }))
    : [t("addMoreVoices")];
  renderList("#pares", pairs);
}

function renderList(selector, items) {
  document.querySelector(selector).innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function showView(viewName) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-visible", view.id === `view-${viewName}`);
  });
  document.querySelector(`#view-${viewName}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

document.querySelectorAll(".next-action").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.nextView));
});

document.querySelector("#idioma").addEventListener("change", (event) => setLanguage(event.target.value));
document.querySelector("#modo-ia").addEventListener("change", (event) => setAiMode(event.target.value));
document.querySelector("#analisar").addEventListener("click", analyze);
document.querySelector("#exportar").addEventListener("click", exportRecords);
document.querySelector("#gerar-codificacao").addEventListener("click", () => generateCodification(true));
document.querySelector("#tema-codificacao").addEventListener("change", () => generateCodification(false));
document.querySelector("#formato-codificacao").addEventListener("change", () => generateCodification(false));
document.querySelector("#responder").addEventListener("click", () => simulateQuestionAssistant(true));

setLanguage(detectPreferredLanguage());
renderUsage();
