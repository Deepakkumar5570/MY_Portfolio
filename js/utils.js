// =========================================
// Utility Functions
// =========================================

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

function addClass(element, className) {
    if (element) element.classList.add(className);
}

function removeClass(element, className) {
    if (element) element.classList.remove(className);
}

function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
}

function scrollToElement(target, offset = 80) {
    if (!target) return;

    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
    });
}