export function initModal() {

    let callButtons = document.querySelectorAll('.link-circle--type--call');
    let feedbackButtons = document.querySelectorAll('.link-circle--type--chat');

    let modalFeedback = document.querySelector('.modal--type--feedback');
    let modalFeedbackClose = modalFeedback.querySelector('.modal__close');

    let modalCall = document.querySelector('.modal--type--call');
    let modalCallClose = modalCall.querySelector('.modal__close');

    const openModal = modalWindow => {
        modalWindow.classList.add('modal--opened');
        console.log('working');
    }

    const closeModal = modalWindow => {
        modalWindow.classList.remove('modal--opened');
        console.log('working');
    }

    for (let i = 0; i < callButtons.length; i++) {
        callButtons[i].addEventListener('click', () => openModal(modalCall));
    }

    for (let i = 0; i < feedbackButtons.length; i++) {
        feedbackButtons[i].addEventListener('click', () => openModal(modalFeedback));
    }

    modalCallClose.addEventListener('click', () => closeModal(modalCall));
    modalFeedbackClose.addEventListener('click', () => closeModal(modalFeedback));
}