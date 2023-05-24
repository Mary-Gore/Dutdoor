const headerNav = document.querySelector('.header__nav');

const handlerMenu = elem => {
  if (!headerNav.classList.contains('header__nav_active')) {
    headerNav.classList.add('header__nav_active');
  } else if (elem.matches('a') || elem.closest('.header__burger-wrap')) {
    headerNav.classList.remove('header__nav_active');
  }
};

document.addEventListener('click', event => {
  if (event.target.closest('.header__burger-wrap') ||
    event.target.closest('.header__nav')) {
    handlerMenu(event.target);
  }
});