'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var COLOR_WIZARD_FIREBALL = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballColor = document.forms[0]['fireball-color'];

  wizardFireball.addEventListener('click', function () {
    var colorFireball = COLOR_WIZARD_FIREBALL[window.getRandomIndex(0, COLOR_WIZARD_FIREBALL.length - 1)];
    wizardFireball.style.background = colorFireball;
    wizardFireballColor.value = colorFireball;
  });
})();
