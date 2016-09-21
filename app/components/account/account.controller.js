'use strict';

function AccountController (appInformation) {
  var ctrl = this;

  ctrl.version = appInformation.version;

  ctrl.cep = '';
  ctrl.cpf = '';
  ctrl.email = '';
  ctrl.phone = '';
  ctrl.enableNotifications = false;
}

angular.module('components.account').controller('AccountController', AccountController);
