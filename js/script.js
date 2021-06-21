const menuButtonOpen = document.querySelector('.menu');
const menuButtonClose = document.querySelector('.close');
const header = document.querySelector('header');
const headline = document.querySelector('.headline');

let isOpen = false;

function toggle() {
  if (!isOpen) {
    header.classList.add('open');
    headline.classList.add('bur-effect');
    isOpen = true;
  } else {
    header.classList.remove('open');
    headline.classList.remove('bur-effect');
    isOpen = false;
  }
}
menuButtonOpen.addEventListener('click', toggle);
menuButtonClose.addEventListener('click', toggle);
