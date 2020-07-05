const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const navbarTag = document.querySelector('nav');
const navlogTag = document.querySelector('nav li')
const navliTag = document.querySelector('.navbar-logo a')

let scrolled = () => {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
  navbarTag.style.setProperty('background', scrolled() > 50 ? "var(--space-color)" : "var(--navbar-background-color)");
})
