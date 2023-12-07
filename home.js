// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >+ 180) {
        navbar.style.backgroundColor = 'rgb(163, 163, 225)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});



