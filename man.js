'use strict';

const menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('invisible')
});