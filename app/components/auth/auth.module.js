'use strict';

angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {

    var config = {
      apiKey: 'AIzaSyAWhBMQMGvrkD3nVgAlMr4yGMvrvS827jE',
      authDomain: 'matilha-boilerplate.firebaseapp.com',
      databaseURL: 'https://matilha-boilerplate.firebaseio.com',
      storageBucket: "matilha-boilerplate.appspot.com",
      messagingSenderId: "902812459557"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts',
        users: config.databaseURL + '/users'
      });

    firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app.main');
      }
    });
  });
