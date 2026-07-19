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
  - links:       optional. { demo: "https://...", github: "https://..." }
                 Leave out any you don't have, or omit "links" entirely.
*/

const PROJECTS = [
  {
    id: "example-project-one",
    title: "Example Project — replace me",
    category: "AI & Data",
    year: "2025",
    description: "One or two sentences on what this project was, what your role was, and what came out of it. Keep it specific and concrete rather than general.",
    tags: ["Python", "Example Tag"],
    image: null,
    links: {
      github: "https://github.com/Therseren"
    }
  },
  {
    id: "example-project-two",
    title: "Another Example — replace me",
    category: "Human-Centered AI",
    year: "2026",
    description: "Swap this out for a real project. You can have as many or as few categories as you like — the filter chips above the grid update automatically based on what you type here.",
    tags: ["Research", "Design"],
    image: null,
    links: {}
  }
];
