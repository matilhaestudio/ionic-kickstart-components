'use strict';

var sideMenuApp = {
  templateUrl: './menu.html',
};

angular
  .module('common.sidemenuapp')
  .component('sideMenuApp', sideMenuApp);
  // .config(function ($stateProvider, $urlRouterProvider) {

  //   /*
  //       PLEASE INCLUDE ONLY MAIN MENU ROUTES
  //   */

  //   $urlRouterProvider.otherwise('/app/main');
  //   $stateProvider
  //     .state('app', {
  //       url: '/app',
  //       abstract: true,
  //       template: '<side-menu-app></side-menu-app>'
  //     })
  //     .state('app.main', {
  //       url: '/main',
  //       views: {
  //         'pageContent': {
  //           templateUrl: './mainview.html'
  //         }
  //       }
  //     })
  //     .state('app.account', {
  //       url: '/account',
  //       views: {
  //         'pageContent': {
  //           templateUrl: './accountview.html'
  //         }
  //       }
  //     })
  //     .state('app.login', {
  //       url: '/login',
  //       views: {
  //         'pageContent': {
  //           templateUrl: './auth.login.view.html'
  //         }
  //       }
  //     })
  //     .state('app.register', {
  //       url: '/register',
  //       views: {
  //         'pageContent': {
  //           templateUrl: './auth.register.view.html'
  //         }
  //       }
  //     })
  // });
