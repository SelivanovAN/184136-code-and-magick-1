'use strict';

(function () {

  // меняем и проверяем на корректность имя мага

  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
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

  // Меняем цвет глаз мага

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

  // Меняем цвет фаербола мага

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

  // Двигаем предметы мага

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode(true);
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    if (evt.target.dataset.fill === 'true') {
      return;
    }
    artifactsElement.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.target.style.outline = '';
    evt.target.appendChild(draggedItem);
    evt.target.setAttribute('data-fill', true);
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
})();
