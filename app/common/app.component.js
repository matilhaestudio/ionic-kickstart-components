var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<side-menu-app></side-menu-app>'
      })
      // .state('app', {
      //   url: '/app',
      //   abstract: true,
      //   template: '<tabs-menu-app></tabs-menu-app>'
      // })
      .state('app.main', {
        url: '/main',
        component: 'login'
      })
      .state('app.register', {
        url: '/register',
        component: 'register'
      })
      //$urlRouterProvider.otherwise('/auth/login');
      $urlRouterProvider.otherwise('/app/main');
  });
