'use strict';

function AccountController (appInformation) {
  var ctrl = this;

  ctrl.version = appInformation.version
}

angular.module('components.account').controller('AccountController', AccountController);
