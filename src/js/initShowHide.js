export function initShowHide() {
    let buttonsList = document.querySelectorAll('.button-expand');

    function showHide(button) {
        let element = button.parentNode.querySelector('.element-hide');

        element.classList.toggle('element-hide--opened');

        if (button.textContent === 'Показать все') {
            button.textContent = 'Скрыть';
        } else {
            button.textContent = 'Показать все';
        }
        button.classList.toggle('button-expand--inverse');

    }

    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].addEventListener('click', () => showHide(buttonsList[i]));
    }
}