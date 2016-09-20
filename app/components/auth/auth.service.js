'use strict';

function AuthService ($firebaseAuth, $cordovaFacebook, $http) {
  // var auth = $firebaseAuth();
  var usersRef = new Firebase("https://boilerplate-matilha.firebaseio.com/users");
  var auth = $firebaseAuth(usersRef);
  var authData = null;

  function storeAuthData (response) {
    authData = response;
    return authData;
  }
  function onSignIn (user) {
    authData = user;
    return auth.$requireSignIn();
  }
  function clearAuthData () {
    authData = null;
  }
  function facebookLogin () {
    return usersRef.authWithOAuthPopup("facebook")
  }
  function googleLogin () {
    return usersRef.authWithOAuthPopup("google")
  }
  this.facebookLogin = function () {
    return facebookLogin();
  };
  this.getFacebookInformations = function (acessToken) {
    return getFacebookInformations(acessToken);
  };
  this.googleLogin = function () {
    return googleLogin();
  };
  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.logout = function () {
    window.localStorage.removeItem('logged');
    return usersRef
      .unauth()
      .then(clearAuthData);
  };
  this.requireAuthentication = function () {
    return auth
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function () {
    return !!authData;
  };
  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
