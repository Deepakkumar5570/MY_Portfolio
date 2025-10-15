
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission (simulating MERN backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form submission to a backend
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // In a real MERN app, you would send this data to your Express backend
    console.log('Form data to be sent to backend:', formData);

    // Simulate API call with setTimeout
    setTimeout(() => {
        // Show success message
        document.getElementById('formSuccess').classList.remove('hidden');

        // Reset form
        document.getElementById('contactForm').reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('formSuccess').classList.add('hidden');
        }, 5000);
    }, 1000);
});

// Animate elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Animate skill bars when skills section comes into view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                // Reset width to 0 and then animate to the specified width
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-width') || bar.style.width;
                }, 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}



// Experience modal functionality
const experiences = [
  {
    title: "Early-Stage Plant Leaf Disease Detection",
    org: "Perception & Intelligence Lab, IIT Kanpur",
    content: `
      <p>Developed an end-to-end solution for early-stage disease detection in plant leaves using a custom Raspberry Pi-based imaging setup. 
      The system captures high-resolution images under both visible and ultraviolet light (UV 365nm and 395nm) to detect subtle disease symptoms that are not easily visible under normal conditions.</p>

      <ul class="list-disc pl-5">
        <li><strong>Dataset Collection:</strong> Captured and labeled over 14,000 images of healthy and diseased plant leaves under controlled laboratory conditions.</li>
        <li><strong>Preprocessing:</strong> Applied region-of-interest (ROI) cropping and contrast enhancement to improve model input quality.</li>
        <li><strong>Modeling & Analysis:</strong> 
          <ul class="list-disc pl-5">
            <li>ResNet18 Fusion Model achieved 88.73% accuracy on combined UV+RGB dataset.</li>
            <li>VGG16 model achieved 87.76% accuracy on combined UV+RGB modalities.</li>
            <li>SVM & XGBoost classifiers achieved 82.17% and 81.14% accuracy, respectively.</li>
            <li>Vision Transformer (ViT) achieved 70.61% accuracy on combined UV+RGB data.</li>
          </ul>
        </li>
        <li><strong>Future Work:</strong> The highest-performing model from these experiments will be further optimized for speed, accuracy, and robustness. 
            The refined model will be deployed on mobile-compatible edge devices, such as Raspberry Pi with camera modules or Android-integrated systems, enabling real-time, on-field early disease detection. 
            This approach provides a low-cost, accessible solution for farmers to monitor crop health and take timely preventive measures.</li>
      </ul>
    `
},

   {
    title: "Spectral Response Analysis for Plant Health",
    org: "Perception & Intelligence Lab, IIT Kanpur",
    content: `
      <p>Conducted detailed analysis of Visible-Near Infrared (VNIR) hyperspectral data to identify stress and disease signatures in plants. 
      This work aimed to leverage spectral information beyond the visible range to detect physiological changes in crops at an early stage.</p>

      <ul class="list-disc pl-5">
        <li><strong>Feature Extraction:</strong> Applied Principal Component Analysis (PCA) and band-ratio techniques to extract meaningful spectral features associated with plant health.</li>
        <li><strong>Stress & Disease Detection:</strong> Identified key spectral signatures that differentiate healthy plants from those under biotic or abiotic stress.</li>
        <li><strong>Data-driven Insights:</strong> Provided insights to guide downstream machine learning models for automated early detection of plant diseases.</li>
      </ul>
    `
},

    {
        title: "Automated Leaf Disease Detection",
        org: "Perception & Intelligence Lab, IIT Kanpur",
        content: `
          <p>Integrated YOLOv8 for ROI detection with Vision Transformer classification.</p>
          <ul class="list-disc pl-5">
            <li>Focus score filter (Laplacian variance)</li>
            <li>End‑to‑end detection & inference pipeline</li>
          </ul>`
    },

 {
    title: "Sugarcane Leaf Disease Detection and Classification",
    org: "CSVTU Bhilai, Chhattisgarh",
    content: `
      <p>This research project focused on developing a comprehensive deep learning pipeline for the early detection and classification of sugarcane leaf diseases. 
      The workflow covered the entire process, from dataset collection to model evaluation, enabling accurate and automated disease diagnosis.</p>

      <ul class="list-disc pl-5">
        <li><strong>Dataset Collection:</strong> Prepared large dataset of sugarcane leaves under controlled laboratory conditions, including both healthy and diseased samples.</li>
        <li><strong>Preprocessing:</strong> Applied image enhancement techniques, ROI (Region of Interest) extraction, and normalization to ensure high-quality input for the models.</li>
        <li><strong>Segmentation:</strong> Implemented a segmentation model to precisely localize leaf areas and diseased regions, improving the accuracy of subsequent classification.</li>
        <li><strong>Feature Extraction & ROI Analysis:</strong> Extracted meaningful features from segmented regions to focus the model on relevant disease patterns.</li>
        <li><strong>Model Training:</strong> Trained multiple deep learning architectures including ResNet18, VGG16, and Vision Transformers individually, and experimented with fusion models combining these backbones for enhanced performance.</li>
        <li><strong>Model Evaluation & Findings:</strong> Compared model performance using metrics such as accuracy and F1-score to identify the best-performing architecture for real-world deployment.</li>
        <li><strong>Future Work:</strong> The optimized model will be adapted for edge devices to provide farmers with an accessible tool for real-time sugarcane disease detection in the field.</li>
      </ul>
    `
}

];

