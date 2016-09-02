angular
  .module('components', [
    'ui.router',
    //'angular-loading-bar'
  ])

var test = {
  templateUrl: 'components/test.html'
};

angular
  .module('components')
  .component('test', test)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main.test', {
        url: '/test',
        views: {
            'pageContent': {
               template: '<test></test>'
            }
          }
        
      });
  });


