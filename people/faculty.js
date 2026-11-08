// people/faculty.js
// IAIS Scholars (Faculty).
// Fields:
//   id            unique slug used in faculty-detail.html?id=...
//   name, title   shown on the card and the profile page
//   subTitle      optional second line on the card
//   website       optional personal website; the link is hidden when empty
//   photo         image path
//   photoCredit   optional caption under the profile card
//   bio           HTML biography
//   researchFocus list of research themes (optional)
//   selectedPubs  list of publications (optional); each item is a string or
//                 { title, venue, link } where link points to a publication detail page or URL
const FACULTY_DATA = [
  {
    id: "jee-hang-lee",
    name: "Jee Hang Lee, Ph.D.",
    title: "President, IAIS Scholar",
    subTitle: "Professor, Department of Human-Centered AI, Sangmyung University",
    website: "",
    photo: "/assets/img/team/lee.png",
    photoCredit: "",
    bio: `
      <p>
        Dr. Jee Hang Lee is the founding President of the Institute for Advanced Intelligence Study (IAIS). He is a Professor in the Department of Human-Centered AI at Sangmyung University and has been a Visiting Professor in the Division of Brain & Cognitive Science at Ewha Womans University since 2025.
      </p>
      <p>
        He received his Ph.D. in Computer Science from the University of Bath, UK, in 2015 for research on norm awareness in the behaviour of virtual characters. He then worked as a Research Associate at the University of Bath and as a Research Assistant Professor at the KAIST Center for Neuroscience-inspired AI, where he held a KI Research Fellowship on brain-inspired artificial intelligence. Before his doctoral studies, he led software projects at the DMC R&D Centre of Samsung Electronics and developed the Hangul Word Processor at Hancom.
      </p>
      <p>
        His research turns the computational mechanisms of human cognition into artificial intelligence, and then puts that intelligence to work for people. His work spans prefrontal meta-control in reinforcement learning, AI that optimises human learning, digital biomarkers and digital therapeutics, and the psychology of AI. It has appeared in venues including <em>Science Robotics</em>, <em>Cell Reports</em>, <em>JMIR</em>, <em>Alzheimer's &amp; Dementia</em>, ACM CHI and RLDM.
      </p>
    `,
    researchFocus: [
      "Decision making and reinforcement learning in humans and machines",
      "Brain-inspired AI and prefrontal meta-control",
      "Psychology of AI, digital psychology and digital physiology",
      "Digital therapeutics and digital biomarkers",
      "Computational modelling of human behaviour"
    ],
    selectedPubs: [
      { title: "Toward high-performance, memory-efficient, and fast reinforcement learning: Lessons from decision neuroscience", venue: "Science Robotics, 2019", link: "/publications/journal-detail.html?id=j2019-science-robotics" },
      { title: "Controlling human causal inference through in silico task design", venue: "Cell Reports, 2024", link: "/publications/journal-detail.html?id=j2024-in-silico-task-design" },
      { title: "Anzeilax, a Smartphone-based Digital Therapeutic for Generalized Anxiety Disorder: A Randomized Controlled Trial", venue: "Journal of Medical Internet Research, 2025", link: "/publications/journal-detail.html?id=j2025-anzeilax-rct" },
      { title: "Prefrontal Meta-Control Incorporating Mental Simulation Enhances the Adaptivity of Reinforcement Learning Agents in Dynamic Environments", venue: "Frontiers in Computational Neuroscience, 2025", link: "/publications/journal-detail.html?id=j2025-prefrontal-meta-control-simulation" },
      { title: "Talk to You More, Listen to You More, and Feel Better in Your Mind: Utilizing Self-talk as a Mechanism of Action for Alleviating Anxiety", venue: "ACM CHI, 2025", link: "/publications/conf-detail.html?id=c2025-chi-self-talk" }
    ]
  },
  {
    id: "ji-young-son",
    name: "Ji-Young Son, Ph.D.",
    title: "Director of Lex AI, IAIS Scholar",
    subTitle: "Center for Computational Law",
    website: "",
    photo: "/assets/img/team/son.jpg",
    photoCredit: "",
    bio: `
      <p>
        Dr. Ji-Young Son is the Director of Lex AI, the Center for Computational Law at IAIS.
      </p>
      <p>
        Dr. Son's research grounds Computational Law in the computationalism of cognitive science. This work analyses criminal legal judgment, and in particular the free evaluation of evidence, as structured inference, and defines the conditions under which formalised evidence evaluation can be trusted. Dr. Son is Co-Principal Investigator of the project on an AI- and cloud-based remote testimony system for children, funded by the Ministry of Science and ICT.
      </p>
    `,
    researchFocus: [
      "Computational Law and its cognitive-scientific foundations",
      "Criminal legal judgment and the free evaluation of evidence",
      "Computational credibility of evidence",
      "AI-assisted testimony for child witnesses"
    ],
    selectedPubs: [
      { title: "Computational Credibility and the Structure of Evidence Evaluation in Criminal Justice", venue: "Journal of Public Choice, 5(1), 2026" },
      { title: "Materialization of the Process of forming Free Evaluation of Evidence in the Testimony and institutional Improvement", venue: "Review of Institution and Economics, 17(2), 2023" }
    ]
  },
  {
    id: "yu-jin-cha",
    name: "Yu-Jin Cha, M.D., Ph.D.",
    title: "Director of Neuro AI, IAIS Scholar",
    subTitle: "Center for Computational Brain & AI",
    website: "",
    photo: "/assets/img/team/cha.jpg",
    photoCredit: "",
    bio: `
      <p>
        Dr. Yu-Jin Cha is the Director of Neuro AI, the Center for Computational Brain &amp; AI at IAIS. As a physician-scientist, Dr. Cha brings clinical and neuroscientific expertise to the Center's work on the computational mechanisms of the brain.
      </p>
    `,
    researchFocus: [],
    selectedPubs: []
  }
];
