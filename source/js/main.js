'use strict';

(function () {

  var headerNavigation = document.querySelector('.header__navigation');
  var menuButton = headerNavigation.querySelector('.header__navigation-button');
  var headerMenu = headerNavigation.querySelector('.header__navigation-list');

  headerNavigation.classList.remove('header__navigation--nojs');

  var onMenuToggle = function () {
    menuButton.classList.toggle('header__navigation-button--active');
    headerMenu.classList.toggle('header__navigation-list--open');
  };

  menuButton.addEventListener('click', onMenuToggle);

})();
