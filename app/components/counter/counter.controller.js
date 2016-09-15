'use strict';

function CounterController () {
  var ctrl = this;
  console.log('CounterController Loaded');

  'use strict'

  this.increment = function() {
    this.count ++;
  };
  this.decrement = function() {
    this.count --;
  };
}

angular.module('components.counter').controller('CounterController', CounterController);
