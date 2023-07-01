const element = document.querySelector('.form__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: false,
    shouldSort: false,
    position: 'bottom',
    classNames: {
      containerOuter: 'gallery-filter',
      containerInner: 'gallery-filter__inner',
      input: 'gallery-filter__input',
      inputCloned: 'gallery-filter__input--cloned',
      list: 'gallery-filter__list',
      listItems: 'gallery-filter__list--multiple',
      listSingle: 'gallery-filter__list--single',
      listDropdown: 'gallery-filter__list--dropdown',
      item: 'gallery-filter__item',
      itemSelectable: 'gallery-filter__item--selectable',
      itemDisabled: 'gallery-filter__item--disabled',
      itemChoice: 'gallery-filter__item--choice',
      placeholder: 'gallery-filter__placeholder',
      group: 'gallery-filter__group',
      groupHeading: 'gallery-filter__heading',
      button: 'gallery-filter__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });

  const swiperGallery = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
     // Navigation arrows
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
  },

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  breakpoints: {
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 10
    // },
    // when window width is >= 480px
    421: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },
    970: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
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
  }
});

// Модальное окно
  document.querySelectorAll('.js-open-modal').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.modal').forEach(function(btn) {
        btn.classList.remove('modal_active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('modal_active');
      document.body.style.overflow = 'hidden';
      window.addEventListener('click', e => { // при клике в любом месте окна браузера
        const target = e.target // находим элемент, на котором был клик
        if (!target.closest('.modal__img') && !target.closest('.modal__text') && !target.closest('.js-open-modal')) { // если этот элемент или его родительские элементы не кнопка
          document.querySelectorAll('.modal').forEach(function(btn) {
            btn.classList.remove('modal_active');
            document.body.removeAttribute('style');
          }) // то закрываем окно навигации, удаляя активный класс
        }
      })
    });
  });


