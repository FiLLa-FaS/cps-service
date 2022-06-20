export function initModal() {
  let callButtons = document.querySelectorAll('.link-circle--type--call')
  let feedbackButtons = document.querySelectorAll('.link-circle--type--chat')

  let modalFeedback = document.querySelector('.modal--type--feedback')
  let modalFeedbackClose = modalFeedback.querySelector('.modal__close')

  let modalCall = document.querySelector('.modal--type--call')
  let modalCallClose = modalCall.querySelector('.modal__close')

  let page = document.querySelector('.page')

  function closeByEsc(event) {
    let currentPopup = document.querySelector('.modal--opened')
    if (event.code == 'Escape') {
      closeModal(currentPopup)
    }
  }

  function closeOnOverlay(event) {
    let currentPopup = document.querySelector('.modal--opened')
    if (event.target == currentPopup) {
      closeModal(currentPopup)
    }
  }

  function openModal(modalWindow) {
    modalWindow.classList.add('modal--opened')
    page.style.overflow = 'hidden'
    document.addEventListener('keydown', closeByEsc)
    window.addEventListener('click', closeOnOverlay)
    let firstInput = modalWindow.querySelector('input')
    firstInput.focus()
  }

  function closeModal(modalWindow) {
    modalWindow.classList.remove('modal--opened')
    page.style.overflow = 'visible'
    document.removeEventListener('keydown', closeByEsc)
    window.removeEventListener('click', closeOnOverlay)
  }

  for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', () => openModal(modalCall))
  }

  for (let i = 0; i < feedbackButtons.length; i++) {
    feedbackButtons[i].addEventListener('click', () => openModal(modalFeedback))
  }

  modalCallClose.addEventListener('click', () => closeModal(modalCall))
  modalFeedbackClose.addEventListener('click', () => closeModal(modalFeedback))
}
