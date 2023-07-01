(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linksClass}`);

    function onBtnClick () {
      if (window.getWindowWidth() <= window.TABLET_WIDTH) {
      btn.classList.toggle(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-label', 'Закрыть меню');
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.classList.toggle(params.hiddenClass);
          btn.setAttribute('aria-label', 'Открыть меню');
        }
      }
    }

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 500));
    links.forEach((link) => {
      link.addEventListener('click', window.debounce(onBtnClick, 500))
    });
  }

  // здесь мы вызываем функцию и передаем в нее классы наших элементов
  setBurger({
    btnClass: "js-burger", // класс бургера
    menuClass: "js-menu-wrap", // класс меню
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
    linksClass: "js-menu-link"
  });
}) ();
