// news/activities.js
const ACTIVITIES_DATA = [
  {
    id: "fall-colloquium-2026",
    type: "COLLOQUIUM",
    badgeColor: "bg-[#114B74]",
    date: "Nov 12, 2026 (Thu) 16:00 - 18:00",
    title: "2026 Fall Colloquium: Challenging Mathematical Problems in AI",
    speaker: "Dr. Jee-Hang Lee (President, IAIS) & Invited Panelists",
    venue: "HCMC Seminar Room, Soorim Cultural Foundation Bldg. & Zoom Hybrid",
    summary: "Explores the fundamental theoretical limits of gradient-based optimization in high-dimensional non-convex landscapes and examines topological invariants in deep neural representations.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        The Institute for Advanced Intelligence Study invites researchers and graduate scholars to the <strong>2026 Fall Colloquium on Challenging Mathematical Problems in Artificial Intelligence</strong>.
      </p>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Session Schedule</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>16:00 - 16:50:</strong> Non-convex Loss Landscapes and Topological Data Analysis in Deep Networks</li>
        <li><strong>16:50 - 17:00:</strong> Coffee Break & Networking</li>
        <li><strong>17:00 - 17:50:</strong> Prefrontal Meta-Control as a Dynamical Non-Zero-Sum Game</li>
        <li><strong>17:50 - 18:00:</strong> Open Discussion and Concluding Remarks</li>
      </ul>
      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Registration & Inquiries</h3>
      <p>
        Registration is free but mandatory due to limited on-site seating. Online participants will receive a Zoom link 24 hours prior to the session.
      </p>
    `
  },
  {
    id: "public-lecture-neuro-norms",
    type: "PUBLIC LECTURE",
    badgeColor: "bg-[#12264A]",
    date: "Nov 19, 2026 (Thu) 19:00 - 20:30",
    title: "From Neurons to Norms: Neuro-Symbolic AI in Law and Ethics",
    speaker: "Center for Computational Law (Lex AI) Research Team",
    venue: "IAIS Main Auditorium (Virtual Stream Available)",
    summary: "A public intellectual lecture examining the intersection of computational neuroscience, deontic logic, and automated legal judgment.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        How can mathematical logic guarantee that automated decision-making respects human ethical norms and statutory jurisprudence?
      </p>
      <p>
        This public lecture presents a non-technical yet mathematically grounded exposition of why pure generative models hallucinate legal standards, and how neuro-symbolic verification layers can re-introduce provable alignment into constitutional and civic AI systems.
      </p>
    `
  },
  {
    id: "seminar-micro-fundamental-model",
    type: "SEMINAR",
    badgeColor: "bg-[#E0B24D]",
    date: "Dec 03, 2026 (Thu) 15:00 - 16:30",
    title: "Decoding Latent Autonomic States with Micro Fundamental Models",
    speaker: "Center for Medicine & Pharma AI (Biomarker Working Group)",
    venue: "IAIS Seminar Hall 3F",
    summary: "Technical seminar detailing Virtual-Net architecture for non-contact camera rPPG multi-disease decoding in unrestrained environments.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        This seminar covers the algorithmic pipeline behind IAIS's multi-disease predictor for depression, anxiety, and suicidal ideation from non-contact rPPG camera streams.
      </p>
      <p>
        The presentation focuses on motion artifact decomposition using signal quality indices (SQI), latent autonomic representation extraction, and selective loss weighting for clinical validation in the wild.
      </p>
    `
  }
];