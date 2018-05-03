'use strict';

(function () {
  // var WIZARD_NAMES = [
  //   'Иван',
  //   'Хуан Себастьян',
  //   'Мария',
  //   'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
// ];

  // var WIZARD_SUR_NAME = [
  //   'да Марья',
  //   'Верон',
  //   'Мирабелла',
  //   'Вальц',
  //   'Онопко',
  //   'Топольницкая',
  //   'Нионго',
  //   'Ирвинг'
// ];

  // var WIZARD_COAT_COLOR = [
  //   'rgb(101, 137, 164)',
  //   'rgb(241, 43, 107)',
  //   'rgb(146, 100, 161)',
  //   'rgb(56, 159, 117)',
  //   'rgb(215, 210, 55)',
  //   'rgb(0, 0, 0)'
  // ];
  //
  // var WIZARD_EYES_COLOR = [
  //   'black',
  //   'red',
  //   'blue',
  //   'yellow',
  //   'green'
  // ];

  // var setup = document.querySelector('.setup');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // var wizards = []; // создаем массив объектов из 4 магов

  // var NUMBERS_WIZARDS = 4;
  // for (var j = 0; j < NUMBERS_WIZARDS; j++) {
  //   wizards.push({
  //     name: WIZARD_NAMES[window.getRandomIndex(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SUR_NAME[window.getRandomIndex(0, WIZARD_SUR_NAME.length - 1)],
  //     coatColor: WIZARD_COAT_COLOR[window.getRandomIndex(0, WIZARD_COAT_COLOR.length - 1)],
  //     eyesColor: WIZARD_EYES_COLOR[window.getRandomIndex(0, WIZARD_EYES_COLOR.length - 1)]
  //   });
  // }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    var NUMBERS_WIZARDS = 4;

    for (var i = 0; i < NUMBERS_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);


  // send information

  var form = window.setup.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.util.closePopup();
    });
    evt.preventDefault();
  });
})();
