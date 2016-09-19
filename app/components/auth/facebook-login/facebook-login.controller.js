'use strict';

function FacebookLoginController (AuthService, $cordovaFacebook, $state, $http) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  };
  ctrl.submitForm = function () {
    AuthService.facebookLogin()
      .then(function(data){
        window.localStorage.setItem('logged', true);
        ctrl.getFacebookInformations(data.authResponse.accessToken);
        $state.go('app.main');
      }, function(error){
        console.log(error);
        ctrl.error = "Error"
      });
  };
  ctrl.getFacebookInformations = function(accessToken) {
    AuthService.getFacebookInformations(accessToken)
      .then(function(result) {
          var name = result.data.name;
          var gender = result.data.gender;
          var picture = result.data.picture;

          console.log(result);
      }, function(error) {
          alert("Error: " + error);
      });
  }
}

angular
  .module('components.auth')
  .controller('FacebookLoginController', FacebookLoginController);
