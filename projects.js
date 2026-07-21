/*
  PROJECTS DATA FILE
  ==================
  This is the only file you need to touch to add, edit, or remove projects.
  The site reads this array and builds the whole project grid automatically.

  HOW TO ADD A PROJECT:
  1. Copy one of the objects below (including the { and }).
  2. Paste it into the PROJECTS array, separated by a comma.
  3. Fill in your own values. Delete any field you don't need
     (year, tags, image, and links are all optional).
  4. Save, commit, and push. GitHub Pages rebuilds automatically.

  FIELD GUIDE:
  - id:          a short unique lowercase-with-dashes id, e.g. "rfa-network-analysis"
  - title:       project name shown as the card heading
  - category:    used to build the filter chips above the grid.
                 Reuse existing categories to group projects, or type a new
                 one to create a new filter automatically.
  - year:        optional. e.g. "2025" or "2024-2025"
  - description: 1-3 sentences. What it was, your role, and the outcome.
  - tags:        optional array of short strings, e.g. tools or methods used
  - image:       optional. Path to an image in the /images folder,
                 e.g. "images/rfa-project.png". Leave as null for a plain card.
  - abstract:    optional. A longer paragraph (e.g. a paper/thesis abstract) shown
                 in an expandable "Read abstract" toggle on the card. Leave out
                 for projects that don't need it.
  - links:       optional. { demo: "https://...", github: "https://..." }
                 Leave out any you don't have, or omit "links" entirely.
                 If a project has no demo/github/page link at all, the site
                 automatically shows a "Request the code →" mailto link instead,
                 pre-filled with the project title in the subject line.
*/

const PROJECTS = [
  {
    id: "bachelor-thesis-nails",
    title: "Normative Alignment of Recommender Systems at the User Level",
    category: "Bachelor Thesis",
    year: "2026",
    description: "Extended a state-of-the-art method (NAILS) for aligning recommender systems to editorial targets, showing that correcting bias in aggregate doesn't guarantee any single user's feed is actually balanced. Built and evaluated a per-user version on a real news dataset (EB-NeRD) across three ranking strategies. Supervised by Jes Frellsen, DTU Compute.",
    tags: ["Recommender Systems", "Python", "Statistics"],
    image: null,
    links: {
      page: "thesis.html",
      github: "https://github.com/Therseren/Bachelor_Nails_Plackett_Steck_Codebase"
    }
  },
  {
    id: "q-learning-spaceinvaders",
    title: "Q-learning in Space Invaders",
    category: "AI & Data",
    year: "2023",
    description: "Built a simplified Space Invaders clone from scratch in Pygame and trained a Q-learning agent across four increasingly complex environments. Measured how added complexity and difficulty affected training time, and confirmed training time grew clearly as the state space expanded. Group project with Ditte Klinge and Christine Schütt.",
    tags: ["Python", "Reinforcement Learning", "Q-Learning", "Pygame"],
    image: null,
    links: {
      github: "https://github.com/Therseren/SpaceInvadersGame"
    }
  },
  {
    id: "rstar-reasoning-llms",
    title: "Reasoning for Large Language Models (rStar)",
    category: "AI & Data",
    year: "2024",
    description: "Investigated the rStar method for improving reasoning in small language models without fine-tuning, testing its robustness to injected noise and counter-stereotypical confounding examples on GSM8K. Found that adaptive temperature during token generation gave a clear accuracy boost, while an added discriminator model gave no benefit. Group project with Christine Schütt, Emil Sjöberg, and Sara Sterlie.",
    tags: ["LLMs", "Reasoning", "Monte Carlo Tree Search", "Python"],
    image: null,
    abstract: "Complex reasoning remains challenging for small language models, and rStar was proposed as a way to improve reasoning without fine-tuning or a teacher model. We tested the robustness of rStar by comparing four variations on the GSM8K dataset: regular rStar, rStar with added noise in the questions, rStar evaluated on a separate dataset of counter-stereotypical confounding examples, and rStar with adaptive temperature during token generation. The discriminator model did not improve results, and injected noise only worsened performance slightly. rStar made the same mistakes as GPT-4 on counter-stereotypical gender examples, but adaptive temperature during token generation gave a clear accuracy improvement on reasoning tasks.",
    links: {
      page: "rstar.html"
    }
  },
  {
    id: "eeg-artifact-detection",
    title: "Unsupervised EEG Artifact Detection",
    category: "AI & Data",
    description: "Compared supervised models (SPINDLE, L-SeqSleepNet) against an unsupervised Gaussian Mixture Model for detecting artifacts in mouse EEG/EMG sleep data from the KornumLab and BrownLab datasets. Supervised methods were more accurate overall, but the project identified concrete directions — better feature representations and model refinement — for closing the gap with unsupervised approaches.",
    tags: ["EEG", "Unsupervised Learning", "Gaussian Mixture Models", "Neuroscience"],
    image: null,
    abstract: "Electroencephalography (EEG) artifact detection plays a crucial role in sleep research. Traditional methods for artifact removal, including expert labeling and band-pass filtering, have limitations that necessitate the exploration of advanced techniques. Our study utilized EEG and EMG mice data from the KornumLab and BrownLab datasets. We employed supervised models, SPINDLE and L-SeqSleepNet, and compared their performance to an out-of-distribution Gaussian Mixture Model. Results indicated that while supervised models like SPINDLE achieved higher accuracy in artifact detection, unsupervised methods demonstrated potential for improvement through novel feature representations and model refinement. Our study underscores the importance of refining unsupervised models and exploring innovative approaches to improve EEG artifact detection, thereby contributing to more accurate and efficient neurophysiological research.",
    links: {}
  }
];
