// =========================================
// Back To Top Module
// =========================================

function initBackToTop() {
    const backToTopButton = $("#backToTop");

    if (!backToTopButton) {
        return;
    }

    const toggleButton = () => {
        const shouldShow = window.scrollY > 300;
        backToTopButton.classList.toggle("opacity-0", !shouldShow);
        backToTopButton.classList.toggle("invisible", !shouldShow);
        backToTopButton.classList.toggle("opacity-100", shouldShow);
        backToTopButton.classList.toggle("visible", shouldShow);
        backToTopButton.setAttribute("aria-hidden", String(!shouldShow));
    };

    window.addEventListener("scroll", toggleButton, { passive: true });
    toggleButton();

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}