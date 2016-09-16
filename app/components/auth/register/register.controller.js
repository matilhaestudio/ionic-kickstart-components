'use strict';

function RegisterController (AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.createUser = function (event) {
    return AuthService
      .register(event.user)
      .then(function () {
        window.localStorage.setItem('logged', true)
        $state.go('app.main');
      }, function (reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);
