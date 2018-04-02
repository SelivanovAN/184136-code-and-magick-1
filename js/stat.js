'use strict'; // Зачем его писать?

window.renderStatistics = function (ctx, names, times) { // зачем window
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', 120, 30);
  var max = -1;
  for (var i = 0; i < times.length; i++) { // а могу ВАР перед И неписать? Зачем длину времени берем?
    var time = times[i]; // почему значене как массив?
    if (time > max) {
      max = time;
    }
  }
  var histogramWidth = 150;
  var step = histogramWidth / (max - 0); // почему так? что за шаг
  ctx.fillText('Список результатов: ', 120, 50);
  var barHeigth = 50;
  var indent = 90;
  var initialX = 250; // почему их задаем?
  var initialY = 140; // почему их задаем?
  ctx.textBaseline = 'hanging';
  var getColor = function (name) { // name нигде не определ до этого , почему он в скобках появился?
    var color;
    if (name === 'Вы') { // объяснить значение трех равно и смыл скобок
      color = 'rgba(255, 0, 0, 1.0)';
    } else {
      color = 'rgba(0, 0, 255, ' + Math.random() + ')'; // а если в скобках рендома что-то будет, что это будет значить?
    }
    return color;
  };
  for (i = 0; i < times.length; i++) { // объяснить содержание скобок
    ctx.fillStyle = getColor(names[i]); // почему в скобках И?
    ctx.fillRect(initialY + indent * i, initialX, barHeigth, -times[i] * step);
    ctx.fillText(names[i], initialY + indent * i, initialX + 5);
    ctx.fillText(times[i].toFixed(0), initialY + indent * i, initialX - times[i] * step - 20);
  }
};
