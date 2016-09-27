'use strict'
function ShareButtonController($cordovaSocialSharing) {
  var ctrl = this;

  var options = {
    message: 'Default message',
    url: 'http://matilhaestud.io'
  }

  var onSuccess = function(result) {
    console.log(result);
    alert('Sucess')
  }

  var onError = function(msg) {
    console.log(msg);
    alert('Error')
  }

  ctrl.$onChanges = function(changes) {
    if (changes.message) {
      options.message = changes.message.currentValue
    } else if (changes.url) {
      options.url = changes.url.currentValue
    }
  }

  ctrl.share = function () {
    $cordovaSocialSharing.shareWithOptions(options, onSuccess, onError);
  }
}

var shareButton = {
  bindings: {
    url: '<',
    message: '<'
  },
  controller: ShareButtonController,
  templateUrl: './share-button.html'
}

angular
  .module('components.buttons')
  .component('shareButton', shareButton);
