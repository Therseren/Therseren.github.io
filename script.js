/* ============================================
   HERO NODE GRAPH
   A small knowledge graph: Mikkel at the center,
   branching into his two study tracks, each branching
   into a couple of skill areas. Purely decorative,
   but grounded in the real academic timeline.
   ============================================ */
function renderGraph() {
  const svg = document.getElementById("node-graph");
  if (!svg) return;

  const nodes = [
    { id: "center", x: 240, y: 240, r: 30, label: "Mikkel", type: "center" },
    { id: "bsc", x: 120, y: 145, r: 22, label: "AI & Data", sub: "'22–'26", type: "teal" },
    { id: "msc", x: 355, y: 330, r: 22, label: "Human-Centered AI", sub: "'26–'28", type: "gold" },
    { id: "ml", x: 60, y: 270, r: 15, label: "ML / Data", type: "teal" },
    { id: "sys", x: 150, y: 45, r: 15, label: "Systems", type: "teal" },
    { id: "research", x: 435, y: 250, r: 15, label: "Research", type: "gold" },
    { id: "design", x: 340, y: 440, r: 15, label: "Design", type: "gold" }
  ];

  const edges = [
    ["center", "bsc", "teal"],
    ["center", "msc", "gold"],
    ["bsc", "ml", "teal"],
    ["bsc", "sys", "teal"],
    ["msc", "research", "gold"],
    ["msc", "design", "gold"]
  ];

  const find = (id) => nodes.find((n) => n.id === id);
  let svgContent = "";

  edges.forEach(([fromId, toId, cls]) => {
    const from = find(fromId);
    const to = find(toId);
    const len = Math.hypot(to.x - from.x, to.y - from.y);
    svgContent += `<line class="graph-line ${cls}" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}"
      stroke-dasharray="${len}" stroke-dashoffset="${len}">
      <animate attributeName="stroke-dashoffset" from="${len}" to="0" dur="0.9s" fill="freeze" begin="0.1s" />
    </line>`;
  });

  nodes.forEach((n) => {
    svgContent += `<g class="graph-node ${n.type}" style="opacity:0">
      <circle cx="${n.x}" cy="${n.y}" r="${n.r}" />
      <text x="${n.x}" y="${n.type === 'center' ? n.y + 4 : n.y + n.r + 14}" text-anchor="middle">${n.label}</text>
      ${n.sub ? `<text x="${n.x}" y="${n.y + n.r + 27}" text-anchor="middle" opacity="0.6">${n.sub}</text>` : ""}
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" begin="${n.type === 'center' ? 0 : 0.3}s" />
    </g>`;
  });

  svg.innerHTML = svgContent;
}

/* ============================================
   PROJECTS
   ============================================ */
let activeFilter = "All";

function getCategories() {
  const cats = new Set(PROJECTS.map((p) => p.category).filter(Boolean));
  return ["All", ...Array.from(cats)];
}

function renderFilters() {
  const container = document.getElementById("filters");
  if (!container) return;
  container.innerHTML = "";

  getCategories().forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (cat === activeFilter ? " active" : "");
    chip.textContent = cat;
    chip.addEventListener("click", () => {
      activeFilter = cat;
      renderFilters();
      renderProjects();
    });
    container.appendChild(chip);
  });
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const list = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state">No projects in this category yet.</div>`;
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const thumb = p.image
      ? `<div class="project-thumb"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>`
      : `<div class="project-thumb">${(p.category || "PROJECT").toUpperCase()}</div>`;

    const tags = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");

    const links = [];
    if (p.links && p.links.demo) links.push(`<a href="${p.links.demo}" target="_blank" rel="noopener">View demo →</a>`);
    if (p.links && p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener">View code →</a>`);

    card.innerHTML = `
      ${thumb}
      <div class="project-body">
        ${p.year ? `<span class="project-year">${p.year}</span>` : ""}
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description || ""}</p>
        <div class="project-tags">${tags}</div>
        ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================
   SKILLS
   ============================================ */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container || typeof SKILLS === "undefined") return;
  container.innerHTML = "";

  SKILLS.forEach((group) => {
    const el = document.createElement("div");
    el.className = "skills-group";
    const items = group.items.map((i) => `<span class="skill-chip">${i}</span>`).join("");
    el.innerHTML = `<h4>${group.group}</h4><div class="skills-list">${items}</div>`;
    container.appendChild(el);
  });
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderGraph();
  renderFilters();
  renderProjects();
  renderSkills();
});
