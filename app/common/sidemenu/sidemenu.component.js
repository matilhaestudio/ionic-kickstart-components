angular
  .module('common', [
    'ui.router',
    //'angular-loading-bar'
  ])
  // .run(function ($transitions, cfpLoadingBar) {
  //   $transitions.onStart({}, cfpLoadingBar.start);
  //   $transitions.onSuccess({}, cfpLoadingBar.complete);
  // });


var sidemenu = {
  templateUrl: 'sidemenu/menu.html',
};

angular
  .module('common')
  //.component('sidemenu', sidemenu)
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'sidemenu/menu.html'
        //component: 'sidemenu'
      })
        .state('main.list', {
          url: '/list',
          views: {
            'pageContent': {
              templateUrl: 'sidemenu/list.html'
            }
          }
        })
        .state('main.listDetail', {
          url: '/list/detail',
          views: {
            'pageContent': {
              templateUrl: 'sidemenu/list-detail.html'
            }
          }
        })
        .state('main.debug', {
          url: '/debug',
          views: {
            'pageContent': {
              templateUrl: 'sidemenu/debug.html'
            }
          }
        });
  });

// var login = {
//   templateUrl: './login.html',
//   controller: 'LoginController'
// };

// angular
//   .module('components.auth')
//   .component('login', login)
//   .config(function ($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('auth', {
//         redirectTo: 'auth.login',
//         url: '/auth',
//         template: '<div ui-view></div>'
//       })
//       .state('auth.login', {
//         url: '/login',
//         component: 'login'
//       });
//     $urlRouterProvider.otherwise('/auth/login');
//   });