  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

    function setMenuListener() {
      document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
          activeElements.forEach((current) => {
            if (current.classList.contains(params.btnClassName)) {
              current.classList.remove(params.activeClassName);
            } else {
              current.classList.add(params.disabledClassName);
            }
          });
        }

        if (evt.target.closest(`.${params.btnClassName}`)) {
          const btn = evt.target.closest(`.${params.btnClassName}`);
          const path = btn.dataset.path;
          const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

          btn.classList.toggle(params.activeClassName);

          if (!drop.classList.contains(params.activeClassName)) {
            drop.classList.add(params.activeClassName);
            drop.addEventListener("animationend", onDisable);
          } else {
            drop.classList.add(params.disabledClassName);
          }
        }
      });
    }

  setMenuListener();


  // // Бургер
  // document.querySelector('.header__burger').addEventListener('click', function() {
  //   document.querySelector('.header__menu').classList.add('burger__is-active')
  // })
  // document.querySelector('.menu__btn').addEventListener('click', function() {
  //   document.querySelector('.header__menu').classList.remove('burger__is-active')
  // })

  // window.addEventListener('click', e => {
  //   const target = e.target
  //   if (!target.closest('.header__burger')) {
  //     document.querySelector('.header__menu').classList.remove('burger__is-active')
  //   }
  // })

  //   // Форма поиска
  //   document.querySelector('.header__top-button').addEventListener('click', function() {
  //     document.querySelector('.header__form-top').classList.add('header__form-active')
  //     document.querySelector('.header__top-button').style.opacity = '0'
  //   })

  //   window.addEventListener('click', e => { // при клике в любом месте окна браузера
  //     const target = e.target // находим элемент, на котором был клик
  //     if (!target.closest('.header__form_top') && !target.closest('.header__top-button')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
  //       document.querySelector('.header__form-top').classList.remove('header__form-active') // то закрываем окно навигации, удаляя активный класс
  //         document.querySelector('.header__top-button').style.opacity = '1'
  //     }
  //   })

