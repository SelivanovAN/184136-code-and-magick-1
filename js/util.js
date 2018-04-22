'use strict';

(function () {
  window.getRandomIndex = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
})();
