'use strict';
angular.module('common.tabsmenu', [
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/main');
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: './tabs.html'
    })
    .state('app.main', {
      url: '/main',
      views: {
        'tab-list': {
          templateUrl: './mainview.html'
        }
    }})
    .state('app.account', {
      url: '/account',
      views: {
        'tab-list': {
          templateUrl: './accountview.html'
        }
    }});
});
