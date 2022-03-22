import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

const resultStudentSwiper = new Swiper('.slider__content', {
  slidesPerView: 'auto',
  speed: 500,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev"
  },
  breakpoints: {
    576: {
      spaceBetween: 24
    }
  }
})