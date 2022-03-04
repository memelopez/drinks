// src/index.js
import './styles.css';

// glider js

import Glide from '@glidejs/glide';

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
}).mount();

// events

const prev = document.querySelector('#prevBtn');
const next = document.querySelector('#nextBtn');
const countDis = document.querySelector('.slideCounter');

let counter = 1;

prev.addEventListener('click', (e) => {
  e.preventDefault();
  if (counter === 1) {
    counter = 5;
  } else {
    counter -= 1;
  }
  countDis.textContent = `${counter}/5`;
});

next.addEventListener('click', (e) => {
  e.preventDefault();
  if (counter === 5) {
    counter = 1;
  } else {
    counter += 1;
  }
  countDis.textContent = `${counter}/5`;
});

// modal

const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});
// So just grab somebody, no leaving this party