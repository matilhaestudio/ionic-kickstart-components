var test = {
  templateUrl: 'components/test/test.html'
};

angular
  .module('components.test')
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


