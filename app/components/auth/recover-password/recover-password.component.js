'use strict';

var recoverPassword = {
  templateUrl: './recover-password.html',
  controller: 'RecoverPasswordController'
};

angular
  .module('components.auth')
  .component('recoverPassword', recoverPassword)
  .config(function ($stateProvider) {
    $stateProvider
      .state('auth.recover-password', {
        url: '/recover-password',
        component: 'recoverPassword'
      });
  });
