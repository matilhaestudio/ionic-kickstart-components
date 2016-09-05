var facebookLogin = {
  bindings: {
    user: '<',
    // button: '@',
    // message: '@',
    onSubmit: '&'
  },
  templateUrl: './facebook-login.html',
  controller: 'FacebookLoginController'
};

angular
  .module('components.auth')
  .component('facebookLogin', facebookLogin);
