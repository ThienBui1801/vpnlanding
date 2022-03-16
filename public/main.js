'use strict';

// open menu responsive
const menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('invisible')
});

// modal sign in
const btnSignIn = document.querySelector('#sign-in');
const signIn = document.querySelector('#modal-sign-in');
const closeSignIn = document.querySelector('#in-close');
const modalSignIn = document.querySelector('#modal-sign-in');
const modalInContainer = document.querySelector('#modal-in-container');

function hideSignInMenu() {
  signIn.classList.add('invisible')
}

btnSignIn.addEventListener('click', () => {
  signIn.classList.toggle('invisible')
})

closeSignIn.addEventListener('click', hideSignInMenu)

modalSignIn.addEventListener('click', hideSignInMenu)

modalInContainer.addEventListener('click', (e) => {
  e.stopPropagation()
})

// open sign up
const btnSignUp = document.querySelector('#sign-up');
const signUp = document.querySelector('#modal-sign-up');
const closeSignUp = document.querySelector('#up-close');
const modalSignUp = document.querySelector('#modal-sign-up');
const modalUpContainer = document.querySelector('#modal-up-container');

function hideSignUpMenu() {
  signUp.classList.add('invisible')
}

btnSignUp.addEventListener('click', () => {
  signUp.classList.toggle('invisible')
})

closeSignUp.addEventListener('click', hideSignUpMenu)

modalSignUp.addEventListener('click', hideSignUpMenu)

modalUpContainer.addEventListener('click', (e) => {
  e.stopPropagation()
})