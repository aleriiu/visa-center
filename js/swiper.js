'use strict';

const swiperServices = new Swiper('.services-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 42,
    navigation: {
         nextEl: '.button-next',
         prevEl: '.button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
      },
});

const swiperReviews = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 42,
    navigation: {
         nextEl: '.button-next',
         prevEl: '.button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
      },
});