'use strict';

function AuthService ($firebaseAuth, $cordovaFacebook, $http, $firebaseArray, $firebaseObject) {
  var ref = new Firebase("https://boilerplate-matilha.firebaseio.com/");
  var auth = $firebaseAuth(ref);
  var authData;
  ref.onAuth(authDataCallback);

  ref.onAuth(function(authData) {
    if (authData) {
      var userInformation = getUserInformation(authData)
      // save the user's profile into the database so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      ref.child("users").child(authData.uid).set({
        provider: authData.provider,
        name: userInformation.name,
        email: userInformation.email || 'no email'
      });
    }
  });
  // find a suitable name based on the meta info given by each provider
  function getUserInformation(authData) {
    switch(authData.provider) {
      case 'password':
        return {
          name: authData.password.email.replace(/@.*/, ''),
          email: authData.password.email
        }
      case 'facebook':
        return {
          name: authData.facebook.displayName,
          email: authData.facebook.email
        }
      case 'google':
        return {
          name: authData.google.displayName,
          email: authData.google.email
        }
    }
  };
  function authDataCallback(authData) {
    if (authData) {
      console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
      console.log("User is logged out");
    }
  };
  function storeAuthData (response) {
    authData = response;
    return authData;
  };
  function onSignIn (user) {
    authData = user;
    return auth.$requireSignIn();
  };
  function clearAuthData () {
    authData = null;
  };
  function facebookLogin () {
    return ref.authWithOAuthPopup("facebook")
  };
  function googleLogin () {
    return ref.authWithOAuthPopup("google", function(error, authData) {}, {
      remember: "sessionOnly",
      scope: "email"
    });
  };
  this.facebookLogin = function () {
    return facebookLogin();
  };
  this.googleLogin = function () {
    return googleLogin();
  };
  this.login = function (user) {
    return ref
      .authWithPassword({email: user.email, password: user.password})
  };
  this.register = function (user) {
    return ref
      .createUser({email: user.email, password: user.password})
      .then(function(authData) {
        this.login(user)
      }.bind(this));
  };
  this.logout = function () {
    window.localStorage.removeItem('logged');
    return ref
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
