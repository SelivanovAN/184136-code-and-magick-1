'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var COLOR_WIZARD_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesColor = document.forms[0]['eyes-color'];
  wizardEyes.addEventListener('click', function () {
    var colorEyes = COLOR_WIZARD_EYES[window.getRandomIndex(0, COLOR_WIZARD_EYES.length - 1)];
    wizardEyes.style.fill = colorEyes;
    wizardEyesColor.value = colorEyes;
  });
})();
