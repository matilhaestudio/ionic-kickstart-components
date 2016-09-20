'use strict';

function RecoverPasswordController (AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.message = null;
    ctrl.user = {
      email: ''
    };
  };
  ctrl.onSubmit = function() {
    AuthService.resetPassoword(ctrl.user.email)
    ctrl.user.email = '';
  };
}

angular
  .module('components.auth')
  .controller('RecoverPasswordController', RecoverPasswordController);
