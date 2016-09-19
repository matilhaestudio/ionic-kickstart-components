angular.module('root', [
  // load your modules here
  'ionic',
  'ngCordova',
  'common',
  'components',
  'templates'
]).config(function($cordovaFacebookProvider) {
  var appID = 864686546996436;
  var version = "v2.7";
  ionic.Platform.ready(function () {
    // facebookConnectPlugin.browserInit(appID, appVersion);
    $cordovaFacebookProvider.browserInit(appID, version);
  });
});
