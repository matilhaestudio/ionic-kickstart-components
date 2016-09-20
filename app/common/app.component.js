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
        template: '<side-menu-app></side-menu-app>', // or change this to <tabs-menu-app></tabs-menu-app>
        onEnter: function($state) {
          if(!window.localStorage.getItem('logged')) {
            $state.go('auth.login')
          }
        }
      })
      .state('app.main', {
        url: '/main',
        component: 'account'
      })
      .state('app.register', {
        url: '/register',
        component: 'register'
      })
      //$urlRouterProvider.otherwise('/auth/login');
      $urlRouterProvider.otherwise('/app/main');
  });
