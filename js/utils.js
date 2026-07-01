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

// =========================================
// Event Helper
// =========================================

function on(element, event, handler, options = false) {
    if (element) {
        element.addEventListener(event, handler, options);
    }
}

// =========================================
// Storage Helpers
// =========================================

function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function load(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
}