const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show')
  // remove scrolling when hamburger click
  document.body.classList.toggle('stop-scrolling')
}

