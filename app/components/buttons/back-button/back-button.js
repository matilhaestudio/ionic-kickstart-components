'use strict'

var backButton = {
  bindings: {
    icon: '@',
    text: '@',
    route: '@'
  },
  templateUrl: './back-button.html'
}

angular
  .module('components.buttons')
  .component('backButton', backButton);
