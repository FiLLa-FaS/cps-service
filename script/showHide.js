export function showHide() {
    let list = document.querySelector('.service__list');
    let moreButton = document.querySelector('.service__expand');

    function showHide() {
        if (moreButton.textContent === 'Показать все') {
            moreButton.textContent = 'Скрыть';
        } else {
            moreButton.textContent = 'Показать все';
        }
        moreButton.classList.toggle('button-expand--inverse');
        list.classList.toggle('service__list--hidden');
    }

    moreButton.addEventListener('click', showHide);
}