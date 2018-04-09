'use strict';

window.renderStatistics = function (ctx, names, times) {
  var BAR_HEIGHT = 150;
  var INDENT = 50;
  var BAR_WIDTH = 40;
  var INITIAL_X = 140;
  var INITIAL_Y = 250;
  var drawCloud = function (context) { // Рисуем облака
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(110, 20, 420, 270);
    context.fillStyle = 'white';
    context.fillRect(100, 10, 420, 270);
    context.fillStyle = '#000';
    context.font = '16px PT Mono';
    context.textBaseline = 'hanging';
    context.fillText('Ура, вы победили!', 120, 30);
  };
  var getMaxElement = function (array) { // Получаем максимального элемента - для времени
    var max = -1;
    for (var i = 0; i < array.length; i++) {
      var time = array[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };
  var getColor = function (name) { // Получаем цвет для чела с именем name
    var color;
    if (name === 'Вы') {
      color = 'rgba(255, 0, 0, 1.0)';
    } else {
      color = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    return color;
  };
  var drawResult = function (name, time, position, step) { // получаем результат одного чела
    ctx.fillStyle = getColor(name);
    ctx.fillRect(INITIAL_X + (INDENT + BAR_WIDTH) * position, INITIAL_Y, BAR_WIDTH, -time * step);
    ctx.fillText(name, INITIAL_X + (INDENT + BAR_WIDTH) * position, INITIAL_Y + 5);
    ctx.fillText(time.toFixed(0), INITIAL_X + (INDENT + BAR_WIDTH) * position, INITIAL_Y - time * step - 20);
  };
  var maxTime = getMaxElement(times);
  var step = BAR_HEIGHT / maxTime;
  drawCloud(ctx);
  ctx.fillText('Список результатов: ', 120, 50);
  ctx.textBaseline = 'hanging';
  for (var i = 0; i < times.length; i++) {
    drawResult(names[i], times[i], i, step);
  }
};
