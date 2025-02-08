document.addEventListener('DOMContentLoaded', () => {
    // Traductions
    const translations = {
        fr: {
            tools_welcome: "Découvrez nos outils IA",
            tools_subtitle: "Explorez une sélection d'outils IA incontournables pour tous les métiers.",
            tools_title: "Nos outils IA recommandés",
            tools_desc: "Découvrez une sélection d'outils IA incontournables pour tous les métiers.",
            footer_text: "&copy; 2023 AI Master. Tous droits réservés."
        },
        en: {
            tools_welcome: "Discover our AI tools",
            tools_subtitle: "Explore a selection of must-have AI tools for all professions.",
            tools_title: "Our recommended AI tools",
            tools_desc: "Discover a selection of must-have AI tools for all professions.",
            footer_text: "&copy; 2023 AI Master. All rights reserved."
        },
        he: {
            tools_welcome: "גלה את כלים ה-AI שלנו",
            tools_subtitle: "חקור קבוצה של כלים AI הכרחיים לכל המקצועות.",
            tools_title: "הכלים המומלצים שלנו",
            tools_desc: "גלה קבוצה של כלים AI הכרחיים לכל המקצועות.",
            footer_text: "&copy; 2023 AI Master. כל הזכויות שמורות."
        }
    };

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Changer la direction du texte pour l'hébreu
        if (lang === 'he') {
            document.body.style.direction = 'rtl';
        } else {
            document.body.style.direction = 'ltr';
        }
    }

    // Langue par défaut au chargement de la page
    changeLanguage('fr');

    // Bouton Retour en haut
    document.addEventListener('scroll', () => {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
