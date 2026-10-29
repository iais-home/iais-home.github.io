// people/faculty.js
const FACULTY_DATA = [
  {
    id: "jeehang-lee",
    name: "Jee-Hang Lee, Ph.D.",
    title: "President & Professor",
    subTitle: "Professor @ Sangmyung University, KR",
    website: "https://iais.re.kr",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    photoCredit: "Courtesy of IAIS",
    bio: `
      <p class="mb-4">
        Dr. Jee-Hang Lee is the President and Professor at the Institute for Advanced Intelligence Study (IAIS), and holds a professorship at Sangmyung University. 
        He completed his Ph.D. at the University of Bath (2015) and has established an international research trajectory spanning Computational Neuroscience, Reinforcement Learning Meta-Control, and Digital Phenomics.
      </p>
      <p class="mb-4">
        His foundational work centers on decoding the mathematical mechanisms of cognitive control and translating them into verifiable, human-aligned machine intelligence. His laboratory has pioneered non-contact physiological decoding algorithms and prefrontal meta-learning frameworks published in premier venues including <em>Cell Reports</em>, <em>ACM CHI</em>, <em>JMIR</em>, and <em>RLDM</em>.
      </p>
      <p>
        At IAIS, Dr. Lee oversees the institute's dual-track research architecture, orchestrating pure scientific inquiry in cooperation with the Engineering Track to validate computational theories in-the-wild.
      </p>
    `,
    researchFocus: [
      "Prefrontal Meta-Control & Reinforcement Learning",
      "In-the-Wild Digital Phenomics & rPPG Dynamics",
      "Neuro-Symbolic Cognitive Architectures",
      "Dynamic Game-Theoretic Models of Human-AI Interaction"
    ],
    selectedPubs: [
      "Control of the human inference process through in-silico task design. <em>Cell Reports</em>, 2024.",
      "Anzeilax, a Smartphone-based Digital Therapeutic for Generalized Anxiety Disorder. <em>JMIR</em>, 2025.",
      "Talk to You More: Utilizing Self-talk as a Mechanism for Alleviating Anxiety. <em>ACM CHI</em>, 2025."
    ]
  },
  {
    id: "affiliated-neuro-md",
    name: "M.D. Scholar",
    title: "Affiliated Professor",
    subTitle: "Clinical Neuroscience & Digital Biomarkers",
    website: "#",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    photoCredit: "Courtesy of IAIS Clinical Network",
    bio: `
      <p class="mb-4">
        Affiliated Professor at IAIS focusing on clinical psychiatry and neuroimaging. Holding an M.D. and Ph.D. in Bio and Brain Engineering, this role anchors the clinical validation pipelines for digital therapeutics and autonomic phenotyping.
      </p>
      <p>
        Leads protocol design for IRB approvals, hospital cohort studies, and multimodal biosignal verification for affective disorders.
      </p>
    `,
    researchFocus: [
      "Clinical Trial Design for Software as a Medical Device (SaMD)",
      "Neural Oscillations in Anxiety & Panic Disorders",
      "Ecological Momentary Assessment (EMA) Trajectories"
    ],
    selectedPubs: [
      "Response Time Dynamics From Noncognitive EMA in Geriatric Depression. <em>JMIR Aging</em>, 2026."
    ]
  },
  {
    id: "affiliated-legal",
    name: "Juris Scholar",
    title: "Affiliated Professor",
    subTitle: "Computational Jurisprudence & Formal Logic",
    website: "#",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    photoCredit: "Courtesy of IAIS Legal Center",
    bio: `
      <p class="mb-4">
        Affiliated Professor leading normative modeling and computational jurisprudence at the Center for Computational Law (Lex AI). Specializes in formal deontic logic, statutory verification, and the prevention of semantic drift in foundation models.
      </p>
    `,
    researchFocus: [
      "Formal Methods in Constitutional & Administrative Law",
      "Deontic Logic Constraints for Autonomous AI",
      "Statutory Reasoning Verification"
    ],
    selectedPubs: [
      "From Neurons to Norms: Neuro-Symbolic Synthesis in Statutory Analysis, 2026."
    ]
  },
  {
    id: "affiliated-psychology",
    name: "Cognitive Scholar",
    title: "Affiliated Professor",
    subTitle: "Psychometrics & Cognitive Psychology",
    website: "#",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    photoCredit: "Courtesy of IAIS",
    bio: `
      <p class="mb-4">
        Specializes in behavioral psychometrics and human cognitive architectures. Oversees behavioral experiment designs, ensuring that sensor-derived digital phenotypes correlate robustly with clinical psychometric instruments.
      </p>
    `,
    researchFocus: [
      "Psychometric Modeling in Longitudinal Cohorts",
      "Cognitive Bias Modification Paradigms",
      "Human-Agent Interaction in Digital Mental Health"
    ],
    selectedPubs: [
      "Optimizing mobile cognitive assessment in older adults. <em>Scientific Reports</em>, 2025."
    ]
  }
];
