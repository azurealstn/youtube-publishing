'use strict';

const toggleBtn = document.querySelector('.toggleBtn');
const main = document.querySelector('.video-title-main');

toggleBtn.addEventListener('click', function() {
  main.classList.toggle('active');
  toggleBtn.classList.toggle('transform');
})