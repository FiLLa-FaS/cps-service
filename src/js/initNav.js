export function initNav() {
  let menuButton = document.querySelector('.header__link');
  let navClose = document.querySelector('.nav-menu__close');
  let nav = document.querySelector('.nav-menu');

  function openClose() {
    nav.classList.toggle('nav-menu--opened');
  }

  window.onclick = function(e) {
    if (e.target == nav) {
      nav.classList.remove('nav-menu--opened');
    }
  }

  menuButton.addEventListener('click', openClose);
  navClose.addEventListener('click', openClose);
}