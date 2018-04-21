'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomIndex = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var wizards = [];
for (var j = 0; j < 4; j++) {
  wizards.push({
    name: WIZARD_NAMES[getRandomIndex(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SUR_NAME[getRandomIndex(0, WIZARD_SUR_NAME.length - 1)],
    coatColor: WIZARD_COAT_COLOR[getRandomIndex(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomIndex(0, WIZARD_EYES_COLOR.length - 1)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var coordinatesSetupTop = setup.style.top;
var coordinatesSetupLeft = setup.style.left;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setup.style.top = coordinatesSetupTop;
  setup.style.left = coordinatesSetupLeft;
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () { // eslint выдает ошибку - почему, где ее использовать надо?
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов'); // not wark
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});
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
  var colorEyes = COLOR_WIZARD_EYES[getRandomIndex(0, COLOR_WIZARD_EYES.length - 1)];
  wizardEyes.style.fill = colorEyes;
  wizardEyesColor.value = colorEyes;
});

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
  var colorFireball = COLOR_WIZARD_FIREBALL[getRandomIndex(0, COLOR_WIZARD_FIREBALL.length - 1)];
  wizardFireball.style.background = colorFireball;
  wizardFireballColor.value = colorFireball;
});

// take a star

var shopElement = document.querySelector('.setup-artifacts-shop');
var artifactsElement = document.querySelector('.setup-artifacts');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
    artifactsElement.style.outline = '2px dashed red';
  }
});

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function (evt) {
  artifactsElement.style.outline = '';
  evt.target.style.backgroundColor = '';
  evt.target.style.outline = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});

artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.target.style.outline = '2px dashed red';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.style.outline = '';
  evt.preventDefault();
});
