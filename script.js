'use strict';

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

const swiper = new Swiper('.services', {

    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    slidesPerView: "auto",
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});