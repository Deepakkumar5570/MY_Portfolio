// ============================================
// Counter Animation
// ============================================

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, target / 80);

        function update() {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.textContent = target + "+";

            }

        }

        update();

    });

}