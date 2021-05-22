
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const cunters =  document.querySelectorAll('.skills-ratings__cunter'),
        lines = document.querySelectorAll('.skills-ratings__line span');

cunters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

