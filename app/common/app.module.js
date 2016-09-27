angular
  .module('common', [
    'ui.router',
    'angular-loading-bar',
    'common.tabsmenuapp',
    'common.sidemenuapp',
    'common.staticpages'
  ])
  .run(function ($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  });
