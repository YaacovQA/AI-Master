// script.js

// On attend que le DOM soit entièrement chargé pour exécuter le script.
// Cela garantit que tous les éléments HTML nécessaires sont accessibles.
document.addEventListener('DOMContentLoaded', () => {
    // --- Objet de Traductions ---
    // Cet objet contient les textes traduits pour les différentes langues.
    const translations = {
        fr: {
            tools_welcome: "Découvrez nos outils IA",
            tools_subtitle: "Explorez une sélection d'outils IA incontournables pour tous les métiers.",
            tools_title: "Nos outils IA recommandés",
            tools_desc: "Découvrez une sélection d'outils IA incontournables pour tous les métiers.",
            footer_text: "© 2023 AI Master. Tous droits réservés."
        },
        en: {
            tools_welcome: "Discover our AI tools",
            tools_subtitle: "Explore a selection of must-have AI tools for all professions.",
            tools_title: "Our recommended AI tools",
            tools_desc: "Discover a selection of must-have AI tools for all professions.",
            footer_text: "© 2023 AI Master. All rights reserved."
        },
        he: {
            tools_welcome: "גלה את כלים ה-AI שלנו",
            tools_subtitle: "חקור קבוצה של כלים AI הכרחיים לכל המקצועות.",
            tools_title: "הכלים המומלצים שלנו",
            tools_desc: "גלה קבוצה של כלים AI הכרחיים לכל המקצועות.",
            footer_text: "© 2023 AI Master. כל הזכויות שמורות."
        }
    };

    // --- Fonction pour changer la langue ---
    // Cette fonction met à jour tous les éléments de la page ayant l'attribut "data-key"
    // avec la traduction correspondant à la langue sélectionnée.
    // Elle ajuste également la direction du texte pour les langues nécessitant un affichage RTL.
    function changeLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Ajuster la direction du texte : 'rtl' pour l'hébreu, 'ltr' pour les autres.
        document.body.style.direction = (lang === 'he') ? 'rtl' : 'ltr';
    }

    // Définir la langue par défaut au chargement de la page (français dans cet exemple).
    changeLanguage('fr');

    // --- Bouton "Retour en haut" ---
    // On récupère l'élément du bouton "Retour en haut" pour pouvoir le manipuler.
    const backToTopButton = document.getElementById('back-to-top');

    // On écoute l'événement "scroll" de la fenêtre pour afficher ou masquer le bouton
    // en fonction de la position verticale de la page.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Lorsqu'on clique sur le bouton, la page défile de manière fluide vers le haut.
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
