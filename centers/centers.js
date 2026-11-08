// centers/centers.js
// Research centres. The home page and the Organisation page show these four entries in this order.
// Fields:
//   id, name, shortName, badge, slogan, summary  used on the list, home and organisation pages
//   description  HTML body for the detail page
//   lead         centre leadership line
//   keyPapers    representative publications; each item is either a plain string or
//                { title, venue, link } where link points to a publication detail page or URL
const CENTERS_DATA = [
  {
    id: "comp-brain-ai",
    name: "Center for Computational Brain & AI",
    shortName: "Computational Brain & AI",
    badge: "AI BY THE HUMAN",
    slogan: "From organism to algorithm: implement the mechanism, then generalise the form.",
    summary: "Formalises the computational mechanisms of the brain, from prefrontal meta-control to causal inference and social norms, and turns them into adaptive artificial agents and into AI that optimises human cognition.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Computational Brain & AI</strong> treats AI as a computational model of an organism's cognition. The history of AI has, in effect, been a history of psychology and neuroscience: each advance in our understanding of behaviour, cognition and the brain has reshaped how machines learn. The Center continues that tradition deliberately.
      </p>
      <p class="mb-6">
        Our method is direct. We identify a mechanism that the brain uses, implement it as an algorithm, and then generalise its form until it becomes a principle that machines can share. We do not pursue scale. We pursue the mechanism.
      </p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Programmes</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Prefrontal meta-control for reinforcement learning:</strong> The human prefrontal cortex arbitrates between model-based planning and model-free habit according to their reliability. Our Meta-Dyna agents implement this arbitration together with hippocampus-inspired mental simulation, and they adapt quickly and flexibly in both individual and social decision tasks.</li>
        <li><strong>Norm-aware autonomous agents:</strong> We build agents that detect, learn and revise multiple social norms at run time, and we use prefrontal meta-control to explain how humans adapt to several norms at once.</li>
        <li><strong>AI that optimises human cognition:</strong> Beyond AI that solves a task for a person, we develop AI that shapes the task itself so that the person learns better. Our task-control framework designs stimulus sequences in silico that steer human causal inference towards accuracy or efficiency, with effects confirmed in human experiments.</li>
        <li><strong>Computational psychiatry:</strong> Brain-inspired agents serve as simulation platforms for designing treatment regimens and training curricula before they reach patients.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Why It Matters</h3>
      <p>
        An agent that computes the way the brain computes is faster, more memory-efficient and more adaptive. An AI that understands how the brain learns can also make the human learner stronger. The Center works on both sides of this exchange.
      </p>
    `,
    lead: "Dr. Yu-Jin Cha (M.D., Ph.D.), Director",
    keyPapers: [
      { title: "Toward high-performance, memory-efficient, and fast reinforcement learning: Lessons from decision neuroscience", venue: "Science Robotics, 2019", link: "/publications/journal-detail.html?id=j2019-science-robotics" },
      { title: "Controlling human causal inference through in silico task design", venue: "Cell Reports, 2024", link: "/publications/journal-detail.html?id=j2024-in-silico-task-design" },
      { title: "Importance of prefrontal meta control in human-like reinforcement learning", venue: "Frontiers in Computational Neuroscience, 2022", link: "/publications/journal-detail.html?id=j2022-prefrontal-meta-control" },
      { title: "Prefrontal Meta-Control Incorporating Mental Simulation Enhances the Adaptivity of Reinforcement Learning Agents in Dynamic Environments", venue: "Frontiers in Computational Neuroscience, 2025", link: "/publications/journal-detail.html?id=j2025-prefrontal-meta-control-simulation" },
      { title: "N-Jason: Run-Time Norm Compliance in AgentSpeak(L)", venue: "Engineering Multi-Agent Systems, LNCS, 2014", link: "/publications/journal-detail.html?id=j2014-n-jason" }
    ]
  },
  {
    id: "comp-law",
    name: "Center for Computational Law",
    shortName: "Computational Law",
    badge: "LAW AS COMPUTATION",
    slogan: "Formalising the process of legal judgment while keeping its normative purpose human.",
    summary: "Grounds Computational Law in the computationalism of cognitive science, analyses legal judgment as structured inference, and builds AI that supports rather than replaces human judgment.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Computational Law</strong> studies legal judgment as a cognitive process. Most work on legal AI concerns application, regulation and the automation of legal services. The Center addresses the question that comes first: what cognitive structure does legal judgment have, and in what sense is it computable?
      </p>
      <p class="mb-6">
        Our starting point is computationalism, understood as a method rather than a claim that the mind is a machine. A criminal judgment takes evidence as input, integrates it under the rules of logic and experience, and derives a legal conclusion. The principle of free evaluation of evidence does not license arbitrary conviction. It demands reasoned inference, and reasoned inference has a structure that can be analysed.
      </p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Programmes</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>The computability of legal judgment:</strong> Using Marr's levels of analysis, we show that the algorithmic level of judgment, which covers the selection of evidence, the reconstruction of facts and the review of legal elements, can be formalised and grows with technology. The computational level, which carries the normative purpose of a trial, rests on the distinction between fact and norm and remains a matter for human justification.</li>
        <li><strong>Law-as-Code and Law-as-Data:</strong> We trace the two paradigms of Computational Law to the two strands of computationalism: rule-based symbol manipulation and the probabilistic, learning-based computation that followed connectionism.</li>
        <li><strong>Computational credibility of evidence:</strong> We define the conditions under which formalised evidence evaluation can be trusted in criminal justice, and we apply them to AI-assisted testimony systems for child witnesses.</li>
        <li><strong>Normative reasoning in artificial agents:</strong> Building on our work on norm-aware agents, we model how autonomous systems represent, follow and revise legal and social norms.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Our Position</h3>
      <p>
        AI in law should support judgment, not automate it. When the structure of a judgment becomes visible, its grounds become clear and similar cases become comparable. Final judgment and responsibility remain with the human being.
      </p>
    `,
    lead: "Dr. Ji-Young Son (Ph.D.), Director",
    keyPapers: [
      { title: "Computationalism in Cognitive Science and Criminal Legal Judgment: An Essay on the Philosophical Foundations of Computational Law", venue: "J.Y. Son, working paper" },
      { title: "Computational Credibility and the Structure of Evidence Evaluation in Criminal Justice", venue: "J.Y. Son, Journal of Public Choice, 5(1), 2026" },
      { title: "Materialization of the Process of forming Free Evaluation of Evidence in the Testimony and institutional Improvement", venue: "J.Y. Son, Review of Institution and Economics, 17(2), 2023" },
      { title: "Governing Intelligent Virtual Agent Behaviour with Norms", venue: "AAMAS, 2013", link: "/publications/conf-detail.html?id=c2013-aamas-governing-iva" }
    ]
  },
  {
    id: "psychology-ai",
    name: "Center for AI Psychology & Digital Physiology",
    shortName: "AI Psychology & Digital Physiology",
    badge: "AI PSYCHOLOGY",
    slogan: "What does AI know, what does it do, and what does it mean?",
    summary: "Formalises the human mind as computable models, reads it through the signals of the body, and applies the same lens to AI, laying the scientific basis of digital therapeutics and of verified intelligence.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for AI Psychology & Digital Physiology</strong> studies minds, human and artificial, through one computational language that spans brain, body and behaviour.
      </p>
      <p class="mb-6">
        Today's AI systems optimise tasks for people, yet each of them has learned something that we do not fully understand. Value alignment is a psychological problem before it is an engineering one. To trust what an AI values, we must first know its algorithm and its process, not only its output. Psychology has studied natural general intelligence for a century, and it is equipped to lead this inquiry.
      </p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Three Lines of Inquiry</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Digital Psychology (what AI means):</strong> We formalise cognitive constructs such as meta-control, causal inference and value computation as computable models. We implant them in AI as design priors and test whether the system's internal process, not just its behaviour, matches the model it was built from. This makes algorithm and process alignment measurable.</li>
        <li><strong>Digital Physiology (what AI does):</strong> Behaviour is the observable trace of the mind. We identify which combinations of embodied signals, such as eye movement, voice, mobility and physiological response, best reveal cognitive and mental states. A model of mind is verified only when it also explains the body's signal.</li>
        <li><strong>AI Anatomy (what AI knows):</strong> Rather than dissecting circuits one at a time, we verify AI top-down against criteria drawn from high-level cognitive theory, in the way a chip is verified against its specification. This extends the tradition of model checking for human cognitive models to the artificial mind.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">From Science to Digital Therapeutics</h3>
      <p class="mb-6">
        Digital physiology and digital psychology form the scientific basis of digital therapeutics. Computational models of cognition and physiological signals become measurable targets for intervention: response-time dynamics in daily self-reports track recovery from depression, task-specific voice features expose risk that self-report conceals, and self-talk serves as a mechanism of action for relieving anxiety.
      </p>
      <p>
        Our goal is clear: to move from Natural General Intelligence to <strong>Artificial General yet Verified Intelligence</strong>.
      </p>
    `,
    lead: "Dr. Jee Hang Lee (Ph.D.), President",
    keyPapers: [
      { title: "Talk to You More, Listen to You More, and Feel Better in Your Mind: Utilizing Self-talk as a Mechanism of Action for Alleviating Anxiety", venue: "ACM CHI, 2025", link: "/publications/conf-detail.html?id=c2025-chi-self-talk" },
      { title: "Response Time Dynamics From Noncognitive Ordinal Ecological Momentary Assessment as a Proxy for Symptom Change in Geriatric Depression", venue: "JMIR Aging, 2026", link: "/publications/journal-detail.html?id=j2026-ema-response-time" },
      { title: "Capturing the Voices at Risk: Designing Semi-Structured Speech Tasks for Voice Data Collection in Depression and Anxiety Risk Groups", venue: "Archives of Design Research, 2025", link: "/publications/journal-detail.html?id=j2025-voices-at-risk" },
      { title: "Development and Validation of a GPS Error-Mitigation Algorithm for Mental Health Digital Phenotyping", venue: "Electronics, 2026", link: "/publications/journal-detail.html?id=j2026-gps-error-mitigation" },
      { title: "Neural Effects of One's Own Voice on Self-Talk for Emotion Regulation", venue: "Brain Sciences, 2024", link: "/publications/journal-detail.html?id=j2024-own-voice-self-talk" }
    ]
  },
  {
    id: "medipharm-ai",
    name: "Center for Medicine, Pharmacology & AI",
    shortName: "Medicine, Pharmacology & AI",
    badge: "AI FOR THE HUMAN",
    slogan: "Optimising screening and treatment with models of the human mind.",
    summary: "Translates computational models of cognition into clinical tools: AI-optimised screening for cognitive impairment, digital therapeutics validated in clinical trials, and neural biomarkers for mental disorders.",
    description: `
      <p class="text-xl text-gray-800 font-serif leading-relaxed mb-6">
        The <strong>Center for Medicine, Pharmacology & AI</strong> puts AI to work for the human. It takes the mechanisms that IAIS uncovers in the brain and mind and turns them into tools that clinicians and patients can use.
      </p>
      <p class="mb-6">
        The principle is the same one that guides our basic research. When AI understands how a person thinks and learns, it can optimise the test that screens them and the treatment that helps them.
      </p>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Core Research Programmes</h3>
      <ul class="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>Optimised screening for cognitive impairment:</strong> A full digital cognitive battery takes about 30 minutes. By selecting tasks and features with reinforcement learning, we reduce screening to about 90 seconds while preserving accuracy, and we combine voice, eye-movement and cognitive markers to detect amyloid-related impairment.</li>
        <li><strong>Digital therapeutics for cognition:</strong> Our AI chatbot-based cognitive training programmes, tested with older adults over 12 weeks, improve cognitive function, with the largest gains among those who need them most.</li>
        <li><strong>Digital therapeutics for mental health:</strong> In a randomised controlled trial, our smartphone therapeutic for generalised anxiety disorder reduced anxiety beyond usual care.</li>
        <li><strong>Neural biomarkers and intervention:</strong> EEG markers such as theta power and theta–gamma coupling characterise panic disorder and open a path to targeted, non-invasive stimulation.</li>
        <li><strong>Treatment design in silico:</strong> Brain-inspired agents simulate how patients respond, which allows treatment regimens and curricula to be optimised before clinical use.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-[#12264A] mt-8 mb-4">Clinical Partnership</h3>
      <p>
        The Center works with university hospitals and clinical researchers in Korea to validate every tool in real clinical settings, from field studies in rural communities to randomised controlled trials.
      </p>
    `,
    lead: "Dr. Jee Hang Lee (Ph.D.), President, with clinical partners",
    keyPapers: [
      { title: "Anzeilax, a Smartphone-based Digital Therapeutic for Generalized Anxiety Disorder: A Randomized Controlled Trial", venue: "Journal of Medical Internet Research, 2025", link: "/publications/journal-detail.html?id=j2025-anzeilax-rct" },
      { title: "Optimizing mobile cognitive assessment reduces administration time while maintaining screening accuracy in older adults", venue: "Scientific Reports, 2025", link: "/publications/journal-detail.html?id=j2025-optimised-mobile-assessment" },
      { title: "Enhancing Cognitive Functions of Older Adults With Software Robot: Longitudinal Exploratory Field Study", venue: "JMIR mHealth and uHealth, 2026", link: "/publications/journal-detail.html?id=j2026-software-robot" },
      { title: "Theta power reduction and theta–gamma coupling desynchronization are associated with working memory interference and anxiety symptoms in panic disorder", venue: "BMC Psychiatry, 2024", link: "/publications/journal-detail.html?id=j2024-theta-gamma-panic" },
      { title: "From Prodromal to Preclinical: Detecting Amyloid-Beta Through Mobile Gaze Analysis", venue: "Alzheimer's & Dementia, 2025", link: "/publications/journal-detail.html?id=j2025-mobile-gaze-amyloid" }
    ]
  }
];
