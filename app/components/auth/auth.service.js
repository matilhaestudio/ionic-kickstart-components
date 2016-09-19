'use strict';

function AuthService ($firebaseAuth, $cordovaFacebook, $http) {
  var auth = $firebaseAuth();
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
    return $cordovaFacebook.login(["public_profile", "email"], {redirect_uri: "http://localhost:8000/#/app/main"})
  }
  function getFacebookInformations (acessToken) {
    return $http.get("https://graph.facebook.com/v2.2/me", {
      params: {
        access_token: acessToken,
        fields: "name, email, gender, location, picture",
        format: "json"
      }
    })
  };
  this.facebookLogin = function () {
    return facebookLogin();
  };
  this.getFacebookInformations = function (acessToken) {
    return getFacebookInformations(acessToken);
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
    return auth
      .$signOut()
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
