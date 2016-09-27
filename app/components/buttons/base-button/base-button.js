'use strict'

var baseButton = {
  bindings: {
    icon: '@',
    text: '@',
    route: '@',
    onClick: '&',
    disableExpression: '='
  },
  templateUrl: './base-button.html'
}

angular
  .module('components.buttons')
  .component('baseButton', baseButton);
