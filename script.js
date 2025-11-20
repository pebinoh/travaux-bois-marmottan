document.addEventListener("DOMContentLoaded", function() {
    // Animation d'apparition au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// GESTION DU MENU MOBILE
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// GESTION DU LOADER (ÉCRAN DE CHARGEMENT)
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(function() {
            loader.classList.add("loader-hidden");
        }, 1500);
    }
});

// GESTION DU BOUTON RETOUR EN HAUT (NOUVEAU)
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
    window.addEventListener("scroll", function() {
        // Si on descend de 300px, on affiche le bouton
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
}
