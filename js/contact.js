// =========================================
// Contact Form Module
// =========================================

function initContactForm() {

    const form = $("#contactForm");
    const successMessage = $("#formSuccess");

    if (!form) {
        console.warn("Contact form not found.");
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = {
            name: $("#name").value.trim(),
            email: $("#email").value.trim(),
            subject: $("#subject").value.trim(),
            message: $("#message").value.trim()
        };

        // Basic Validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            alert("Please fill all fields.");
            return;
        }

        console.log("Form Data:", formData);

        // Simulate Backend API
        setTimeout(() => {

            if (successMessage) {
                removeClass(successMessage, "hidden");
            }

            form.reset();

            setTimeout(() => {

                if (successMessage) {
                    addClass(successMessage, "hidden");
                }

            }, 5000);

        }, 1000);

    });

}