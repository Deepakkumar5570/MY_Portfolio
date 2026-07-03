// ======================================
// Projects Engine
// ======================================

let currentCategory = "All";
let currentSearch = "";

function createTechChip(tech) {
    return `
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">
            ${tech}
        </span>
    `;
}

function isValidLink(url) {
    if (!url) return false;
    const normalized = String(url).trim();
    if (!normalized || normalized === "#") return false;
    return !/(your-demo-link|example\.com|demo)/i.test(normalized);
}

function createActionLink(label, url, className) {
    if (isValidLink(url)) {
        return `
            <a href="${url}" target="_blank" rel="noopener noreferrer"
                class="${className}">
                ${label}
            </a>
        `;
    }

    return `
        <span class="${className} opacity-60 cursor-not-allowed" aria-disabled="true">
            ${label}
        </span>
    `;
}

function createProjectCard(project) {
    const title = project.title || "Project";
    const description = project.description || "Project details coming soon.";
    const stack = Array.isArray(project.stack) ? project.stack : [];

    return `
        <article class="project-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 flex flex-col">
            <div class="relative">
                <img src="${project.image || ""}" alt="${title}" loading="lazy" decoding="async"
                    class="w-full h-40 object-cover">
                ${project.featured ? `<span class="absolute top-3 left-3 bg-yellow-400 text-black px-2.5 py-1 rounded-full text-[10px] font-bold">Featured</span>` : ""}
                <span class="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-full text-[10px]">${project.category || "Project"}</span>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <h3 class="text-xl font-bold mb-2">${title}</h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">${description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${stack.map(createTechChip).join("")}
                </div>
                <div class="mt-auto flex gap-2">
                    ${createActionLink("GitHub", project.github, "flex-1 bg-gray-900 text-white text-center py-2.5 rounded-lg text-sm")}
                    ${createActionLink("Demo", project.demo, "flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg text-sm")}
                </div>
            </div>
        </article>
    `;
}

function getFilteredProjects() {
    let filtered = [...projects];

    if (currentCategory !== "All") {
        filtered = filtered.filter((project) => project.category === currentCategory);
    }

    if (currentSearch !== "") {
        const searchValue = currentSearch.toLowerCase();
        filtered = filtered.filter((project) => {
            const title = (project.title || "").toLowerCase();
            const description = (project.description || "").toLowerCase();
            const stack = (project.stack || []).join(" ").toLowerCase();
            return title.includes(searchValue) || description.includes(searchValue) || stack.includes(searchValue);
        });
    }

    filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
    return filtered;
}

function renderProjects() {
    const container = document.getElementById("projects-container");

    if (!container) return;

    const filtered = getFilteredProjects();

    if (!filtered.length) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16">
                <h3 class="text-3xl font-bold mb-3">No Projects Found</h3>
                <p class="text-gray-500">Try another search.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(createProjectCard).join("");
}

function initProjectFilters() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.filter || "All";
            renderProjects();
        });
    });
}

function initProjectSearch() {
    const input = document.getElementById("project-search");

    if (!input) return;

    input.addEventListener("input", (event) => {
        currentSearch = event.target.value.trim().toLowerCase();
        renderProjects();
    });
}