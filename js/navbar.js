// =========================================
// Navbar Module
// =========================================

function initNavbar() {

    const menuButton = $("#mobile-menu-button");
    const mobileMenu = $("#mobile-menu");

    if (!menuButton || !mobileMenu) {
        console.warn("Navbar not found");
        return;
    }

    menuButton.addEventListener("click", () => {
        toggleClass(mobileMenu, "hidden");
    });

}