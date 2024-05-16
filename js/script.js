'use strict';

const swiper = new Swiper('.services', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});