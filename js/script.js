const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__rating-percent'),
      scales = document.querySelectorAll('.skills__rating-scale span');

percent.forEach((item, i) => {
    scales[i].style.width = item.innerHTML;
});