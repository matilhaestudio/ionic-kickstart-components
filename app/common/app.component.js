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
      .state('app.contact', {
        url: '/contact',
        component: 'contact'
      })
      .state('app.faq', {
        url: '/faq',
        component: 'faq'
      })
      .state('app.policy', {
        url: '/policy',
        component: 'policy'
      })
      .state('app.terms', {
        url: '/terms',
        component: 'terms'
      })
      //$urlRouterProvider.otherwise('/auth/login');
      $urlRouterProvider.otherwise('/app/main');
  });
