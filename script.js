document.addEventListener("DOMContentLoaded", function() {
    // 1. Animation Scroll (Fade In)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 2. Lightbox Logic
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img class="lightbox-content" id="lightbox-img">';
    document.body.appendChild(lightbox);
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const images = document.querySelectorAll('.detail-image img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });
    closeBtn.onclick = function() { lightbox.style.display = "none"; }
    lightbox.onclick = function(e) {
        if (e.target !== lightboxImg) { lightbox.style.display = "none"; }
    }

    // 3. Animation des Chiffres (Counters)
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 secondes
                const increment = target / (duration / 20); // Mise à jour toutes les 20ms
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));
});

// Menu Mobile
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Loader
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) { setTimeout(function() { loader.classList.add("loader-hidden"); }, 1500); }
});

// Retour Haut
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { backToTopButton.classList.add("show"); }
        else { backToTopButton.classList.remove("show"); }
    });
}
