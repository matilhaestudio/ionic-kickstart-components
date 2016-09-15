angular
  .module('common', [
    'ui.router',
    'angular-loading-bar',
    'common.tabsmenuapp',
    'common.sidemenuapp'
  ])
  .run(function ($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  });