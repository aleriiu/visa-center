'use strict';

const modalWindowWrapper = document.querySelector('.visas-modal-wrapper');
const modalWindow = modalWindowWrapper.querySelector('#visa-austria-modal');
const visaCloseBtn = modalWindowWrapper.querySelector('.visas-modal-close');

const country = document.querySelector('#visa-austria');

country.addEventListener('click', () => {
    modalWindowWrapper.style.display = 'flex';
    modalWindow.style.display = 'flex';
})

visaCloseBtn.addEventListener('click', () => {
    modalWindowWrapper.style.display = 'none';
    modalWindow.style.display = 'none';
})

