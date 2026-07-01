// =========================================
// Experience Modal Module
// =========================================

function initExperienceModal() {

    const modal = $("#experienceModal");
    const modalContent = $("#modalContent");
    const modalClose = $("#modalCloseBtn");
    const cards = $$(".experience-card");

    if (!modal || !modalContent) {
        console.warn("Experience Modal not found.");
        return;
    }

    function openModal(index) {

        const exp = experiences[index];

        modalContent.innerHTML = `
            <h3 class="text-2xl font-bold">${exp.title}</h3>
            <p class="text-blue-500 mb-4">${exp.org}</p>
            ${exp.content}
        `;

        removeClass(modal, "hidden");

        document.body.style.overflow = "hidden";

    }

    function closeModal() {

        addClass(modal, "hidden");

        document.body.style.overflow = "";

    }

    cards.forEach((card, index) => {

        card.addEventListener("click", () => {

            openModal(index);

        });

    });

    if (modalClose) {

        modalClose.addEventListener("click", closeModal);

    }

    modal.addEventListener("click", function(e){

        if(e.target===modal){

            closeModal();

        }

    });

    document.addEventListener("keydown", function(e){

        if(e.key==="Escape"){

            closeModal();

        }

    });

}