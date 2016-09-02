var sideMenuApp = {
  templateUrl: './menu.html',
};

angular
  .module('common.sidemenuapp')
  .component('sideMenuApp', sideMenuApp)
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/list');
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<side-menu-app></side-menu-app>'
      })
      .state('app.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: './list.html'
          }
        }
      })
      .state('app.test', {
        url: '/test',
        views: {
            'pageContent': {
               template: '<test></test>'
            }
          }
        
      })
  });