// =========================================
// Back To Top Module
// =========================================

function initBackToTop() {

    const backToTopButton = $("#backToTop");

    if (!backToTopButton) {
        console.warn("Back To Top button not found.");
        return;
    }

    function toggleButton() {

        if (window.scrollY > 300) {

            removeClass(backToTopButton, "opacity-0");
            removeClass(backToTopButton, "invisible");

            addClass(backToTopButton, "opacity-100");
            addClass(backToTopButton, "visible");

        } else {

            removeClass(backToTopButton, "opacity-100");
            removeClass(backToTopButton, "visible");

            addClass(backToTopButton, "opacity-0");
            addClass(backToTopButton, "invisible");

        }

    }

    window.addEventListener("scroll", toggleButton, {
        passive: true
    });

    backToTopButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}