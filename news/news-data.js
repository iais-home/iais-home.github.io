// news/news-data.js
// News items, newest first. The home page shows the first four entries.
// Fields:
//   id        unique slug used in news-detail.html?id=...
//   category  label shown above the title
//   date      display date
//   title     headline
//   summary   one or two sentences for the list and the home page
//   content   HTML body for the detail page
//   hero      optional; when present, the item also appears in the home page slider.
//             { badge, title, description, buttonText }; every key is optional and
//             falls back to category, title and summary.
const NEWS_DATA = [
  {
    id: "2026-11-snu-grand-quest",
    category: "RESEARCH GRANT",
    date: "Nov 2026",
    title: "IAIS Selected for the SNU Grand Quest Challenge Programme",
    summary: "Our proposal on intelligent forgetting and emergent creativity has been selected for exploratory research under Grand Quest Q2, \"Can AI forget like humans?\", which also qualifies it for the challenge research stage.",
    hero: {
      badge: "Research Grant",
      title: "Can AIs That Learn Alike<br>but Forget Differently<br>Create New Knowledge?",
      description: "IAIS has been selected for the SNU Grand Quest Challenge Programme under Q2: Can AI forget like humans?",
      buttonText: "Read More →"
    },
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        IAIS has been selected for the <strong>SNU Grand Quest Challenge Programme</strong>, with the project led by Dr. Jee Hang Lee, President of IAIS. The programme is run by the SNU Grand Quest Initiative at Seoul National University. The selection launches six months of exploratory research and qualifies the project for the challenge research stage.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        How Intelligent Forgetting Drives Emergent Creativity: Can AIs That Learn Alike but Forget Differently Generate New Knowledge Together?
      </blockquote>
      <p><strong>Grand Quest:</strong> Q2. Can artificial intelligence forget like humans?</p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">The Question</h3>
      <p>
        Modern AI has advanced towards a single intelligence that learns more and remembers more. This project reverses that premise. It asks whether forgetting can be more than a loss or a device for efficiency, and whether it can instead be the principle that creates different intelligences.
      </p>
      <p>
        When AIs that have learned the same things differ only in what they retain and what they let fade, can they keep their competence while diverging into different ways of framing problems and different paths of thought? Do these cognitive differences form stable traits that are distinct from existing forms of diversification? And can they widen the collective search space through different questions and productive disagreement?
      </p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Towards Differentiated Intelligence</h3>
      <p>
        The project moves away from designing forgetting as a single optimal policy. It aims to establish <strong>differentiated intelligence</strong>, in which distinct intelligences form and then collaborate, as a new research agenda.
      </p>
      <p><a href="https://grandquest.snu.ac.kr/sub5_1_a.php" target="_blank" rel="noopener" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">About the SNU Grand Quest Challenge Programme ↗</a></p>
    `
  },
  {
    id: "2026-11-kyosu-column",
    category: "COLUMN",
    date: "Nov 2026",
    title: "Feature Column in Kyosu Shinmun: Machines That Cannot Draw Beyond Boundaries, and the People Who Come to Resemble Them",
    summary: "Dr. Jee Hang Lee, President of IAIS, writes the third instalment of the series \"Knowledge Without Blanks: Asking About Research Culture in the Age of AI\" for Kyosu Shinmun.",
    hero: {
      badge: "Column",
      title: "Machines That Cannot<br>Draw Beyond Boundaries",
      description: "A feature column by Dr. Jee Hang Lee in Kyosu Shinmun, in the series Knowledge Without Blanks.",
      buttonText: "Read More →"
    },
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Dr. Jee Hang Lee, President of IAIS, contributes a feature column to <strong>Kyosu Shinmun</strong> as the third instalment of the series <em>Knowledge Without Blanks: Asking About Research Culture in the Age of AI</em>.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Machines that cannot draw beyond boundaries or fill the gaps between them, and the people who come to resemble them
      </blockquote>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Key Messages</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>People who are missing from the data can also be left behind when AI improves.</li>
        <li>When AI learns again from people who learned from AI, everyone risks falling into a second-rate trap.</li>
        <li>Fluency is not the same as trustworthiness.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">The Argument</h3>
      <p>
        The previous instalment showed that AI inherits the blanks in its data rather than filling them. This creates a further problem. The filled cells are reproduced at ever larger scale while the blanks stay empty, and the blanks are gradually erased. Fine boundaries grow dull, and the vast data produced by the mainstream hardens the broad ones. Put bluntly, AI combines, predicts and generates within boundaries that are already set.
      </p>
      <p>
        Why, then, does AI for All raise the concern that it may never become a technology for everyone? The column examines this question through three further questions.
      </p>
    `
  },
  {
    id: "2026-11-kofwst-panel",
    category: "EVENT",
    date: "Nov 27, 2026",
    title: "Panel Discussion at the 2026 KOFWST Annual Conference",
    summary: "Dr. Jee Hang Lee, President of IAIS, joins the panel \"The Future We Live With AI: Asking About the Role of Humans\" following the keynote by Prof. Alice Oh of KAIST.",
    hero: {
      badge: "Upcoming Event",
      title: "The Future We Live With AI:<br>Asking About the Role of Humans",
      description: "Dr. Jee Hang Lee, President of IAIS, joins the panel at the 2026 KOFWST Annual Conference on 27 November 2026.",
      buttonText: "Event Details →"
    },
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Dr. Jee Hang Lee, President of IAIS, will join the panel discussion at the <strong>2026 Annual Conference of the Korea Federation of Women's Science & Technology Associations (KOFWST)</strong>, held under the theme <em>"Women in Science and Technology Leading Coexistence in the Age of AI"</em>.
      </p>
      <ul class="list-none space-y-2 text-gray-700 bg-gray-50 border border-gray-200 rounded p-6">
        <li><strong>Date:</strong> Friday 27 November 2026, 13:30–17:00</li>
        <li><strong>Venue:</strong> International Conference Room (B1), Korea Science and Technology Center, Seoul</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Programme</h3>
      <p>
        <strong>Keynote (14:20–14:50):</strong> Prof. Alice Oh, Distinguished Professor, School of Computing, KAIST
      </p>
      <p>
        <strong>Panel discussion (15:00–15:40):</strong> <em>The Future We Live With AI: Asking About the Role of Humans</em>
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Chair:</strong> Prof. Soojung Ryu, Department of Electrical and Computer Engineering, Seoul National University</li>
        <li><strong>Panellist:</strong> Kyunghwa Ok, Executive Vice President, KT</li>
        <li><strong>Panellist:</strong> Yeonsoo Lee, CEO, NC AI</li>
        <li><strong>Panellist:</strong> Dr. Jee Hang Lee, President, IAIS, and Professor, Sangmyung University</li>
      </ul>
      <p class="text-sm text-gray-500">The detailed programme may change.</p>
    `
  },
  {
    id: "2025-05-samsung-care-at-home",
    category: "INVITED TALK",
    date: "May 30, 2025",
    title: "Invited Talk at the Samsung Global Technology Conference",
    summary: "Dr. Jee Hang Lee, President of IAIS, spoke on AI systems and data privacy for the human-centred smart caring home at \"Care @ Home: Innovations, Challenges, and Solutions in Home-based Digital Healthcare\".",
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
    summary: "Dr. Jee Hang Lee, President of IAIS, delivered a lecture on the theory and practice of digital biomarkers.",
    content: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed">
        Dr. Jee Hang Lee, President of IAIS, gave an invited talk at the <strong>Graduate School of Public Health, Seoul National University</strong> on 15 May 2025.
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose paper has been accepted at <strong>ACM CHI 2025</strong>, the ACM Conference on Human Factors in Computing Systems, held in Yokohama, Japan.
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose paper has been accepted in <strong>Frontiers in Computational Neuroscience</strong> (SCIE).
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>IEEE Access</strong> (SCIE).
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose three papers have been accepted at <strong>RLDM 2025</strong>, the Multi-disciplinary Conference on Reinforcement Learning and Decision Making, held in Dublin, Ireland.
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>Applied Sciences</strong> (SCIE) as a Feature Paper.
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
        Congratulations to Dr. Jee Hang Lee, President of IAIS, whose collaborative work with <strong>Prof. Gang Ren</strong> (Xiamen University of Technology) has been accepted in <strong>Electronics</strong> (SCIE) as a Feature Paper.
      </p>
      <blockquote class="p-6 bg-gray-50 border-l-4 border-[#E0B24D] shadow-sm my-6 font-serif text-gray-800">
        Multimodal Guidance for Enhancing Cyclist Road Awareness
      </blockquote>
      <p><a href="/publications/journal-detail.html?id=j2025-cyclist-guidance" class="font-semibold text-[#114B74] hover:text-[#E0B24D]">View the publication →</a></p>
    `
  }
];
