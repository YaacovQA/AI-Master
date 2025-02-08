document.addEventListener('DOMContentLoaded', () => {
    // Configuration des traductions
    const translations = {
        fr: {
            welcome: "Bienvenue sur AI Master",
            hero_subtitle: "Découvrez comment l'intelligence artificielle peut transformer votre carrière",
            features_title: "Nos fonctionnalités",
            feature_1_title: "Formations IA",
            feature_1_desc: "Des cours pratiques pour maîtriser l'IA dans tous les domaines",
            feature_2_title: "Outils IA",
            feature_2_desc: "Une liste complète d'outils IA avec des guides détaillés",
            feature_3_title: "Boutique",
            feature_3_desc: "Achetez des packs de prompts, eBooks et ressources exclusives",
            newsletter_title: "Restez informé",
            newsletter_desc: "Recevez nos dernières actualités et conseils sur l'IA",
            footer_desc: "Votre partenaire pour la maîtrise de l'intelligence artificielle",
            footer_text: "© 2024 AI Master. Tous droits réservés"
        },
        en: {
            welcome: "Welcome to AI Master",
            hero_subtitle: "Discover how artificial intelligence can transform your career",
            features_title: "Our Features",
            feature_1_title: "AI Training",
            feature_1_desc: "Practical courses to master AI in all fields",
            feature_2_title: "AI Tools",
            feature_2_desc: "A comprehensive list of AI tools with detailed guides",
            feature_3_title: "Store",
            feature_3_desc: "Buy prompt packs, eBooks and exclusive resources",
            newsletter_title: "Stay Informed",
            newsletter_desc: "Receive our latest news and AI tips",
            footer_desc: "Your partner for mastering artificial intelligence",
            footer_text: "© 2024 AI Master. All rights reserved"
        },
        he: {
            welcome: "ברוכים הבאים ל-AI Master",
            hero_subtitle: "גלה כיצד בינה מלאכותית יכולה לשנות את הקריירה שלך",
            features_title: "התכונות שלנו",
            feature_1_title: "קורסי בינה מלאכותית",
            feature_1_desc: "קורסים מעשיים לשליטה בבינה מלאכותית בכל התחומים",
            feature_2_title: "כלים של בינה מלאכותית",
            feature_2_desc: "רשימה מקיפה של כלי AI עם מדריכים מפורטים",
            feature_3_title: "חנות",
            feature_3_desc: "קנה חבילות הנחיות, ספרים אלקטרוניים ומשאבים בלעדיים",
            newsletter_title: "הישאר מעודכן",
            newsletter_desc: "קבל את החדשות והטיפים האחרונים שלנו על AI",
            footer_desc: "השותף שלך לשליטה בבינה מלאכותית",
            footer_text: "© 2024 AI Master. כל הזכויות שמורות"
        }
    };

    // Gestion des langues
    function changeLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        applyRTL(lang);
        localStorage.setItem('selectedLanguage', lang);
    }

    function applyRTL(lang) {
        const isRTL = lang === 'he';
        document.body.style.direction = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }

    // Boutons de langue
    document.querySelectorAll('.language-selector button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            document.querySelector('.language-selector .active').classList.remove('active');
            button.classList.add('active');
            changeLanguage(lang);
        });
    });

    // Restaurer la langue sauvegardée
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    changeLanguage(savedLang);
    document.querySelector(`[data-lang="${savedLang}"]`).classList.add('active');

    // Retour en haut
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('show', window.scrollY > 300);
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-target').forEach(el => observer.observe(el));

    // Gestion du menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    mobileMenuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
});
