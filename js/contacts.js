const telSelector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(telSelector);

const validation = new JustValidate('.middle__form', {
  errorLabelStyle: {
    color: '#D11616',
  },

})
validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов',
  },
  {
    rule: 'customRegexp',
    value:  /^[A-ZА-ЯЁ]+$/i,
    errorMessage: 'Недопустимый формат',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
]).addField('#tel', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваш телефон',
  },
  {
    validator: (value) => {
      const phone = telSelector.inputmask.unmaskedvalue()
      console.log(phone)
      return Number(phone) && phone.length === 10;
    },
    errorMessage: 'Телефон не корректный!',
  },
]).onSuccess((event) => {
  console.log('Validation passes and form submitted', event);

  let formData = new FormData(event.target);

  console.log(...formData);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Отправлено');
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  event.target.reset();
});



var moscow_map;

  ymaps.ready(function(){
  moscow_map = new ymaps.Map("map", {
      controls: ['geolocationControl', 'zoomControl'],
      center: [55.758468, 37.601088],
      zoom: 15,
      behaviors: ['drag'],
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:
      {
        top: "330px",
        right: "20px"
      },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition:
      {
        top: "260px",
        right: "20px" }
    }
    );

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/mapIcon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -42]
});
  moscow_map.geoObjects.add(myPlacemark);
});

