//open mobile nav

const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');
mobileBtn.addEventListener('click', function () {
  if (mobileNav.classList.contains('mobile-hidden')) {
    mobileNav.classList.toggle('mobile-show');
  }
});
