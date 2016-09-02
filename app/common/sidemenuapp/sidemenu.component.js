var sideMenuApp = {
  templateUrl: './menu.html',
};

angular
  .module('common.sidemenuapp')
  .component('sideMenuApp', sideMenuApp)
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        template: '<side-menu-app></side-menu-app>'
      })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: './list.html'
          }
        }
      })
  });