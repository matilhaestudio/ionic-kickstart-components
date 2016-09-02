'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      template: '<ion-view view-title="main"></ion-view>',
      // templateUrl: 'main/templates/<someTemplate>.html',
      // controller: 'SomeCtrl as ctrl'
    });
});
