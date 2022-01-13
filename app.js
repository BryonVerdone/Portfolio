//open mobile nav

const mobileBtn = document.getElementById('mobile-btn');
const mobileNav = document.getElementById('mobile-nav');
mobileBtn.addEventListener('click', closeMobileNav);

function closeMobileNav() {
  if (mobileNav.classList.contains('mobile-hidden')) {
    mobileNav.classList.toggle('mobile-show');
  }
}

//close navbar on mobile link click

const mobileLink = document.querySelectorAll('.mobile-item');

mobileLink.forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});
