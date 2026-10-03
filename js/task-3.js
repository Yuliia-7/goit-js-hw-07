'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const userName = inputName.value.trim();
  if (userName !== '') {
    outputName.textContent = userName;
  } else {
    outputName.textContent = 'Anonymous';
  }
});
