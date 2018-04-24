'use strict';

(function () {

  // Открывание и закрывание диалогового окна мага

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

  // Перетаскивание окна мага

  var dialogHandle = setup.querySelector('.setup-user-pic'); // находим элемент за который тащим

  dialogHandle.addEventListener('mousedown', function (evt) { // обработаем событие начала перетаскивания нашего диалога
    evt.preventDefault();

    var startCoords = { // Запомним координаты точки, с которой мы начали перемещать диалог
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove); // Добавим обработчики события передвижения мыши
    document.addEventListener('mouseup', onMouseUp); // Добавим обработчики события отпускания кнопки мыши
  });
})();
