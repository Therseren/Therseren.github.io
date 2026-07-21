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
    if (p.links && p.links.page) links.push(`<a href="${p.links.page}">Read case study →</a>`);
    if (p.links && p.links.demo) links.push(`<a href="${p.links.demo}" target="_blank" rel="noopener">View demo →</a>`);
    if (p.links && p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener">View code →</a>`);
    const hasCodeLink = !!(p.links && (p.links.demo || p.links.github));
    if (!hasCodeLink) {
      const subject = encodeURIComponent(`Code request: ${p.title}`);
      links.push(`<a href="mailto:Mikkelthers@gmail.com?subject=${subject}">Request the code →</a>`);
    }

    const abstractBlock = p.abstract
      ? `<details class="project-abstract">
          <summary>Read abstract</summary>
          <p>${p.abstract}</p>
        </details>`
      : "";

    card.innerHTML = `
      ${thumb}
      <div class="project-body">
        ${p.year ? `<span class="project-year">${p.year}</span>` : ""}
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description || ""}</p>
        ${abstractBlock}
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
  renderFilters();
  renderProjects();
  renderSkills();
});
