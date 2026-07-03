// =========================================
// Contact Form Module
// =========================================

function initContactForm() {
    const openButton = $("#openContactBtn");
    const closeButton = $("#closeModalBtn");
    const modal = $("#contactModal");
    const form = $("#contactForm");
    const successMessage = $("#formSuccess");
    const nameInput = $("#name");
    const emailInput = $("#email");
    const messageInput = $("#message");

    if (!form || !modal) {
        return;
    }

    const closeModal = () => {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        form.classList.remove("hidden");
        successMessage?.classList.add("hidden");
        form.reset();

        if (openButton) {
            openButton.focus();
        }
    };

    const openModal = () => {
        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
        nameInput?.focus();
    };

    openButton?.addEventListener("click", openModal);
    closeButton?.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            name: nameInput?.value.trim() || "",
            email: emailInput?.value.trim() || "",
            message: messageInput?.value.trim() || ""
        };

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in your name, email and message.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Please provide a valid email address.");
            return;
        }

        const submitButton = form.querySelector("button[type='submit']");
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        try {
            const response = await fetch(form.action, {
                method: form.method || "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form)
            });

            if (response.ok) {
                form.classList.add("hidden");
                successMessage?.classList.remove("hidden");
            } else {
                successMessage?.classList.remove("hidden");
                successMessage.textContent = "Your message could not be sent right now. Please email me directly instead.";
            }
        } catch (error) {
            successMessage?.classList.remove("hidden");
            successMessage.textContent = "Your message could not be sent right now. Please email me directly instead.";
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        }
    });
}