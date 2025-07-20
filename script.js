// Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Contact form submission (simulating MERN backend)
        document.getElementById('contactForm').addEventListener('submit', function(e) {
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
                    title: "Early Stage Disease Detection in Plant Leaves",
                    org: "Perception & Intelligence Lab, IIT Kanpur",
                    content: `
          <p>Built a Raspberry Pi based UV/non‑UV imaging box to capture plants leaves dataset of healthy/unhealthy in lab condition.
            Designed and implemented an end-to-end solution leveraging visible and ultraviolet (UV 365nm, 395nm) spectral bands to capture early-stage leaf disease symptoms under controlled lab conditions.</p>
          <ul class="list-disc pl-5">
            <li>14k+ UV/visible images captured & labeled</li>
            <li>Preprocessing: ROI cropping, contrast enhancement</li>
            <li>Modeling: ResNet18 Fusion Model (Accuracy 88.73% on combined dataset UV+RGB), VGG16 model (obtained 87.76% accuracy on combbined modalities UV+RGB),  SVM & XGboost (82.17% & 81.14% on combined modalities UV+RGB), Vision Transformers (70.61% accuracy on combined modalities UV+RGB)</li>
            <Li>Future Work: The best-performing model from our experiments—identified through extensive evaluation on multimodal UV 
            and visible spectrum data—will be further optimized for accuracy, speed, and robustness. This refined model will then be deployed on mobile-compatible edge devices (such as Raspberry Pi with camera modules or Android-integrated systems) to enable on-field, real-time early-stage disease detection, empowering farmers with a low-cost, accessible tool for timely crop health monitoring and intervention.</li>
          </ul>`
                },
                {
                    title: "Spectral Response Analysis for Plant Health",
                    org: "Perception & Intelligence Lab, IIT Kanpur",
                    content: `
          <p>Analyzed VNIR hyperspectral data to detect stress & disease signatures.</p>
          <ul class="list-disc pl-5">
            <li>PCA & band‑ratio feature extraction</li>
            <li></li>
          </ul>`
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
                }
            ];

            function openExperienceModal(i) {
                const modal = document.getElementById('experienceModal');
                const content = document.getElementById('modalContent');
                const exp = experiences[i];
                content.innerHTML = `
        <h3 class="text-2xl font-bold">${exp.title}</h3>
        <p class="text-blue-500">${exp.org}</p>
        ${exp.content}
      `;
                document.getElementById('experienceCards').classList.add('hidden');
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function closeExperienceModal() {
                document.getElementById('experienceModal').classList.add('hidden');
                document.getElementById('experienceCards').classList.remove('hidden');
                document.body.style.overflow = '';
            }
            document.querySelectorAll('.experience-card').forEach((card, index) => {
                card.addEventListener('click', () => openExperienceModal(index));
            });


   