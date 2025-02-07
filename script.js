// Exemple de script pour gérer les formulaires d'inscription
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre inscription ! Vous recevrez vos prompts gratuits par e-mail.');
        });
    }
});
