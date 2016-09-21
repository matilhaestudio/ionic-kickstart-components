'use strict';

var account = {
  templateUrl: './account.html',
  controller: 'AccountController'
};

angular
  .module('components.account')
  .component('account', account)
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        component: 'account'
      })
      .state('account.faq', {
        url: '/faq',
        component: 'faq'
      });
  });
