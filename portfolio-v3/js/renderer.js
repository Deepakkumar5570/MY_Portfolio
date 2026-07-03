// ==========================================
// Hero Renderer
// ==========================================

function renderHero() {

    document.getElementById("hero-name").textContent =
        profile.name;

    document.getElementById("hero-role").textContent =
        profile.role;

    document.getElementById("hero-tagline").textContent =
        profile.tagline;

    document.getElementById("hero-description").textContent =
        profile.description;

    document.getElementById("availability-text").textContent =
        profile.availability;

    const stats =
        document.getElementById("hero-stats");

    stats.innerHTML = "";

    profile.stats.forEach(item => {

        stats.innerHTML += `

<div class="stat">

<h3>

${item.value}

</h3>

<span>

${item.label}

</span>

</div>

`;

    });

}


function renderAbout(){

document.getElementById("about-heading").textContent =
profile.about.heading;

document.getElementById("about-description").textContent =
profile.about.description;

const container =
document.getElementById("about-cards");

container.innerHTML="";

profile.about.cards.forEach(card=>{

container.innerHTML+=`

<div class="about-card">

<div class="about-icon">

${card.icon}

</div>

<h4>

${card.title}

</h4>

<p>

${card.description}

</p>

</div>

`;

});

}

