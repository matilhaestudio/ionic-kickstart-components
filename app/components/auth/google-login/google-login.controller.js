'use strict';

function GoogleLoginController (AuthService, $state) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  };
  ctrl.submitForm = function () {
    AuthService.googleLogin()
      .then(function(data) {
        window.localStorage.setItem('logged', true);
        $state.go('app.main');
      }).catch(function(error) {
        ctrl.message = error.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('GoogleLoginController', GoogleLoginController);
