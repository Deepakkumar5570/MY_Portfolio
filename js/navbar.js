// =========================================
// Navbar Module
// =========================================

function initNavbar() {
    const menuButton = $("#mobile-menu-button");
    const mobileMenu = $("#mobile-menu");
    const navLinks = $$(".nav-link");

    if (!menuButton || !mobileMenu) {
        return;
    }

    const toggleMenu = (force) => {
        const shouldOpen = typeof force === "boolean" ? force : mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden", !shouldOpen);
        menuButton.setAttribute("aria-expanded", String(shouldOpen));
    };

    menuButton.addEventListener("click", () => {
        toggleMenu();
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const setActiveLink = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach((section) => {
            const id = section.getAttribute("id");
            const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (!targetLink) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach((link) => link.classList.remove("text-blue-600", "font-semibold"));
                targetLink.classList.add("text-blue-600", "font-semibold");
            }
        });
    };

    window.addEventListener("scroll", setActiveLink, { passive: true });
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            toggleMenu(true);
        }
    });

    setActiveLink();
}