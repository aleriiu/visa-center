'use strict';


const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');

const swiper = new Swiper('.services', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.button-prev',
        nextEl: '.button-next',
    },
});