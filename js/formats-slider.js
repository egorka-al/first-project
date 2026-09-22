const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
      
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
    },
  
    navigation: {
      nextEl: '.slider__button.next',
      prevEl: '.slider__button.prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });