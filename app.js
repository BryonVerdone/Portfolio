// Open and close mobile nav

const navBtn = document.getElementById('toggleNavBtn');
const mobileMenu = document.getElementById('mobile-menu');

navBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('show-nav');
});
