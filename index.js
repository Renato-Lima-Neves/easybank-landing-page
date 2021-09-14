const navLinks = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
    menu.classList.toggle('show-menu');
})