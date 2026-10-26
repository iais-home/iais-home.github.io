// centers/centers.js
const CENTERS_DATA = [
  {
    id: "neuro-ai",
    name: "Center for Neuroscience-Inspired AI",
    shortName: "Neuro AI",
    badge: "FOUNDATIONAL AI",
    slogan: "Unifying Prefrontal Meta-Control with Adaptive Deep Reinforcement Learning",
    summary: "Reverse-engineers mammalian cognitive control to architect resource-rational artificial agents capable of rapid zero-shot adaptation in dynamic, non-stationary environments.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Neuroscience-Inspired AI</strong> investigates the foundational computational architectures of the biological brain, translating mammalian prefrontal dynamics into robust, energy-efficient machine intelligence.
      </p>
      <p class="mb-6">
        Contemporary deep reinforcement learning systems excel in rigid, stationary task distributions but struggle with catastrophic forgetting and sample inefficiency when confronted with environmental shifts. Our center focuses on the dual-system hypothesis—synthesizing model-based deliberative inference with model-free habitual execution through a game-theoretic meta-controller.
      </p>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Initiatives</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Prefrontal Meta-Control Modeling:</strong> Formalizing dynamic resource rationality where internal cognitive computation is optimized alongside task-level reward.</li>
        <li><strong>Neuromorphic & Event-Driven Acceleration:</strong> Deploying brain-inspired spiking dynamics onto ultra-low-power edge hardware.</li>
        <li><strong>In-Silico Task Design & Neural Verification:</strong> Validating computational models against fMRI/EEG trajectories collected during human-AI cooperative games.</li>
      </ul>
    `,
    lead: "Dr. Jee-Hang Lee (Center Director)",
    keyPapers: [
      "Control of the human inference process through in-silico task design (Cell Reports, 2024)",
      "Prefrontal Meta-Control Incorporating Mental Simulation (Frontiers in Computational Neuroscience, 2025)"
    ]
  },
  {
    id: "comp-law",
    name: "Center for Computational Law",
    shortName: "Lex AI",
    badge: "NORMATIVE & SAFETY",
    slogan: "Formal Verification, Deontic Logic, and Normative Constraints in Autonomic AI Systems",
    summary: "Bridges statutory jurisprudence and deep learning architectures through neuro-symbolic reasoning, guaranteeing provable safety boundaries against value drift and statutory hallucination.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Computational Law (Lex AI)</strong> formalizes the intersection of jurisprudence, constitutional norms, and machine decision-making.
      </p>
      <p class="mb-6">
        As foundation models are increasingly deployed across legal analysis, regulatory enforcement, and civic adjudication, black-box probabilistic text generation poses acute constitutional risks. Lex AI establishes rigorous mathematical frameworks that bind empirical statistical generators within formally verifiable deontic logic rules.
      </p>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Initiatives</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Deontic Knowledge Graphs:</strong> Structuring statutory hierarchies, conflicting precedents, and normative exceptions into computable tensors.</li>
        <li><strong>Provable AI Alignment:</strong> Developing verification proofs that guarantee autonomous agents cannot generate outputs violating codified statutory invariants.</li>
        <li><strong>Automated Statutory Synthesis:</strong> Eliminating hallucination in legal synthesis by coupling large language models with formal theorem provers.</li>
      </ul>
    `,
    lead: "Lex AI Research Consortium & Affiliated Legal Scholars",
    keyPapers: [
      "From Neurons to Norms: Neuro-Symbolic Synthesis in Computational Jurisprudence (IAIS Working Paper, 2026)"
    ]
  },
  {
    id: "medipharm-ai",
    name: "Center for Medicine & Pharma AI",
    shortName: "Medi-Pharm AI",
    badge: "CLINICAL TRANSLATION",
    slogan: "Virtual-Net Micro Fundamental Models for Non-Contact Biomarker Extraction & Multi-Disease Decoding",
    summary: "Develops in-silico physiological foundations to decode depression, generalized anxiety, and suicidal ideation from non-contact rPPG camera streams and multi-modal clinical timeseries.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Medicine & Pharma AI</strong> translates mathematical physiological models into software-as-a-medical-device (SaMD) solutions and digital therapeutic benchmarks.
      </p>
      <p class="mb-6">
        Rather than relying on uninterpretable end-to-end black boxes, our proprietary <em>Virtual-Net</em> framework reconstructs latent autonomic nervous system (ANS) dynamics directly from ambient video and wearable sensors. This enables robust, motion-tolerant multi-disease screening in unrestrained real-world environments.
      </p>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Initiatives</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>One-Source Multi-Disease Predictor:</strong> Multi-task decoders for simultaneous tracking of depression, anxiety, and suicide risk from a unified arterial pulse stream.</li>
        <li><strong>Non-Contact Hemodynamic Modeling:</strong> Advanced signal quality index (SQI) pipelines for filtering illumination and motion artifacts in the wild.</li>
        <li><strong>Randomized Clinical Trials (RCT):</strong> Hospital-partnered cohort validation and digital biomarker extraction for clinical deployment.</li>
      </ul>
    `,
    lead: "Dr. Jee-Hang Lee (Director) & Clinical Advisory Faculty",
    keyPapers: [
      "Anzeilax, a Smartphone-based Digital Therapeutic for Generalized Anxiety Disorder: A Randomized Controlled Trial (JMIR, 2025)",
      "Enhancing Cognitive Functions of Older Adults With Software Robot: Longitudinal Field Study (JMIR mHealth, 2026)"
    ]
  },
  {
    id: "psychology-ai",
    name: "Center for AI Psychology & Digital Physiology",
    shortName: "AI Psychology",
    badge: "BEHAVIORAL PHENOMICS",
    slogan: "Psychometrics-Grounded Behavioral Phenotyping and Human-Agent Cognitive Interaction",
    summary: "Integrates ecological momentary assessments (EMA), vocal biomarkers, and response time dynamics to quantify psychiatric symptom trajectories with rigorous psychometric validity.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for AI Psychology & Digital Physiology</strong> focuses on the empirical interface between human emotional regulation and intelligent computing systems.
      </p>
      <p class="mb-6">
        We formalize non-invasive digital markers—including micro-delays in ecological response times, vocal acoustics during semi-structured speech, and conversational self-talk paradigms—to capture affective dysregulation before clinical escalation occurs.
      </p>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Initiatives</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Response Time Dynamics:</strong> Utilizing micro-latencies during non-cognitive mobile micro-surveys as quantitative proxies for geriatric depression severity.</li>
        <li><strong>Acoustic Voice Phenotyping:</strong> Designing task-specific audio features to isolate latent suicidal ideation concealed by standard self-report metrics.</li>
        <li><strong>Agentic Self-Talk Mechanisms:</strong> Engineering conversational AI agents that guide patients through structured cognitive restructuring.</li>
      </ul>
    `,
    lead: "Affiliated Faculty in Psychometrics & Cognitive Science",
    keyPapers: [
      "Talk to You More, Listen to You More: Utilizing Self-talk as a Mechanism of Action for Alleviating Anxiety (ACM CHI 2025)",
      "Response Time Dynamics From Noncognitive EMA as a Proxy for Geriatric Depression (JMIR Aging, 2026)"
    ]
  }
];