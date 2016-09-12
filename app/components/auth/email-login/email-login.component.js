'use strict';

var emailLogin = {
  templateUrl: './email-login.html',
  controller: 'EmailLoginController'
};

angular
  .module('components.auth')
  .component('emailLogin', emailLogin)
  .config(function ($stateProvider) {
    $stateProvider
      .state('auth.email', {
        url: '/email',
        component: 'emailLogin'
      });
  });
