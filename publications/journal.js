// publications/journal.js
// Journal publications, newest first. The home page shows the first three entries.
// Fields:
//   id       unique slug used in journal-detail.html?id=...
//   year     publication year
//   venue    journal, volume and indexing information
//   title    paper title
//   authors  author list (* corresponding author, † co-first author)
//   abstract short summary shown on the list and detail pages (replace with the official abstract if preferred)
//   doi      full DOI or publisher URL; leave "" if none
//   award    optional highlight, e.g. "Cover Feature"
const JOURNAL_PAPERS = [
  {
    id: "j2026-software-robot",
    year: "2026",
    venue: "JMIR mHealth and uHealth, 14(1), e75308 (SCIE, JCR < 10%)",
    title: "Enhancing Cognitive Functions of Older Adults With Software Robot: Longitudinal Exploratory Field Study",
    authors: "B. Yun, B. Kim, H. Ko, J. Kim, B.R. Kim, W. Kim, S. Park, J. Kim, J.H. Lee*, G.H. Kim",
    abstract: "This 12-week field study followed 133 Korean adults aged 55 to 75 who used a digital cognitive training programme that combined an AI chatbot with a peer group chat. Cognitive scores improved over the study, with the largest gains among participants who started with lower scores and those who used the programme most, and the group chat sustained engagement.",
    doi: "https://doi.org/10.2196/75308"
  },
  {
    id: "j2026-ema-response-time",
    year: "2026",
    venue: "JMIR Aging, 9, e83891 (SSCI, SCIE, JCR < 10%)",
    title: "Response Time Dynamics From Noncognitive Ordinal Ecological Momentary Assessment as a Proxy for Symptom Change in Geriatric Depression: Longitudinal Observational Study",
    authors: "J. Lee, J. Lee, S. Park, G. Do, J. Noh, S. Moon, K. Chung, S.J. Son, J.Y. Park",
    abstract: "The study followed older adults with a history of major depression who answered daily mood questions on a smartphone for four weeks. Participants who became faster at answering the repeated questions were more likely to show clinically meaningful improvement, which positions response time as a passive marker of symptom change.",
    doi: "https://doi.org/10.2196/83891"
  },
  {
    id: "j2026-drone-multitasking",
    year: "2026",
    venue: "International Journal of Human–Computer Interaction (SSCI, SCIE, JCR < 10%)",
    title: "Visual and Haptic Feedback in Multitasking Drone Operation: Effects of Task Complexity on Performance",
    authors: "G. Ren, Z. Huang, W. Lin, T. Huang, G. Wang, J.H. Lee*",
    abstract: "This study examines how visual and haptic feedback support operators who control drones while performing concurrent tasks. It compares feedback modalities across levels of task complexity and identifies the conditions in which multimodal feedback preserves performance.",
    doi: ""
  },
  {
    id: "j2026-gps-error-mitigation",
    year: "2026",
    venue: "Electronics, 15(2), 272 (SCIE)",
    title: "Development and Validation of a GPS Error-Mitigation Algorithm for Mental Health Digital Phenotyping",
    authors: "J.H. Lee, J.Y. Park, S.H. Park, S.J. Lee, G.H. Do, J.H. Lee*",
    abstract: "The paper presents a density-based preprocessing algorithm that removes GPS errors from smartphone location data before mobility features are computed for mental health monitoring. In a controlled test and a seven-day field study, the method located home, work and other key places within about 50 metres and produced consistent features on Android and iOS.",
    doi: "https://doi.org/10.3390/electronics15020272"
  },
  {
    id: "j2025-free-speech-mci",
    year: "2025",
    venue: "Alzheimer's & Dementia, 21, e102772 (SCIE, JCR < 3%)",
    title: "A Preliminary Investigation into How Free Speech Tasks Help Detect People Who Are at Risk of Mild Cognitive Impairment",
    authors: "S.Y. Park, J.H. Lee, W. Kim, H.J. Ko, B.H. Yun, J.S. Kim, J.H. Lee*, G.H. Kim, J. Kim",
    abstract: "Participants completed three speech tasks: reading a script, describing pictures and telling a story. Combining all three tasks gave the most accurate detection of people at risk of mild cognitive impairment, the storytelling task was part of every best-performing combination, and acoustic features carried more information than linguistic ones.",
    doi: "https://doi.org/10.1002/alz70859_102772"
  },
  {
    id: "j2025-mobile-gaze-amyloid",
    year: "2025",
    venue: "Alzheimer's & Dementia, 21, e102761 (SCIE, JCR < 3%)",
    title: "From Prodromal to Preclinical: Detecting Amyloid-Beta Through Mobile Gaze Analysis",
    authors: "J.S. Kim, W. Kim, H.J. Ko, B.H. Yun, S.Y. Park, B.R. Kim, J.H. Lee*, G.H. Kim, J. Kim",
    abstract: "This study tests whether eye movements recorded by a smartphone during cognitive tasks can indicate amyloid-beta status. It extends mobile gaze analysis from the prodromal stage of Alzheimer's disease towards the preclinical stage, where screening is most valuable.",
    doi: "https://doi.org/10.1002/alz70856_102761"
  },
  {
    id: "j2025-voices-at-risk",
    year: "2025",
    venue: "Archives of Design Research, 38(4), 51–67 (SCOPUS)",
    title: "Capturing the Voices at Risk: Designing Semi-Structured Speech Tasks for Voice Data Collection in Depression and Anxiety Risk Groups",
    authors: "M. Hemati, W. Seung, S. Jun, J.H. Lee*, J. Kim",
    abstract: "The authors designed MindCheck, a conversational speech task that collects voice data from people at risk of depression and anxiety, and refined it through two rounds of user studies. Placing voice prompts after the questionnaires, adopting a conversational format and giving clearer guidance improved engagement, and the final protocol added a neutral baseline recording.",
    doi: "https://doi.org/10.15187/adr.2025.11.38.4.51"
  },
  {
    id: "j2025-optimised-mobile-assessment",
    year: "2025",
    venue: "Scientific Reports, 15, 30356 (SCIE)",
    title: "Optimizing mobile cognitive assessment reduces administration time while maintaining screening accuracy in older adults",
    authors: "H.J. Ko†, J.S. Kim†, W. Kim, B.H. Yun, S.Y. Park, D.H. Kim, U.J. Kwon, S.K. Lim, B.R. Kim, J.H. Lee*, G.H. Kim*, J.W. Kim",
    abstract: "The study compared a mobile cognitive assessment with a paper-based screening test in older adults and derived a compact version from two subtests. Validated in an independent sample, the short version detected cognitive impairment accurately in about 90 seconds.",
    doi: "https://doi.org/10.1038/s41598-025-14130-9"
  },
  {
    id: "j2025-autonomous-taxi-ehmi",
    year: "2025",
    venue: "Electronics, 14(12), 2387 (SCIE)",
    title: "Making Autonomous Taxis Understandable: A Comparative Study of eHMI Feedback Modes and Display Positions for Pickup Guidance",
    authors: "G. Ren, Z. Huang, Y. Zhu, W. Lin, T. Huang, G. Wang, J.H. Lee*",
    abstract: "In a virtual reality experiment, participants located the pickup point of an autonomous taxi guided by eye, arrow or number displays mounted on the vehicle body or roof. Number displays gave the fastest responses, arrows reduced errors at close range, eye displays reduced serious misidentifications at longer distances, and body-mounted displays generally outperformed roof-mounted ones.",
    doi: "https://doi.org/10.3390/electronics14122387"
  },
  {
    id: "j2025-anzeilax-rct",
    year: "2025",
    venue: "Journal of Medical Internet Research, 27, e69981 (SCIE, JCR < 5%)",
    title: "Anzeilax, a Smartphone-based Digital Therapeutic for Generalized Anxiety Disorder: A Randomized Controlled Trial",
    authors: "C.M. Park, H.S. Song, H. Kim, E.J. Kim, H.J. Jo, J.J. Kim, J.H. Lee*, J.W. Kim",
    abstract: "This 10-week randomised controlled trial tested Anzeilax, a smartphone app that combines acceptance and commitment therapy with self-talk, as an addition to usual care for adults with generalised anxiety disorder. The app group showed a significantly greater reduction in anxiety than usual care alone, and most of the improvement held at follow-up.",
    doi: "https://doi.org/10.2196/69981"
  },
  {
    id: "j2025-street-crossing",
    year: "2025",
    venue: "Applied Sciences, 15(7), 3942 (SCIE, Feature Paper)",
    title: "Enhancing Street-Crossing Safety for Visually Impaired Pedestrians with Haptic and Visual Feedback",
    authors: "G. Ren, Z. Huang, W. Lin, T. Huang, G. Wang, J.H. Lee",
    abstract: "This study designs and evaluates haptic and visual feedback that guides visually impaired pedestrians when they cross the street. It compares feedback configurations for their effect on crossing safety, orientation and user confidence.",
    doi: "https://doi.org/10.3390/app15073942"
  },
  {
    id: "j2025-cyclist-guidance",
    year: "2025",
    venue: "Electronics, 14(7), 1363 (SCIE, Feature Paper)",
    title: "Multi-modal Guidance for Enhancing Cyclist Road Awareness",
    authors: "G. Ren, S. You, Z. Huang, W. Lin, G. Wang*, J.H. Lee*",
    abstract: "The paper investigates multimodal guidance that alerts cyclists to hazards on the road. It compares visual, haptic and combined cues and shows how multimodal feedback improves road awareness without overloading the rider.",
    doi: "https://doi.org/10.3390/electronics14071363"
  },
  {
    id: "j2025-prefrontal-meta-control-simulation",
    year: "2025",
    venue: "Frontiers in Computational Neuroscience, 19, 1559915 (SCIE, Invited)",
    title: "Prefrontal Meta-Control Incorporating Mental Simulation Enhances the Adaptivity of Reinforcement Learning Agents in Dynamic Environments",
    authors: "J.H. Kim, J.H. Lee*",
    abstract: "Inspired by prefrontal meta-control, the authors build a reinforcement learning agent that arbitrates between model-based and model-free control and uses mental simulation to evaluate options. In dynamic environments the agent adapts faster than conventional agents, which shows the value of brain-inspired control for adaptive AI.",
    doi: "https://doi.org/10.3389/fncom.2025.1559915"
  },
  {
    id: "j2025-visual-haptic-ball-sport",
    year: "2025",
    venue: "IEEE Access (SCIE)",
    title: "Enhancing Motor Skills and Coordination With Visual-Haptic Feedback in Ball Sport Training",
    authors: "G. Ren, Z. Huang, S. You, W. Lin, T. Huang, G. Wang*, J.H. Lee*",
    abstract: "This study develops a training system that delivers visual and haptic feedback during badminton practice. It evaluates how the combined feedback improves motor skill acquisition and coordination compared with conventional training.",
    doi: "https://ieeexplore.ieee.org/abstract/document/10908851"
  },
  {
    id: "j2024-digital-biomarkers-amyloid-mci",
    year: "2024",
    venue: "Alzheimer's & Dementia (SCIE, JCR < 3%)",
    title: "Investigating the Validity of Digital Biomarkers in the Preclinical Screening of Cognitive Normal, Amyloid-β− MCI and Amyloid-β+ MCI",
    authors: "W. Kim†, J.S. Kim†, H.J. Ko, B.H. Yun, Y. Kim, D.H. Kim, U.J. Kwon, S.K. Lim, B.R. Kim, J.H. Lee*, G.H. Kim*, J.W. Kim",
    abstract: "Using machine learning on mobile cognitive assessment data from a Korean dementia cohort, the study distinguished cognitively normal adults, amyloid-negative MCI and amyloid-positive MCI. Working memory measures separated normal cognition from impairment, while executive function measures helped identify amyloid-positive impairment, which offers a low-cost alternative to amyloid imaging.",
    doi: "https://doi.org/10.1002/alz.090074"
  },
  {
    id: "j2024-theta-gamma-panic",
    year: "2024",
    venue: "BMC Psychiatry, 24, 875 (SCIE)",
    title: "Theta power reduction and theta–gamma coupling desynchronization are associated with working memory interference and anxiety symptoms in panic disorder: A retrospective study",
    authors: "J.S. Ahn, H. Hong, J.H. Lee*, J.Y. Park*",
    abstract: "The study analysed EEG recorded at rest and during mental arithmetic in people with panic disorder and matched healthy controls. Patients showed weaker theta power and theta–gamma coupling, and lower left temporal theta power was associated with more severe anxiety.",
    doi: "https://doi.org/10.1186/s12888-024-06272-3"
  },
  {
    id: "j2024-ai-chatbot-dementia",
    year: "2024",
    venue: "Archives of Design Research, 37(5), 77–90 (SCOPUS)",
    title: "Development and Effectiveness of an AI Chatbot-Based Mobile Cognitive Screening and Customized Training Application for Preventing Dementia: Older Adults Living in Rural Areas of South Korea",
    authors: "B. Yun, W. Kim, H. Ko, S. Park, J. Kim, G.H. Kim, B. Kim, J.H. Lee*, J.W. Kim",
    abstract: "Older adults in rural South Korea were assigned either to an AI chatbot-based app for cognitive screening and tailored training or to conventional offline activities for six weeks. Only the app group improved significantly, with larger gains among participants with cognitive impairment and those who used the app more often.",
    doi: "https://doi.org/10.15187/adr.2024.11.37.5.77",
    award: "Cover Feature, Outstanding Paper"
  },
  {
    id: "j2024-own-voice-self-talk",
    year: "2024",
    venue: "Brain Sciences, 14(7), 637 (SCIE)",
    title: "Neural Effects of One's Own Voice on Self-Talk for Emotion Regulation",
    authors: "H.J. Jo, C. Park, E. Lee, J.H. Lee, J.W. Kim, S. Han, J. Kim, E.J. Kim, E. Kim, J.J. Kim",
    abstract: "This neuroimaging study examines whether hearing self-talk in one's own voice changes how the brain regulates emotion. It compares neural responses to self-talk in one's own voice and in another person's voice, which informs the design of voice-based digital therapeutics.",
    doi: "https://doi.org/10.3390/brainsci14070637"
  },
  {
    id: "j2024-in-silico-task-design",
    year: "2024",
    venue: "Cell Reports, 43(2), 113702 (SCIE)",
    title: "Controlling human causal inference through in silico task design",
    authors: "J.H. Lee, S.Y. Heo, S.W. Lee*",
    abstract: "The study shows that the structure of a task, designed in silico, can steer how people infer cause and effect. A computational model of human causal inference generates task designs that drive learners towards targeted inference strategies, which opens a route to controlling human learning through task design alone.",
    doi: "https://doi.org/10.1016/j.celrep.2024.113702"
  },
  {
    id: "j2023-stacking-ensemble-biomarkers",
    year: "2023",
    venue: "Alzheimer's & Dementia, 19, e082466 (SCIE, JCR < 3%)",
    title: "A Preliminary Feasibility Study on Screening Cognitive Impairment based on Multi-Modal Biomarkers and Stacking Ensemble AI Approach",
    authors: "W. Kim, J.S. Kim, H.J. Ko, B.H. Yun, Y.Y. Kim, D.H. Kim, U.J. Kwon, S.K. Lim, B.R. Kim, J.H. Lee*, G.H. Kim, J.W. Kim",
    abstract: "This study combines multimodal digital biomarkers collected on mobile devices with a stacking ensemble model to screen for cognitive impairment. The results establish the feasibility of the approach as an accessible screening tool.",
    doi: "https://doi.org/10.1002/alz.082466"
  },
  {
    id: "j2023-football-agents-reward",
    year: "2023",
    venue: "Applied Sciences, 13(6), 3622 (SCIE)",
    title: "The Role of a Reward in Shaping Multiple Football Agents' Behavior: An Empirical Study",
    authors: "S.H. Kim, J.H. Kim, J.H. Lee*",
    abstract: "The paper studies how reward design shapes the behaviour of multiple reinforcement learning agents in a simulated football game. It compares reward schemes and shows how each one changes cooperation, positioning and performance.",
    doi: "https://doi.org/10.3390/app13063622"
  },
  {
    id: "j2023-rl-network-scheduler",
    year: "2023",
    venue: "Applied Sciences, 13(6), 3397 (SCIE)",
    title: "Improving End-To-End Latency Fairness Using a Reinforcement-Learning-Based Network Scheduler",
    authors: "J. Kwon, J. Ryu, J.H. Lee, J. Joung",
    abstract: "The authors propose a network scheduler trained with reinforcement learning to balance end-to-end latency across traffic flows. The scheduler improves latency fairness compared with conventional scheduling methods.",
    doi: "https://doi.org/10.3390/app13063397"
  },
  {
    id: "j2022-prefrontal-meta-control",
    year: "2022",
    venue: "Frontiers in Computational Neuroscience, 16 (SCIE)",
    title: "Importance of prefrontal meta control in human-like reinforcement learning",
    authors: "J.H. Lee, J.Z. Leibo, S.J. An, S.W. Lee",
    abstract: "This review argues that reinforcement learning systems struggle with tasks that humans find easy because they lack prefrontal meta-control. It describes how the brain arbitrates between multiple learning strategies by weighing prediction accuracy, computational cost and time, and proposes this principle as a guide for human-like AI.",
    doi: "https://doi.org/10.3389/fncom.2022.1060101"
  },
  {
    id: "j2022-gaze-ensemble-loss",
    year: "2022",
    venue: "Intelligent Human Computer Interaction (IHCI 2022), LNCS, pp. 510–515 (SCOPUS)",
    title: "Improving Gaze Estimation Performance Using Ensemble Loss Function",
    authors: "S.H. Kim, S.G. Lee, J.H. Lee*, E.C. Lee",
    abstract: "The paper proposes an ensemble loss function for training deep gaze estimation models. Combining complementary loss terms improves the accuracy of gaze prediction.",
    doi: "https://doi.org/10.1007/978-3-031-27199-1_51"
  },
  {
    id: "j2022-stylised-lyrics",
    year: "2022",
    venue: "Intelligent Human Computer Interaction (IHCI 2022), LNCS, pp. 132–139 (SCOPUS)",
    title: "On the Evaluation of Generated Stylised Lyrics Using Deep Generative Models: A Preliminary Study",
    authors: "H.J. Hong, S.H. Kim, J.H. Lee",
    abstract: "This preliminary study generates song lyrics in the style of specific songwriters with deep generative models. It proposes and applies methods for evaluating how well the generated lyrics reproduce the target style.",
    doi: "https://doi.org/10.1007/978-3-031-27199-1_14"
  },
  {
    id: "j2022-ppg-denoiser",
    year: "2022",
    venue: "Sensors, 22(6), 2082 (SCIE)",
    title: "Preeminently Robust Neural PPG Denoiser",
    authors: "J.H. Kwon, S.E. Kim, N.H. Kim, E.C. Lee, J.H. Lee*",
    abstract: "The authors develop a deep neural network that removes noise and motion artefacts from photoplethysmography signals. The denoiser restores signal quality robustly across noise conditions and supports reliable physiological measurement.",
    doi: "https://doi.org/10.3390/s22062082"
  },
  {
    id: "j2021-touching-minds",
    year: "2021",
    venue: "Intelligent Human Computer Interaction (IHCI 2021), LNCS, pp. 106–116 (SCOPUS)",
    title: "Touching Minds: Deep Generative Models Composing the Digital Contents to Practice Mindfulness",
    authors: "S.H. Kim, J.H. Kim, J.A. Yang, J.Y. Lee, J.H. Lee*",
    abstract: "This work uses deep generative models to compose digital content that guides mindfulness practice. It demonstrates how generative AI can produce personalised material for mental wellbeing.",
    doi: "https://doi.org/10.1007/978-3-030-98404-5_9",
    award: "Best AI Model Award"
  },
  {
    id: "j2022-sr-rl-uncertain",
    year: "2022",
    venue: "KIPS Transactions on Software and Data Engineering, 11(8), 331–338 (KCI, in Korean)",
    title: "Evaluating SR-Based Reinforcement Learning Algorithm Under the Highly Uncertain Decision Task",
    authors: "S.H. Kim, J.H. Lee*",
    abstract: "The paper evaluates a reinforcement learning algorithm based on the successor representation in a decision task with high uncertainty. It compares the algorithm with model-based and model-free learners to characterise its strengths and limits.",
    doi: "https://koreascience.kr/article/JAKO202225042956129.pdf"
  },
  {
    id: "j2022-export-price-prediction",
    year: "2022",
    venue: "KIPS Transactions on Software and Data Engineering, 11(10), 427–436 (KCI, in Korean)",
    title: "Predicting the Future Price of Export Items in Trade Using a Deep Regression Model",
    authors: "J.H. Kim, J.H. Lee*",
    abstract: "The authors build a deep regression model that predicts the future prices of export items from historical trade data. The model supports data-driven decisions in international trade.",
    doi: "https://koreascience.kr/article/JAKO202231363558674.pdf"
  },
  {
    id: "j2021-integrated-ai",
    year: "2021",
    venue: "Communications of the Korean Institute of Information Scientists and Engineers, 39(12) (KCI, in Korean)",
    title: "Integrated Artificial Intelligence fused Data-driven and Human-inspired Intelligence",
    authors: "J.A. Kim et al.",
    abstract: "This article reviews approaches that integrate data-driven machine learning with human-inspired models of intelligence. It outlines how the two traditions can be combined in future AI systems.",
    doi: ""
  },
  {
    id: "j2020-masked-face-periocular",
    year: "2020",
    venue: "Intelligent Human Computer Interaction (IHCI 2020), LNCS, pp. 326–334 (SCOPUS)",
    title: "Authentication of Facial Images with Masks Using Periocular Biometrics",
    authors: "N.Y. Han, S.W. Seong, J. Ryu, H. Hwang, J. Joung, J. Lee, E.C. Lee",
    abstract: "The paper presents a face authentication method that relies on the periocular region when the lower face is covered by a mask. It shows that periocular features support reliable authentication of masked faces.",
    doi: ""
  },
  {
    id: "j2020-rppg-face-tracker",
    year: "2020",
    venue: "Intelligent Human Computer Interaction (IHCI 2020), LNCS, pp. 27–37 (SCOPUS)",
    title: "A comparative analysis on the impact of face tracker and skin segmentation onto improving the performance of real-time remote photoplethysmography",
    authors: "K. Lee, K. Jin, Y. Kim, J.H. Lee, E.C. Lee",
    abstract: "This study compares how face tracking and skin segmentation methods affect the accuracy of real-time remote photoplethysmography. It identifies the preprocessing choices that most improve camera-based heart rate measurement.",
    doi: ""
  },
  {
    id: "j2019-science-robotics",
    year: "2019",
    venue: "Science Robotics, 4(26) (SCIE)",
    title: "Toward high-performance, memory-efficient, and fast reinforcement learning: Lessons from decision neuroscience",
    authors: "J.H. Lee†, B. Seymour†*, J.Z. Leibo, S.J. An, S.W. Lee*",
    abstract: "This review draws lessons from decision neuroscience for the design of reinforcement learning systems. It explains how the brain achieves high performance, memory efficiency and speed by arbitrating between learning strategies, and it sets out how these principles can guide the next generation of AI and robotics.",
    doi: "https://doi.org/10.1126/scirobotics.aav2975"
  },
  {
    id: "j2019-electricity-non-residential",
    year: "2019",
    venue: "Energies, 12(21), 4046 (SCIE)",
    title: "Investigating Primary Factors Affecting Electricity Consumption in Non-Residential Buildings Using a Data-Driven Approach",
    authors: "S. Cho, J. Lee, J. Baek, G.S. Kim, S.B. Leigh",
    abstract: "The study uses data-driven analysis to identify the main factors that drive electricity consumption in non-residential buildings. Its findings inform targeted strategies for energy savings.",
    doi: "https://doi.org/10.3390/en12214046"
  },
  {
    id: "j2019-thermal-energy-feature-selection",
    year: "2019",
    venue: "Energies, 12(21), 4187 (SCIE)",
    title: "Development of an Improved Model to Predict Building Thermal Energy Consumption by Utilizing Feature Selection",
    authors: "J. Jang, J.S. Lee, E. Son, K. Park, G. Kim, J. Lee, S.B. Leigh",
    abstract: "The authors improve a predictive model of building thermal energy consumption by selecting the most informative input features. Feature selection raises prediction accuracy and simplifies the model.",
    doi: "https://doi.org/10.3390/en12214187"
  },
  {
    id: "j2017-companion-robot-emotion",
    year: "2017",
    venue: "Journal of Digital Contents Society, 18(7), 1293–1301 (KCI, in Korean)",
    title: "A Study on Interaction Design of Companion Robots Based on Emotional State",
    authors: "Y. Oh, Y. Shin, J. Lee, J. Kim",
    abstract: "This study proposes interaction designs for companion robots that respond to the emotional state of their users. It describes how emotional cues can shape robot behaviour in everyday interaction.",
    doi: ""
  },
  {
    id: "j2017-ar-home-training",
    year: "2017",
    venue: "Science of Emotion and Sensibility, 20(3), 119–130 (KCI, in Korean)",
    title: "The Effects of Virtual Competitors on AR Home Training System: Focusing on Immersion, Perceived Competition, and Learning Motivation",
    authors: "S. Choi, W. Lee, H. Kim, J. Won, J. Lee, Y. Lee, J. Kim",
    abstract: "The study examines how virtual competitors in an augmented reality home training system affect users. It measures their effect on immersion, perceived competition and motivation to learn.",
    doi: ""
  },
  {
    id: "j2017-energy-behaviour-model",
    year: "2017",
    venue: "User Modeling and User-Adapted Interaction (SCIE)",
    title: "A Computational Model for Designing Energy Behaviour Change Interventions",
    authors: "N. Mogles, J. Padget, E. Gabe-Thomas, I. Walker, J. Lee",
    abstract: "The paper presents a computational model of the psychological factors behind household energy behaviour. The model allows researchers to simulate and compare behaviour change interventions before they are deployed.",
    doi: "https://doi.org/10.1007/s11257-017-9199-9"
  },
  {
    id: "j2017-smart-meters",
    year: "2017",
    venue: "Building and Environment, 125, 439–450 (SCI, JCR 3%)",
    title: "How Smart Do Smart Meters Need to Be?",
    authors: "N. Mogles, I. Walker, A.P. Ramallo-Gonzalez, J. Lee, S. Natarajan, J. Padget, E. Gabe-Thomas, T. Lovett, G. Ren, S. Hyniewska, D. Coley",
    abstract: "This field study tested whether in-home energy displays work better when they give households context and personalised advice rather than raw consumption figures. Households that received the richer feedback lowered their heating temperatures and gas use and improved their energy knowledge.",
    doi: "https://doi.org/10.1016/j.buildenv.2017.09.008"
  },
  {
    id: "j2016-sensor-sets",
    year: "2016",
    venue: "Building and Environment, 110, 11–22 (SCI, JCR 3%)",
    title: "Designing Sensor Sets for Capturing Energy Events in Buildings",
    authors: "T. Lovett, J. Lee*, E. Gabe-Thomas, S. Natarajan, M. Brown, J. Padget",
    abstract: "The paper addresses how to choose which sensors to install in buildings when cost and deployment constraints apply. Using data from occupied homes, it ranks sensors by how well they capture energy events and selects optimal sensor sets through optimisation.",
    doi: ""
  },
  {
    id: "j2016-blur-robust-optical-flow",
    year: "2016",
    venue: "Neurocomputing (SCIE)",
    title: "Blur Robust Optical Flow using Motion Channel",
    authors: "W. Li, C. Yang, J. Lee, G. Ren, D. Cosker",
    abstract: "The authors propose an optical flow method that remains accurate when images are blurred by camera motion. An additional motion channel guides flow estimation through blurred regions.",
    doi: "https://doi.org/10.1016/j.neucom.2016.03.105"
  },
  {
    id: "j2016-overheating-households",
    year: "2016",
    venue: "Building Research & Information, 1–17 (SCI)",
    title: "Overheating in Vulnerable and Non-Vulnerable Households",
    authors: "M. Vellei, A.P. Ramallo-Gonzalez, D. Coley, J. Lee, E. Gabe-Thomas, T. Lovett, S. Natarajan",
    abstract: "This study compares the risk of indoor overheating in households with and without vulnerable occupants. Monitoring data show where vulnerable households face greater exposure to high indoor temperatures.",
    doi: "https://doi.org/10.1080/09613218.2016.1222190"
  },
  {
    id: "j2014-n-jason",
    year: "2014",
    venue: "Engineering Multi-Agent Systems, LNCS 8758, pp. 367–387, Springer (SCOPUS)",
    title: "N-Jason: Run-Time Norm Compliance in AgentSpeak(L)",
    authors: "J. Lee, J. Padget, B. Logan, D. Dybalova, N. Alechina",
    abstract: "The paper introduces N-Jason, an extension of the Jason BDI agent platform that lets agents recognise norms at run time and comply with them. It handles norms that are unknown at design time and schedules obligations with deadlines and priorities.",
    doi: "https://doi.org/10.1007/978-3-319-14484-9_19"
  },
  {
    id: "j2013-polite-virtual-agents",
    year: "2013",
    venue: "Computer Animation and Virtual Worlds, 24(3–4), 335–343 (SCI)",
    title: "Towards Polite Virtual Agents using Social Reasoning Techniques",
    authors: "J. Lee, T. Li, J. Padget",
    abstract: "This work applies social reasoning techniques so that virtual agents behave politely towards others. Social norms guide the agents' choices, which produces more believable behaviour in virtual environments.",
    doi: "https://doi.org/10.1002/cav.1517"
  },
  {
    id: "j2013-decoupling-cognitive-agents",
    year: "2013",
    venue: "Cognitive Agents for Virtual Environments, LNCS 7764, pp. 17–36, Springer (SCOPUS)",
    title: "Decoupling Cognitive Agents and Virtual Environments",
    authors: "J. Lee, V. Baines, J. Padget",
    abstract: "The paper presents an architecture that separates the cognitive reasoning of agents from the virtual environments in which they act. The decoupling allows the same agent to operate across different environments and simplifies development.",
    doi: "https://doi.org/10.1007/978-3-642-36444-0_2"
  }
];
