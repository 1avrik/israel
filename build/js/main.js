'use strict';

(function () {

  var programs = document.querySelector('.programs')
  var programsNavigationItems = programs.querySelectorAll('.programs__navigation-item');
  var programsNavigationLinks =  programs.querySelectorAll('.programs__navigation-link');
  var programsContentItems = programs.querySelectorAll('.programs__content-item');

  var runProgramsNavigation = function (navigationItem, navigationLink, contentItem, navigationItems, contentItems) {
    navigationLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (var i = 0; i < programsNavigationItems.length; i++) {
        navigationItems[i].classList.remove('programs__navigation-item--active');
        contentItems[i].classList.remove('programs__content-item--active');
      }
      navigationItem.classList.add('programs__navigation-item--active');
      contentItem.classList.add('programs__content-item--active');
    });
  };

  for (var j = 0; j < programsNavigationLinks.length; j++) {
    runProgramsNavigation(programsNavigationItems[j], programsNavigationLinks[j], programsContentItems[j], programsNavigationItems, programsContentItems);
  }

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
