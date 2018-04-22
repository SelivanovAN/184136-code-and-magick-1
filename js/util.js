'use strict';

window.getRandomIndex = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
