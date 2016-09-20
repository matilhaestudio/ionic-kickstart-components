var sideMenuApp = {
  templateUrl: './menu.html',
  controller: function($state, AuthService) {
    var ctrl = this;

    ctrl.logout = function() {
      AuthService.logout().then(function () {
        $state.go('auth.login');
      });
    }
  }
};

angular
  .module('common.sidemenuapp')
  .component('sideMenuApp', sideMenuApp);
