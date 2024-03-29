import 'bootstrap';

  
  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';

  import { Navigation } from 'swiper';
  
  Swiper.use(Navigation);
  // import styles bundle
  import 'swiper/css/bundle';const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // centeredSlides: true,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 480px
      800: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      // when window width is >= 640px
      1440: {
        slidesPerView: 4,
        spaceBetween: 60
      },
      // when window width is >= 640px
      1850: {
        slidesPerView: 5,
        spaceBetween: 60
      },
      // when window width is >= 640px
      2350: {
        slidesPerView: 6,
        spaceBetween: 60
      },
    }
  })