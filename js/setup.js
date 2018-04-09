'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[0] + ' ' + WIZARD_SUR_NAME[0],
    coatColor: WIZARD_COAT_COLOR[0],
    eyesColor: WIZARD_EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1] + ' ' + WIZARD_SUR_NAME[1],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2] + ' ' + WIZARD_SUR_NAME[2],
    coatColor: WIZARD_COAT_COLOR[2],
    eyesColor: WIZARD_EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3] + ' ' + WIZARD_SUR_NAME[3],
    coatColor: WIZARD_COAT_COLOR[3],
    eyesColor: WIZARD_EYES_COLOR[3]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
