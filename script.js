// Attente du chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
    // 1. Animation de fade-in au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.2 // Déclenche l'animation lorsque 20% de l'élément est visible
    });

    // Appliquer l'animation à tous les éléments avec la classe "fade-in-target"
    document.querySelectorAll('.fade-in-target').forEach(el => {
        observer.observe(el);
    });

    // 2. Effet de parallaxe pour les sections avec images
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        document.querySelectorAll('.parallax').forEach(el => {
            el.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    });

    // 3. Gestion du menu sticky
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 4. Bouton "Retour en haut" fluide
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 5. Formulaire d'inscription avec validation
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.querySelector('#email');
            if (!validateEmail(emailInput.value)) {
                alert('Veuillez entrer une adresse e-mail valide.');
            } else {
                alert('Merci pour votre inscription ! Vous recevrez vos prompts gratuits par e-mail.');
                signupForm.reset();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    }

    // 6. Ajout d'une animation pour les boutons CTA
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
