// =========================================
// Experience Modal Module
// =========================================

function openExperienceModal(index) {
    const modal = $("#experienceModal");
    const modalContent = $("#modalContent");
    const exp = experiences?.[index];

    if (!modal || !modalContent || !exp) {
        return;
    }

    modalContent.innerHTML = `
        <h3 id="modalTitle" class="text-2xl font-bold">${exp.title}</h3>
        <p class="text-blue-500 mb-4">${exp.org}</p>
        ${exp.content}
    `;

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeButton = $("#modalCloseBtn");
    closeButton?.focus();
}

function closeExperienceModal() {
    const modal = $("#experienceModal");

    if (!modal) return;

    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

function initExperienceModal() {
    const modal = $("#experienceModal");
    const modalClose = $("#modalCloseBtn");
    const triggers = $$("[data-experience-index]");

    if (!modal) {
        return;
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();
            const index = Number(trigger.getAttribute("data-experience-index"));
            openExperienceModal(index);
        });
    });

    modalClose?.addEventListener("click", closeExperienceModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeExperienceModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeExperienceModal();
        }
    });
}

window.openExperienceModal = openExperienceModal;
window.closeExperienceModal = closeExperienceModal;