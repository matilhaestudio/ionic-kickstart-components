'use strict';

function LoginController (AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.loginUser = function (event) {
    return AuthService
      .login(event.user)
      .then(function () {
        window.localStorage.setItem('logged', true)
        $state.go('app.main');
      }, function (reason) {
        ctrl.error = ctrl.changeErrorMessage(reason)
      });
  };
  ctrl.changeErrorMessage = function(error) {
    switch(error.code) {
      case 'INVALID_PASSWORD':
        return 'Invalid password';
      case 'INVALID_USER':
        return 'Invalid user';
      case 'INVALID_EMAIL':
        return 'Invalid email';
      default:
        return error.code;
    }
  }
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);
