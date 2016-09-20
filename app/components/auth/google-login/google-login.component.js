'use strict';

var googleLogin = {
  bindings: {
    user: '<',
    // button: '@',
    // message: '@',
    onSubmit: '&'
  },
  templateUrl: './google-login.html',
  controller: 'GoogleLoginController'
};

angular
  .module('components.auth')
  .component('googleLogin', googleLogin);
