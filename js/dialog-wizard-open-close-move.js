'use strict';

(function () {

  // Открывание и закрывание диалогового окна мага

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');

  var ENTER_KEYCODE = 13;

  setupOpen.addEventListener('click', function () {
    window.util.openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.util.openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    window.util.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.util.closePopup();
    }
  });

  // Перетаскивание окна мага

  var dialogHandle = window.setup.querySelector('.setup-user-pic'); // находим элемент за который тащим

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

      window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
      window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
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