function openExperienceModal(i) {
    const modal = document.getElementById('experienceModal');
    const content = document.getElementById('modalContent');
    const exp = experiences[i];
        content.innerHTML = `
                <h3 id="modalTitle" class="text-2xl font-bold">${exp.title}</h3>
                <p class="text-blue-500">${exp.org}</p>
                ${exp.content}
            `;
    document.getElementById('experienceCards').classList.add('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Focus management: move focus into modal for accessibility
    const dialog = modal.querySelector('.modal-dialog');
    if (dialog) {
        dialog.setAttribute('tabindex', '-1');
        dialog.focus();
    }
}

function closeExperienceModal() {
    document.getElementById('experienceModal').classList.add('hidden');
    document.getElementById('experienceCards').classList.remove('hidden');
    document.body.style.overflow = '';
}
document.querySelectorAll('.experience-card').forEach((card, index) => {
    card.addEventListener('click', () => openExperienceModal(index));
});

// Close modal when clicking on backdrop (outside the dialog)
const experienceModal = document.getElementById('experienceModal');
if (experienceModal) {
    experienceModal.addEventListener('click', function (e) {
        // If the click target is the backdrop (the modal container itself), close
        if (e.target === experienceModal) {
            closeExperienceModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !experienceModal.classList.contains('hidden')) {
            closeExperienceModal();
        }
    });

    // Make close button easier to find
    const modalClose = document.getElementById('modalCloseBtn');
    if (modalClose) {
        modalClose.addEventListener('click', closeExperienceModal);
    }
}


const trigger = document.getElementById('cert-trigger');
const container = document.getElementById('cert-container');
const toggleBtn = document.getElementById('toggle-more');

// toggle container when either trigger or button is clicked
function toggleCerts(e) {
    e.preventDefault();
    const isVisible = container.style.display === 'block';
    container.style.display = isVisible ? 'none' : 'block';
    toggleBtn.textContent = isVisible ? 'Show Certificates' : 'Hide Certificates';
}

document.querySelector('#cert-trigger .view-link')
    .addEventListener('click', toggleCerts);

toggleBtn.addEventListener('click', toggleCerts);



// header 

const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Dark mode toggle
const darkToggle = document.getElementById('darkModeToggle');
const darkIcon = document.getElementById('darkModeIcon');

function applyDarkMode(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        // Font Awesome 6 solid moon
        if (darkIcon) darkIcon.className = 'fa-solid fa-moon text-lg';
    } else {
        document.documentElement.classList.remove('dark');
        // show solid sun in light mode
        if (darkIcon) darkIcon.className = 'fa-solid fa-sun text-lg';
    }
}

// Initialize from localStorage or system preference
function getInitialDarkPref() {
    try {
        const stored = localStorage.getItem('prefersDark');
        if (stored === 'true') return true;
        if (stored === 'false') return false;
    } catch (e) { /* ignore */ }
    // fallback to OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
    return false;
}

const initial = getInitialDarkPref();
applyDarkMode(initial);
if (darkToggle) {
    // set accessible pressed state
    darkToggle.setAttribute('aria-pressed', initial ? 'true' : 'false');

    darkToggle.addEventListener('click', () => {
        const isNowDark = !document.documentElement.classList.contains('dark');
        applyDarkMode(isNowDark);
        try { localStorage.setItem('prefersDark', isNowDark); } catch (e) {}
        darkToggle.setAttribute('aria-pressed', isNowDark ? 'true' : 'false');
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.add('hidden'); // Close mobile menu on click
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});





