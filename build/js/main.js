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

var ValidPhone = function () {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var message = document.getElementById('message');
    var valid = re.test(myPhone);
    if (!valid) {
      message.textContent = 'Номер телефона введен неправильно!';
      message.style = "color: red;"
    } else {
      message.style = "";
    }

    return valid;
}
