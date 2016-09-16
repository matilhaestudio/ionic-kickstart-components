'use strict';

var account = {
  templateUrl: './account.html'
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
