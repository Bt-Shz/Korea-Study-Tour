var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 70,
  loop: true,
  centerSlide: false,
  grabCursor: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    speed: 10000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});