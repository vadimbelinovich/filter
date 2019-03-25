"use strict";

const input = document.querySelector('.input');
const items = Array.from(document.querySelectorAll('.list__item'));

input.addEventListener('keyup', value);

function value() {
  let inputValue = input.value.toUpperCase();

  for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML.toUpperCase().indexOf(inputValue) < 0) {
      items[i].style.display = 'none';
    } else {
      items[i].style.display = '';
    }
  }
}