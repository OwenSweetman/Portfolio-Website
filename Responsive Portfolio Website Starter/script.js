let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const projectButtons = document.querySelectorAll('.projects-card .btn');

projectButtons[0].addEventListener('click', () => {
  window.open('https://github.com/OwenSweetman/BachEndDatabase', '_blank');
});

projectButtons[1].addEventListener('click', () => {
  window.open('https://github.com/OwenSweetman/Portfolio-Website', '_blank');
});