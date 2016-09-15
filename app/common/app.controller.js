function AppController($state) {
  var ctrl = this;
  console.log("App Ctrl Loaded");
  //$state.go('login');
}

angular
  .module('common')
  .controller('AppController', AppController);
