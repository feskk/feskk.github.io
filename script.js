document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    document.querySelector('#work').scrollIntoView({
        behavior: 'smooth'
    });
});