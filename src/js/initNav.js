export function initNav() {
  let menuButton = document.querySelector('.header__link')
  let navClose = document.querySelector('.nav-menu__close')
  let nav = document.querySelector('.nav-menu')
  let page = document.querySelector('.page')

  function openNav() {
    nav.classList.add('nav-menu--opened')
    page.style.overflow = 'hidden'
  }

  function closeNav() {
    nav.classList.remove('nav-menu--opened')
    page.style.overflow = 'visible'
  }

  menuButton.addEventListener('click', openNav)
  navClose.addEventListener('click', closeNav)
  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
      closeNav()
    }
  })
  window.addEventListener('click', function (event) {
    if (event.target == nav) {
      closeNav()
    }
  })
}
