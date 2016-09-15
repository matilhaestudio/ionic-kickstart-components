'use strict';

var account = {
  templateUrl: './account.html',
  //controller: 'RegisterController'
};

angular
  .module('components.account')
  .component('account', account)
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        component: 'account'
      });
  });
