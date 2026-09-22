// const mobileMenu = document.querySelector('.mobile-menu');
// const menuBtnOpen = document.querySelector('.menu-btn-open');
// const menuBtnClose = document.querySelector('.menu-btn-close');

// const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// menuBtnOpen.addEventListener('click', toggleMenu);
// menuBtnClose.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    const menuBtnOpen = document.querySelector('.menu-btn-open'); // Вибираємо кнопку для відкриття меню
    const menuBtnClose = document.querySelector('.menu-btn-close'); // Вибираємо кнопку для закриття меню
  
    // Відкриття мобільного меню при кліку на кнопку з класом menu-btn-open
    menuBtnOpen.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
      disableScroll();
    });
  
    // Закриття мобільного меню при кліку на кнопку з класом menu-btn-close
    menuBtnClose.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      disableScroll();
    });
  
    // Плавна прокрутка до розділів при кліку на лінки в меню та закриття меню
    menuLinks.forEach(function (linkItem) {
      const link = linkItem.querySelector('a');
      if (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
  
          if (targetSection) {
            // Закриваємо меню
            mobileMenu.classList.remove('is-open');
            disableScroll();
            
            // Плавна прокрутка до секції
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      }
    });
  
    // Функція для включення/виключення прокрутки
    const disableScroll = () => {
      document.body.classList.toggle('is-scroll-disabled');
    };
  });