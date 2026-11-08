// publications/conf.js
// Peer-reviewed conference and workshop papers, newest first.
// Fields are the same as journal.js, plus:
//   type   "Conference", "Workshop", "Symposium" or "Preprint"
const CONF_PAPERS = [
  {
    id: "c2025-chi-self-talk",
    year: "2025",
    type: "Conference",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2025), Yokohama, Japan",
    title: "Talk to You More, Listen to You More, and Feel Better in Your Mind: Utilizing Self-talk as a Mechanism of Action for Alleviating Anxiety",
    authors: "C.M. Park, H.S. Song, J.Y. Lee, G.J. Yang, J.W. Kim, J.H. Lee*",
    abstract: "This work positions self-talk as the mechanism of action in a digital intervention for anxiety. It describes how users talk to and listen to themselves through the app and reports how the practice relieves anxiety.",
    doi: "https://doi.org/10.1145/3706599.3720071",
    award: "CS top-tier conference"
  },
  {
    id: "c2025-rldm-meta-control",
    year: "2025",
    type: "Conference",
    venue: "Reinforcement Learning and Decision Making (RLDM 2025), Dublin, Ireland",
    title: "Prefrontal Meta-Control Enables the Improved Adaptivity of Reinforcement Learning Agents",
    authors: "J.H. Kim, J.H. Lee*",
    abstract: "The paper implements prefrontal meta-control in a reinforcement learning agent that arbitrates between learning strategies. The agent adapts more quickly to changing environments than agents with a single strategy.",
    doi: ""
  },
  {
    id: "c2025-rldm-hrl-mci-test",
    year: "2025",
    type: "Conference",
    venue: "Reinforcement Learning and Decision Making (RLDM 2025), Dublin, Ireland",
    title: "Optimising the Neuropsychological Test for Screening People with Mild Cognitive Impairment Using Hierarchical Reinforcement Learning Agent",
    authors: "J.S. Kim, H.J. Ko, W. Kim, B.H. Yun, S.Y. Park, B.R. Kim, J.H. Lee*, G.H. Kim, J.W. Kim",
    abstract: "A hierarchical reinforcement learning agent selects which items of a neuropsychological test to administer when screening for mild cognitive impairment. The optimised test shortens assessment while preserving screening accuracy.",
    doi: ""
  },
  {
    id: "c2025-rldm-policy-distillation",
    year: "2025",
    type: "Conference",
    venue: "Reinforcement Learning and Decision Making (RLDM 2025), Dublin, Ireland",
    title: "Policy Distillation through the Lens of the Social Learning Paradigm in the Multi-Agent Reinforcement Learning",
    authors: "G.H. Na, D. Chung, J.H. Lee*",
    abstract: "The paper interprets policy distillation among reinforcement learning agents through the paradigm of human social learning. It examines how agents learn from one another in multi-agent settings and what this implies for collective learning.",
    doi: ""
  },
  {
    id: "c2024-ohbm-panic-connectivity",
    year: "2024",
    type: "Conference",
    venue: "Organization for Human Brain Mapping Annual Meeting (OHBM 2024), Seoul, Korea",
    title: "Explore the brain connectivity of panic disorder patients based on the graph theoretical approach",
    authors: "H. Hong, J.S. Ahn, J.Y. Park, J.H. Lee",
    abstract: "This study applies graph theory to brain connectivity data from patients with panic disorder. It identifies network properties that distinguish patients from healthy controls.",
    doi: ""
  },
  {
    id: "c2023-cosyne-meta-prediction",
    year: "2023",
    type: "Conference",
    venue: "Computational and Systems Neuroscience (COSYNE 2023), USA",
    title: "Controlling human cortical and striatal reinforcement learning with meta prediction error",
    authors: "J. Shin, J.H. Lee, S.W. Lee*",
    abstract: "The work introduces meta prediction error as a signal for controlling reinforcement learning in human cortex and striatum. It shows how manipulating this signal shapes learning at both behavioural and neural levels.",
    doi: ""
  },
  {
    id: "c2023-icES-self-disclosing",
    year: "2023",
    type: "Conference",
    venue: "The 5th International Conference on Emotion and Sensibility, Korea",
    title: "Towards the self-disclosing generative model capable of explaining the rationale on emotionally supportive response",
    authors: "A.Y. Kim, Y.J. Roh, S.L. Jeong, S.I. Park, E.S. Oh, H.J. Hong, J.H. Lee",
    abstract: "The authors develop a generative dialogue model that produces emotionally supportive responses and explains the reasoning behind them. Self-disclosure of the rationale aims to make supportive AI more transparent and trustworthy.",
    doi: ""
  },
  {
    id: "c2023-kips-emotion-intensity",
    year: "2023",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference",
    title: "On the Predictive Model for Emotion Intensity Improving the Efficacy of Emotionally Supportive Chat",
    authors: "S.L. Jeong, Y.J. Roh, A.Y. Kim, S.I. Park, E.S. Oh, H.J. Hong, J.H. Lee",
    abstract: "This paper builds a model that predicts the intensity of a user's emotion during conversation. The prediction allows a supportive chatbot to tailor its responses and become more effective.",
    doi: ""
  },
  {
    id: "c2023-kips-text-to-ontology",
    year: "2023",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference",
    title: "Decoupling Ontology Learning and Generation using Neuro-Symbolic Architecture for Text-to-Ontology Generation",
    authors: "H.C. Park, E.S. Yoon, M.J. Kim, H.J. Bae, Y.J. Shin, J.H. Lee",
    abstract: "The paper proposes a neuro-symbolic architecture that separates ontology learning from ontology generation. The design improves the construction of ontologies from natural language text.",
    doi: ""
  },
  {
    id: "c2022-rldm-generalisable-rl",
    year: "2022",
    type: "Conference",
    venue: "Reinforcement Learning and Decision Making (RLDM 2022), USA",
    title: "Exploring essential computations underlying generalizable human reinforcement learning",
    authors: "J.H. Lee, D.J. Kim, S.W. Lee",
    abstract: "This work investigates which computations allow human reinforcement learning to generalise across tasks. It compares candidate models against human behaviour to identify the essential components.",
    doi: ""
  },
  {
    id: "c2022-cosyne-in-silico-manipulation",
    year: "2022",
    type: "Conference",
    venue: "Computational and Systems Neuroscience (Cosyne 2022), Lisbon, Portugal",
    title: "In silico manipulation of cortical computation underlying goal-directed learning",
    authors: "J.H. Shin, J.H. Lee, S.W. Lee",
    abstract: "The authors design tasks in silico that manipulate the cortical computations underlying goal-directed learning. This extended version of the NeurIPS workshop paper links task design to neural control of learning.",
    doi: ""
  },
  {
    id: "c2022-neurips-ws-in-silico",
    year: "2022",
    type: "Workshop",
    venue: "NeurIPS Workshop on Human and Machine Decisions, Virtual",
    title: "In silico manipulation of human cortical computation underlying goal-directed learning",
    authors: "J.H. Shin, J.H. Lee, S.W. Lee",
    abstract: "This workshop paper shows that computationally designed tasks can manipulate the human cortical computations that support goal-directed learning. It demonstrates a path towards controlling human learning through task design.",
    doi: ""
  },
  {
    id: "c2021-kips-text-to-ontology",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 891–894",
    title: "A case study on Text-to-Ontology transformation on the basis of neural translation",
    authors: "Y.J. Shin, J.H. Lee",
    abstract: "The paper treats the conversion of text into ontologies as a neural translation problem. A case study demonstrates the feasibility of the approach.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2021-kips-export-price",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 738–740",
    title: "Predicting the Future Price of Export Items using a Deep Neural Network with Past Year's Trade Data",
    authors: "J.H. Kim, J.H. Lee",
    abstract: "The authors train a deep neural network on the previous year's trade data to predict the future prices of export items. The model provides a basis for data-driven trade planning.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2021-kips-digital-humans",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 1005–1008",
    title: "A prototype of digital humans capable of emotionally supportive responses using deep generative models",
    authors: "C. Song, J.H. Lee",
    abstract: "This paper presents a prototype digital human that produces emotionally supportive responses with deep generative models. It demonstrates the potential of digital humans for emotional support.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2021-kips-sr-two-stage",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 910–913",
    title: "Evaluating a successor representation-based reinforcement learning algorithm in the 2-stage Markov decision task",
    authors: "S.H. Kim, J.H. Lee",
    abstract: "The paper evaluates a reinforcement learning algorithm based on the successor representation in the two-stage Markov decision task. It compares the algorithm's choices with those of model-based and model-free learners.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2021-kips-lyric-style-transfer",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 741–744",
    title: "Engineering a deep-generative model for lyric writing based upon a style transfer of song writers",
    authors: "H.J. Hong, S.H. Kim, J.H. Lee",
    abstract: "The authors build a deep generative model that writes lyrics by transferring the style of particular songwriters. The work lays the groundwork for style-aware lyric generation.",
    doi: ""
  },
  {
    id: "c2021-kips-ai-world-cup",
    year: "2021",
    type: "Conference",
    venue: "Proceedings of the Korea Information Processing Society Conference, pp. 819–822",
    title: "Developing artificial football agents based upon multi-agent techniques in the AI world cup",
    authors: "E. Lee, H.A. Seong, M. Jung, H.I. Lee, J. Joung, E.C. Lee, J.H. Lee",
    abstract: "This paper develops artificial football agents with multi-agent techniques for the AI World Cup competition. It describes the agents' coordination strategies and their performance.",
    doi: ""
  },
  {
    id: "c2020-arxiv-brain-inspired-rl",
    year: "2020",
    type: "Preprint",
    venue: "arXiv preprint arXiv:2007.04578",
    title: "On the Reliability and Generalizability of Brain-inspired Reinforcement Learning Algorithms",
    authors: "D. Kim†, J.H. Lee†, J.H. Shin, M.A. Yang, S.W. Lee",
    abstract: "The paper tests whether reinforcement learning algorithms inspired by the brain's arbitration between model-based and model-free learning perform reliably and generalise across tasks. The results support brain-inspired arbitration as a robust principle for reinforcement learning.",
    doi: "https://arxiv.org/abs/2007.04578"
  },
  {
    id: "c2020-kaia-deep-interaction",
    year: "2020",
    type: "Conference",
    venue: "The 2nd Korean Artificial Intelligence Association Conference (KAIA 2020), Korea",
    title: "Deep Interaction between Reinforcement Learning Algorithms and Human Reinforcement Learning",
    authors: "J. Lee†, J. Shin†, S.W. Lee",
    abstract: "This work explores a two-way interaction between reinforcement learning algorithms and human reinforcement learning. Algorithms model human learners and, in turn, shape the tasks that humans learn from.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2020-kaia-predictive-spacetime",
    year: "2020",
    type: "Conference",
    venue: "The 2nd Korean Artificial Intelligence Association Conference (KAIA 2020), Korea",
    title: "Biological Reinforcement Learning via Predictive Spacetime Encoding",
    authors: "M.A. Yang, J.H. Lee, S.W. Lee",
    abstract: "The paper proposes a biologically inspired reinforcement learning model that encodes predictions over space and time. The encoding supports efficient learning in sequential decision tasks.",
    doi: "",
    award: "Outstanding Paper Award"
  },
  {
    id: "c2019-neurips-ws-task-design",
    year: "2019",
    type: "Workshop",
    venue: "NeurIPS Workshop on Biological and Artificial Reinforcement Learning, Vancouver, Canada",
    title: "Designing model-based and model-free reinforcement learning tasks without human guidance",
    authors: "J. Lee†, S. Tong†, J. Shin†, S.H. Kim, S.W. Lee",
    abstract: "This extended version of the RLDM paper uses reinforcement learning to design tasks that separate model-based from model-free learning without human guidance. The automatically designed tasks elicit the targeted learning strategies.",
    doi: ""
  },
  {
    id: "c2019-rldm-task-design",
    year: "2019",
    type: "Conference",
    venue: "Reinforcement Learning and Decision Making (RLDM 2019), Montréal, Canada",
    title: "Designing model-based and model-free reinforcement learning tasks without human guidance",
    authors: "J. Lee†, S. Tong†, J. Shin†, S.H. Kim, S.W. Lee",
    abstract: "The authors train an agent to design decision tasks that favour either model-based or model-free learning in humans. The approach removes the need for hand-crafted task design.",
    doi: ""
  },
  {
    id: "c2019-hri-lifespan-agent",
    year: "2019",
    type: "Conference",
    venue: "ACM/IEEE International Conference on Human-Robot Interaction (HRI 2019), Daegu, Korea",
    title: "Lifespan Design of Conversational Agent with Growth and Regression Metaphor for the Natural Supervision on Robot Intelligence",
    authors: "C. Park, J.Y. Lee, H. Baek, H. Lee, J. Lee, J. Kim",
    abstract: "This paper designs a conversational agent whose intelligence appears to grow and regress over its lifespan. The metaphor helps users supervise and correct robot intelligence in a natural way.",
    doi: "https://doi.org/10.1109/HRI.2019.8673212"
  },
  {
    id: "c2018-aaai-fss-metacognition",
    year: "2018",
    type: "Symposium",
    venue: "AAAI Fall Symposium, Arlington, Virginia, USA",
    title: "Metacognition for a Common Model of Cognition",
    authors: "J. Kralik, J. Lee, P. Rosenbloom, P. Jackson, S. Epstein, O. Romero, R. Sanz, O. Larue, H. Schmidtke, S.W. Lee, K. McGreggor",
    abstract: "The authors propose how metacognition should be represented within the Common Model of Cognition. They outline the functions and mechanisms that a metacognitive component would need.",
    doi: ""
  },
  {
    id: "c2018-smc-kb-completion",
    year: "2018",
    type: "Conference",
    venue: "IEEE International Conference on Systems, Man, and Cybernetics (SMC 2018), Miyazaki, Japan",
    title: "Automated Knowledge Base Completion Using Collaborative Filtering and Deep Reinforcement Learning",
    authors: "A. Tortay†, J. Lee†, C. Lee, S.W. Lee",
    abstract: "The paper completes missing entries in a knowledge base by combining collaborative filtering with deep reinforcement learning. The method automates knowledge base completion with reduced human effort.",
    doi: "https://doi.org/10.1109/SMC.2018.00521"
  },
  {
    id: "c2018-smc-social-reasoning",
    year: "2018",
    type: "Conference",
    venue: "IEEE International Conference on Systems, Man, and Cybernetics (SMC 2018), Miyazaki, Japan",
    title: "Using Social Reasoning Framework to Guide Normative Behaviour of Intelligent Virtual Agents",
    authors: "J. Lee, S.W. Lee, J. Padget",
    abstract: "This work uses a social reasoning framework to guide the normative behaviour of intelligent virtual agents. Agents reason about social norms and select behaviour that observers judge appropriate.",
    doi: ""
  },
  {
    id: "c2018-icce-ai-world-cup",
    year: "2018",
    type: "Conference",
    venue: "IEEE/IEIE International Conference on Consumer Electronics Asia (ICCE-Asia 2018), Korea",
    title: "A Competitive Path to Build Artificial Football Agents for AI Worldcup",
    authors: "S. Yi, J. Lee, C. Lee, J. Kim, S. An, S.W. Lee",
    abstract: "The paper describes the development of competitive artificial football agents for the AI World Cup. It reports the design choices that made the agents effective in competition.",
    doi: ""
  },
  {
    id: "c2018-cosyne-mb-mf",
    year: "2018",
    type: "Conference",
    venue: "Computational and Systems Neuroscience (Cosyne 2018), Denver, USA",
    title: "Maximally separating and correlating model-based and model-free reinforcement learning",
    authors: "S. Lee, J. Lee, S.W. Lee",
    abstract: "The authors design tasks that either maximally separate or maximally correlate model-based and model-free reinforcement learning. These tasks give experimental control over which learning system drives behaviour.",
    doi: ""
  },
  {
    id: "c2018-hri-fribo",
    year: "2018",
    type: "Conference",
    venue: "The 13th ACM/IEEE International Conference on Human-Robot Interaction (HRI 2018), Chicago, USA",
    title: "Fribo: A Social Networking Robot for Increasing Social Connectedness through Sharing Daily Home Activities from Living Noise Data",
    authors: "K. Jeong, J. Sung, H. Lee, C. Park, Y. Jeong, J. Lee, J. Kim",
    abstract: "Fribo is a home robot that recognises daily activities from household noise and shares them anonymously among a group of friends who live alone. A field study shows that the robot increases social connectedness.",
    doi: "https://doi.org/10.1145/3171221.3171254",
    award: "Best Paper Award"
  },
  {
    id: "c2018-khci-driving-companion",
    year: "2018",
    type: "Conference",
    venue: "Human-Computer Interaction Conference (KHCI 2018), Korea (in Korean)",
    title: "Design of Driving Companion Bot for Driver's Anger Detection and Response",
    authors: "M. Yang, N. Kim, S. Lee, Y. Yoo, J.I. Lee, J. Lee, J. Kook, J. Kim",
    abstract: "This paper designs an in-car companion bot that detects driver anger and responds to it. The bot aims to reduce anger-related risk while driving.",
    doi: ""
  },
  {
    id: "c2018-khci-fubu",
    year: "2018",
    type: "Conference",
    venue: "Human-Computer Interaction Conference (KHCI 2018), Korea (in Korean)",
    title: "Do Work-out with FUBU: Design of Home Training Social Assist Robot on Raspberry PI",
    authors: "W. Lee, Y. Lee, D. Lim, S. Choi, C. Lee, H. Kim, J. Won, H. Kim, J. Kook, J. Lee, J. Kim",
    abstract: "The authors design FUBU, a social robot built on Raspberry Pi that assists users during home training. The robot encourages and guides users through their exercise.",
    doi: ""
  },
  {
    id: "c2017-icra-home-social-robot",
    year: "2017",
    type: "Conference",
    venue: "IEEE International Conference on Robotics and Automation (ICRA 2017), Late Breaking Results, Singapore",
    title: "Home Social Robots Sharing Indoor Activities with Friends: A Field Study",
    authors: "K. Jeong, A. Kim, H. Kim, J. Lee, J. Kim",
    abstract: "This field study deploys home social robots that share indoor activities among friends. It reports how the robots affect the sense of connection between users.",
    doi: ""
  },
  {
    id: "c2017-chi-learning-companion",
    year: "2017",
    type: "Conference",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI 2017), Denver, USA",
    title: "Hey, Wake Up: Come Along with the Artificial Learning Companion to the e-Learner's Outcomes High!",
    authors: "H. Kim, B. Kim, J. Lee, J. Kim",
    abstract: "The paper introduces an artificial learning companion that keeps e-learners attentive during online study. The companion aims to improve learning outcomes by sustaining engagement.",
    doi: ""
  },
  {
    id: "c2016-windsor-overheating",
    year: "2016",
    type: "Conference",
    venue: "9th Windsor Conference: Making Comfort Relevant, Network for Comfort and Energy Use in Buildings, UK",
    title: "Investigating the Overheating Risk in Refurbished Social Housing",
    authors: "M. Vellei, A.P. Ramallo-Gonzalez, D. Kaleli, J. Lee, S. Natarajan",
    abstract: "This study assesses the risk of overheating in social housing after refurbishment. It identifies conditions under which refurbished homes become uncomfortably warm.",
    doi: ""
  },
  {
    id: "c2015-aisb-quarterly-aamas",
    year: "2015",
    type: "Conference",
    venue: "AISB Quarterly, No. 141, pp. 13–16, Artificial Intelligence and Simulation of Behaviour",
    title: "Event: Autonomous Agents and Multi-Agent Systems & Description of Presented Research in AAMAS-2014",
    authors: "J. Lee",
    abstract: "This report reviews the AAMAS 2014 conference and summarises the research that the author presented there on run-time norm compliance in BDI agents.",
    doi: ""
  },
  {
    id: "c2014-aamas-norm-compliance",
    year: "2014",
    type: "Conference",
    venue: "International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS 2014), pp. 1581–1582",
    title: "Run-Time Norm Compliance in BDI Agents",
    authors: "J. Lee, J. Padget, B. Logan, D. Dybalova, N. Alechina",
    abstract: "The paper presents a framework that allows BDI agents to detect norms at run time and trigger plans that comply with them. It extends the agent language and scheduler so that agents can meet obligations with deadlines and priorities.",
    doi: "https://ifaamas.csc.liv.ac.uk/Proceedings/aamas2014/aamas/p1581.pdf"
  },
  {
    id: "c2014-wacv-optical-flow",
    year: "2014",
    type: "Conference",
    venue: "IEEE Winter Conference on Applications of Computer Vision (WACV 2014)",
    title: "Robust Optical Flow against Camera Motion Blur using RGB-Motion Imaging and Directional Filters",
    authors: "W. Li, C. Yang, J. Lee, D. Cosker",
    abstract: "The authors estimate optical flow in scenes blurred by camera motion by combining RGB-motion imaging with directional filtering. The method improves flow accuracy over existing approaches on blurred footage.",
    doi: "https://mlanthology.org/wacv/2014/li2014wacv-robust/",
    award: "Best Student Paper"
  },
  {
    id: "c2013-aamas-governing-iva",
    year: "2013",
    type: "Conference",
    venue: "International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS 2013)",
    title: "Governing Intelligent Virtual Agent Behaviour with Norms",
    authors: "J. Lee, T. Li, M. De Vos, J. Padget",
    abstract: "This paper uses norms to govern the behaviour of intelligent virtual agents. A normative framework constrains and guides agent actions so that their behaviour stays socially appropriate.",
    doi: "https://ifmas.csc.liv.ac.uk/Proceedings/aamas2013/docs/p1205.pdf"
  }
];
