
const swiperProjects = new Swiper('.js-projects-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
},

keyboard: {
  enabled: true,
  onlyInViewport: true,
},

watchSlidesProgress: true,
watchSlidesVisibility: true,
slideVisibleClass: "slide-visible",

on: {
  init: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
    });
  },
  slideChange: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
    });
  }
},

breakpoints: {

  611: {
    slidesPerView: 2,
    spaceBetween: 34,
  },

  971: {
    slidesPerView: 2,
    spaceBetween: 50,
  },

  1281: {
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 50,
  }
},

});

(() => {
  tippy('.js-tooltip', {
    trigger: 'click',
    theme: 'violet-middle',
    maxWidth: 264,
  });
})();



