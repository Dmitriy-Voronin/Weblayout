
  const swiperEvents = new Swiper('.events__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {

    611: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    971: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

 });
