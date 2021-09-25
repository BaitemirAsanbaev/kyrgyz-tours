import 'bootstrap';

  
  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 200,
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});