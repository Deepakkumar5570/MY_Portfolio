// ============================================
// Projects Renderer
// ============================================

function renderProjects(){

    const container=document.getElementById("projects-container");

    if(!container) return;

    container.innerHTML="";

    projects.forEach(project=>{

        container.innerHTML+=`

<div class="project-card bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

<img src="${project.image}"
alt="${project.title}"
class="w-full h-52 object-cover">

<div class="p-6">

<h3 class="text-2xl font-bold mb-3">

${project.title}

</h3>

<p class="text-gray-600 mb-4">

${project.description}

</p>

<div class="flex flex-wrap gap-2 mb-5">

${project.technologies.map(tech=>

`<span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">${tech}</span>`

).join("")}

</div>

<div class="flex gap-4">

<a href="${project.github}"

target="_blank"

class="bg-gray-900 text-white px-5 py-2 rounded-lg">

GitHub

</a>

<a href="${project.demo}"

target="_blank"

class="bg-blue-600 text-white px-5 py-2 rounded-lg">

Live Demo

</a>

</div>

</div>

</div>

`;

    });

}