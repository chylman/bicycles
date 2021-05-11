'use strict';

const pageBody = document.querySelector('.page-body');
const pageHeader = document.querySelector('.page-header');
const navigationToggle = document.querySelector('.main-nav__toggle');
const mainNavigation = document.querySelector('.main-nav');
const mainNavLinksArray = Array.from(mainNavigation.querySelectorAll('a'));

pageHeader.classList.remove('page-header--no-js');
pageHeader.classList.add('page-header--js');
mainNavigation.classList.add('main-nav--close');

navigationToggle.addEventListener('click', () => {
  if (mainNavigation.classList.contains('main-nav--close')) {
    mainNavigation.classList.remove('main-nav--close');
    mainNavigation.classList.add('main-nav--open');
    pageBody.style.overflow = 'hidden';
  } else {
    mainNavigation.classList.add('main-nav--close');
    mainNavigation.classList.remove('main-nav--open');
    pageBody.style.overflow = '';
  }
});

const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  })
}

const onMainNavLinksClick = (evt) => {
  evt.preventDefault();
  console.log(evt);
  scrollTo(document.querySelector(evt.target.hash));
  mainNavigation.classList.add('main-nav--close');
  mainNavigation.classList.remove('main-nav--open');
  pageBody.style.overflow = '';
}

mainNavLinksArray.forEach(element => {
  element.addEventListener('click', onMainNavLinksClick);
});
