




const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});



$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('show');
  });
});






// Находим все кнопки аккордеона
const accordionButtons = document.querySelectorAll('.accordion-button');

// Добавляем обработчик события для каждой кнопки
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Проверяем, открыта ли секция, которую мы собираемся открыть или закрыть
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        // Получаем id целевой секции
        const targetId = this.getAttribute('data-bs-target');

        // Находим целевую секцию
        const target = document.querySelector(targetId);

        // Если секция открыта, закрываем её
        if (isOpen) {
            this.setAttribute('aria-expanded', 'false');
            target.classList.remove('show');
        }
        // Если секция закрыта, открываем её
        else {
            this.setAttribute('aria-expanded', 'true');
            target.classList.add('show');
        }
    });
});





// AOS JS

  AOS.init();

  
  