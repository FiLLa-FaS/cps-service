export function initAddSwiper() {
  const sliders = document.querySelectorAll('.swiper')

  sliders.forEach((slider) => {
    let mySwiper
    function mobileSlider() {
      if (window.innerWidth <= 650 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
          direction: 'horizontal',
          loop: false,
          pagination: {
            el: slider.querySelector('.swiper-pagination'),
          },
        })

        slider.dataset.mobile = 'true'
      }

      if (window.innerWidth > 650) {
        slider.dataset.mobile = 'false'

        if (slider.classList.contains('swiper-initialized')) {
          mySwiper.destroy()
        }
      }
    }
    mobileSlider()
    window.addEventListener('resize', mobileSlider)
  })
}
