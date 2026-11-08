// news/news-data.js
// News items, newest first. The home page shows the first three entries.
// Fields:
//   id        unique slug used in news-detail.html?id=...
//   category  label shown above the title
//   date      display date
//   title     headline
//   summary   one or two sentences for the list and the home page
//   content   HTML body for the detail page
const NEWS_DATA = [
  {
    id: "2025-05-samsung-care-at-home",
    category: "INVITED TALK",
    date: "May 30, 2025",
    title: "Invited Talk at the Samsung Global Technology Conference",
    summary: "Dr. Jee Hang Lee spoke on AI systems and data privacy for the human-centred smart caring home at \"Care @ Home: Innovations, Challenges, and Solutions in Home-based Digital Healthcare\".",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Dr. Jee Hang Lee, President of IAIS, gave an invited talk at the <strong>Samsung Global Technology Conference</strong> on 30 May 2025.
      </p>
      <p>
        The conference was hosted by the Samsung Research Funding and Incubation Center for Future Technology under the title <em>"Care @ Home: Innovations, Challenges, and Solutions in Home-based Digital Healthcare"</em>.
      </p>
      <p>
        His talk addressed AI systems and data privacy for the human-centred smart caring home.
      </p>
    `
  },
  {
    id: "2025-05-snu-digital-biomarkers",
    category: "INVITED TALK",
    date: "May 15, 2025",
    title: "Invited Talk at the Seoul National University Graduate School of Public Health",
    summary: "Dr. Jee Hang Lee delivered a lecture on the theory and practice of digital biomarkers.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Dr. Jee Hang Lee gave an invited talk at the <strong>Graduate School of Public Health, Seoul National University</strong> on 15 May 2025.
      </p>
      <p>
        The talk was titled <em>"The Theory and Practice of Digital Biomarkers"</em>.
      </p>
    `
  },
  {
    id: "2025-chi-self-talk",
    category: "PUBLICATION",
    date: "2025",
    title: "Paper Accepted at ACM CHI 2025",
    summary: "A paper on self-talk as a mechanism of action for alleviating anxiety has been accepted at ACM CHI 2025 in Yokohama, Japan, a top-tier venue in computer science.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose paper has been accepted at <strong>ACM CHI 2025</strong>, the ACM Conference on Human Factors in Computing Systems, held in Yokohama, Japan.
      </p>
      <p>
        CHI is a top-tier conference in computer science. The paper is titled:
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Talk to You More, Listen to You More, and Feel Better in Your Mind: Utilizing Self-talk as a Mechanism of Action for Alleviating Anxiety
      </blockquote>
      <p><a href="/publications/conf-detail.html?id=c2025-chi-self-talk" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  },
  {
    id: "2025-frontiers-meta-control",
    category: "PUBLICATION",
    date: "2025",
    title: "Paper Published in Frontiers in Computational Neuroscience",
    summary: "A study on prefrontal meta-control with mental simulation for adaptive reinforcement learning agents has been accepted in Frontiers in Computational Neuroscience (SCIE).",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose paper has been accepted in <strong>Frontiers in Computational Neuroscience</strong> (SCIE).
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Prefrontal Meta-Control Incorporating Mental Simulation Enhances the Adaptivity of Reinforcement Learning Agents in Dynamic Environments
      </blockquote>
      <p><a href="/publications/journal-detail.html?id=j2025-prefrontal-meta-control-simulation" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  },
  {
    id: "2025-ieee-access-visual-haptic",
    category: "PUBLICATION",
    date: "2025",
    title: "Collaborative Paper Published in IEEE Access",
    summary: "Joint work with Prof. Gang Ren (Xiamen University of Technology) on visual-haptic feedback in ball sport training has been accepted in IEEE Access (SCIE).",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>IEEE Access</strong> (SCIE).
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Enhancing Motor Skills and Coordination with Visual-Haptic Feedback in Ball Sport Training
      </blockquote>
      <p><a href="/publications/journal-detail.html?id=j2025-visual-haptic-ball-sport" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  },
  {
    id: "2025-rldm-three-papers",
    category: "PUBLICATION",
    date: "2025",
    title: "Three Papers Accepted at RLDM 2025",
    summary: "Three papers have been accepted at RLDM 2025, the flagship conference on reinforcement learning and decision making.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose three papers have been accepted at <strong>RLDM 2025</strong>, the Multi-disciplinary Conference on Reinforcement Learning and Decision Making, held in Dublin, Ireland.
      </p>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><a href="/publications/conf-detail.html?id=c2025-rldm-meta-control" class="hover:text-[#114B74]">Prefrontal Meta-Control Enables the Improved Adaptivity of Reinforcement Learning Agents</a></li>
        <li><a href="/publications/conf-detail.html?id=c2025-rldm-policy-distillation" class="hover:text-[#114B74]">Policy Distillation through the Lens of the Social Learning Paradigm in the Multi-Agent Reinforcement Learning</a></li>
        <li><a href="/publications/conf-detail.html?id=c2025-rldm-hrl-mci-test" class="hover:text-[#114B74]">Optimising the Neuropsychological Test for Screening People with Mild Cognitive Impairment Using Hierarchical Reinforcement Learning Agent</a></li>
      </ul>
    `
  },
  {
    id: "2025-rldm-yujin",
    category: "PUBLICATION",
    date: "2025",
    title: "YuJin's Paper Accepted at RLDM 2025",
    summary: "A paper on embedding learning for person-specific cognitive similarity has been accepted at RLDM 2025.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to YuJin, whose paper has been accepted at <strong>RLDM 2025</strong>, the flagship conference on reinforcement learning and decision making.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Embedding Learning for Approximating Person-Specific Cognitive Similarity
      </blockquote>
    `
  },
  {
    id: "2025-applied-sciences-street-crossing",
    category: "PUBLICATION",
    date: "2025",
    title: "Feature Paper Published in Applied Sciences",
    summary: "Joint work with Prof. Gang Ren (Xiamen University of Technology) on street-crossing safety for visually impaired pedestrians has been selected as a Feature Paper in Applied Sciences (SCIE).",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>Applied Sciences</strong> (SCIE) as a Feature Paper.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Enhancing Street-Crossing Safety for Visually Impaired Pedestrians with Haptic and Visual Feedback
      </blockquote>
      <p><a href="/publications/journal-detail.html?id=j2025-street-crossing" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  },
  {
    id: "2025-electronics-cyclist",
    category: "PUBLICATION",
    date: "2025",
    title: "Feature Paper Published in Electronics",
    summary: "Joint work with Prof. Gang Ren (Xiamen University of Technology) on multimodal guidance for cyclist road awareness has been selected as a Feature Paper in Electronics (SCIE).",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Congratulations to Dr. Jee Hang Lee, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>Electronics</strong> (SCIE) as a Feature Paper.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Multimodal Guidance for Enhancing Cyclist Road Awareness
      </blockquote>
      <p><a href="/publications/journal-detail.html?id=j2025-cyclist-guidance" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  }
];
