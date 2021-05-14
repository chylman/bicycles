'use strict';

(function () {
  const pageBody = document.querySelector('.page-body');
  const pageHeader = document.querySelector('.page-header');
  const navigationToggle = document.querySelector('.main-nav__toggle');
  const mainNavigation = document.querySelector('.main-nav');
  const mainNavLinksArray = Array.from(mainNavigation.querySelectorAll('a'));

  if (pageHeader) {
    pageHeader.classList.remove('page-header--no-js');
    pageHeader.classList.add('page-header--js');
  }

  if (mainNavigation) {
    mainNavigation.classList.add('main-nav--close');
  }

  const onNavigationToggleClick = () => {
    if (mainNavigation && pageBody) {
      if (mainNavigation.classList.contains('main-nav--close')) {
        mainNavigation.classList.remove('main-nav--close');
        mainNavigation.classList.add('main-nav--open');
        pageBody.classList.add('overflow-hidden');
      } else {
        mainNavigation.classList.add('main-nav--close');
        mainNavigation.classList.remove('main-nav--open');
        pageBody.classList.remove('overflow-hidden');
      }
    }
  };

  if (navigationToggle) {
    navigationToggle.addEventListener('click', onNavigationToggleClick);
  }

  const scrollTo = (element) => {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  const onMainNavLinksClick = (evt) => {
    evt.preventDefault();
    scrollTo(document.querySelector(evt.target.hash));

    if (mainNavigation) {
      mainNavigation.classList.add('main-nav--close');
      mainNavigation.classList.remove('main-nav--open');
    }
    if (pageBody) {
      pageBody.classList.remove('overflow-hidden');
    }
  };

  mainNavLinksArray.forEach(element => {
    element.addEventListener('click', onMainNavLinksClick);
  });

}());
