'use strict';

(function () { // Перетаскивание окна мага
  var setup = document.querySelector('.setup');
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
