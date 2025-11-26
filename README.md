# Site Internet - TBM (Travaux Bois Marmottan)

Bienvenue sur le dépôt du site vitrine de l'entreprise **TBM - Travaux Bois Marmottan**, spécialiste de la menuiserie et de la charpente en milieu montagnard (Savoie).

Ce site a été conçu pour présenter le savoir-faire artisanal, les réalisations et les services de l'entreprise avec une esthétique épurée, moderne et professionnelle ("Style Architecte").

### [Voir le site en ligne ici](https://pebinoh.github.io/travaux-bois-marmottan/)

---

## Fonctionnalités

* **Design Responsive :** Adaptation parfaite sur ordinateurs, tablettes et mobiles (Menu burger, ajustement des images).
* **Expérience Utilisateur (UX) :**
    * Écran de chargement (Loader) animé.
    * Navigation fluides entre les projets.
    * **Lightbox** pour zoomer sur les photos de détails.
    * Bouton "Retour en haut" automatique.
* **Présentation des Services :** Pages dédiées pour le Sciage et l'Atelier.
* **Localisation :** Carte interactive propre (Leaflet/OpenStreetMap) sans publicité, centrée sur Villaroger.
* **Contact :** Formulaire de contact fonctionnel relié à Formspree.
* **SEO & Partage :** Optimisation pour le référencement local (JSON-LD) et balises Open Graph pour un affichage propre sur les réseaux sociaux (WhatsApp, Facebook).
* **Légal :** Page de mentions légales conforme RGPD.

---

## Technologies Utilisées

Ce site est un **site statique**, conçu pour être léger, rapide et hébergé gratuitement.

* **HTML5 :** Structure sémantique.
* **CSS3 :** Mise en page (Grid/Flexbox), animations, parallaxe et design adaptatif.
* **JavaScript (Vanilla) :** Gestion du menu mobile, du loader, de la lightbox et des interactions.
* **Leaflet.js :** Librairie open-source pour la carte interactive.
* **FontAwesome :** Pour les icônes.
* **Google Fonts :** Polices *Montserrat* et *Playfair Display*.

---

## Structure du Projet

```text
/
├── index.html           # Page d'accueil
├── style.css            # Feuille de style principale
├── script.js            # Scripts d'animation et de logique
├── contact.html         # Page de contact avec carte
├── mentions-legales.html# Page juridique
│
├── baptieu.html         # Détail Projet 1
├── noyerai.html         # Détail Projet 2
├── fenetre.html         # Détail Projet 3
│
├── sciage.html          # Page Service Sciage
├── atelier.html         # Page Service Atelier
│
├── robots.txt           # Instructions pour Google
├── sitemap.xml          # Plan du site pour Google
│
└── [Images .jpg]        # Images du site (mazure.jpg, logo_tbm.jpg, etc.)
