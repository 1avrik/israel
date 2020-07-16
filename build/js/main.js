'use strict';

(function () {

  var headerNavigation = document.querySelector('.header__navigation');
  var menuButton = headerNavigation.querySelector('.header__navigation-toggle');
  var headerLogo = headerNavigation.querySelector('.header__navigation-logo-img');
  var headerMenu = headerNavigation.querySelector('.header__navigation-list');

  headerNavigation.classList.remove('header__navigation--nojs');

  var onMenuToggle = function () {
    menuButton.classList.toggle('header__navigation-toggle--open');
    headerLogo.classList.toggle('header__navigation-logo-img--open');
    headerMenu.classList.toggle('header__navigation-list--open');
  };

  menuButton.addEventListener('click', onMenuToggle);

})();
