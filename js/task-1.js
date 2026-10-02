'use strict';

const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const totalElem = category.querySelectorAll('li').length;
  console.log('Category:', title);
  console.log('Elements:', totalElem);
});

const gallary = document.querySelector('.gallary');
