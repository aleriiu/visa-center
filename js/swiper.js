'use strict';

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

const swiperReviews = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,


    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});