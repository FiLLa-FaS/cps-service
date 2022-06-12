export function initAddSwiper() {
  if (document.documentElement.clientWidth < 650) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}