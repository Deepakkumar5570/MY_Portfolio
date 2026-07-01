// ============================================
// Rendering Engine
// ============================================

function renderHeroProfile() {

    const heroName = document.getElementById("hero-name");
    const heroTitle = document.getElementById("hero-title");
    const heroTagline = document.getElementById("hero-tagline");

    if (heroName)
        heroName.textContent = profile.personal.name;

    if (heroTitle)
        heroTitle.textContent = profile.personal.title;

    if (heroTagline)
        heroTagline.textContent = profile.personal.tagline;

}

function renderHeroStats() {

    const container = document.getElementById("hero-stats");

    if (!container) return;

    container.innerHTML = "";

    profile.stats.forEach(stat => {

        container.innerHTML += `

        <div class="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition">

            <h3 class="text-3xl font-bold text-blue-600 counter"
                data-target="${stat.number}">

                0

            </h3>

            <p class="text-gray-500 mt-2">

                ${stat.title}

            </p>

        </div>

        `;

    });

}