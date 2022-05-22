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


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

function destroySwiper() {
    if (document.documentElement.clientWidth > 650) {
        swiper.destroy(true, true);
        // } else if (document.documentElement.clientWidth <= 650) {
        //     swiper.init();
         }
}

destroySwiper();

// window.addEventListener('resize', destroySwiper);