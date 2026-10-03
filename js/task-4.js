'use strict';

const formElm = document.querySelector('.login-form');

formElm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElm);
  const inputValue = {
    email: formData.get('email').trim(),
    password: formData.get('password').trim(),
  };

  const isInvalidInput = inputValue.email === '' || inputValue.password === '';

  if (isInvalidInput) {
    alert('All form fields must be filled in');
  } else {
    console.log(inputValue);
    formElm.reset();
  }
});
