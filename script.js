document.addEventListener("DOMContentLoaded", function() {
    // Animation Scroll
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

    // GESTION DE LA LIGHTBOX (ZOOM IMAGE)
    // On crée les éléments HTML de la lightbox dynamiquement
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img class="lightbox-content" id="lightbox-img">';
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // On active le zoom sur toutes les images de détail
    const images = document.querySelectorAll('.detail-image img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    // Fermeture
    closeBtn.onclick = function() { lightbox.style.display = "none"; }
    lightbox.onclick = function(e) {
        if (e.target !== lightboxImg) { lightbox.style.display = "none"; }
    }
});

// MENU MOBILE
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// LOADER
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(function() { loader.classList.add("loader-hidden"); }, 1500);
    }
});

// BOUTON RETOUR HAUT
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { backToTopButton.classList.add("show"); }
        else { backToTopButton.classList.remove("show"); }
    });
}
