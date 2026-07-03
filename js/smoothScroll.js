// =========================================
// Smooth Scroll Module
// =========================================

function initSmoothScroll() {
    const links = $$('a[href^="#"]');
    const mobileMenu = $("#mobile-menu");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = $(targetId);

            if (!target) return;

            e.preventDefault();

            scrollToElement(target, 80);

            if (mobileMenu) {
                addClass(mobileMenu, "hidden");
                const button = $("#mobile-menu-button");
                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            }

            if (history.pushState) {
                history.pushState(null, "", targetId);
            }
        });
    });
}