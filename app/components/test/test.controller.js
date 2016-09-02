function TestController() {
  var ctrl = this;
  console.log('TestController Loaded');
}

angular
  .module('components.test')
  .controller('TestController', TestController);
