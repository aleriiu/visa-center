'use strict';

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

const swiperReviews = new Swiper('.swiper-container', {

    direction: 'horizontal',
    speed: 0,
    // loop: true,
    allowTouchMove: false,
    slidesPerView: "auto",
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    hashNavigation: {
        watchState: true,
    }
});