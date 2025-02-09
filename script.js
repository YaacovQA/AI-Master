// Animation de fade-in au scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in-target').forEach(el => {
        observer.observe(el);
    });

    // Bouton "Retour en haut"
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Validation du formulaire d'inscription
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
});
// Menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Animation pour le bouton hamburger
        const lines = menuToggle.querySelectorAll('div');
        lines.forEach(line => line.classList.toggle('active'));
    });

    // Bouton Retour en haut
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Gestion du panier
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = [];
    let total = 0;

    // Ouvrir/Fermer le modal du panier
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Ajouter un article au panier
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);

            // Ajouter au panier
            cart.push({ name, price });
            total += price;

            // Mettre à jour l'affichage
            updateCart();
        });
    });

    // Mettre à jour le panier
    function updateCart() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}€`;
            cartItemsList.appendChild(li);
        });

        cartCount.textContent = cart.length;
        cartTotal.textContent = `${total.toFixed(2)} €`;
    }

    // Finaliser l'achat
    checkoutBtn.addEventListener('click', () => {
        alert(`Merci pour votre achat ! Total : ${total.toFixed(2)}€`);
        cart = [];
        total = 0;
        updateCart();
        cartModal.style.display = 'none';
    });
});
