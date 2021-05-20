const counter = document.querySelector('.counter');
const counterBtn = document.querySelector('.counter-btn');
let number = 0;

counterBtn.addEventListener('click', () => {
  number += 1
  counter.innerHTML = number;
});
