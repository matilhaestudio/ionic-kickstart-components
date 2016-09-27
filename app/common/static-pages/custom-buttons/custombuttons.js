var custombuttons = {
  templateUrl: './custombuttons.html',
  controller: function () {
    var ctrl = this;

    ctrl.onClick = function () {
      console.log('Trigger works')
    }
  }
};

angular
  .module('common.staticpages')
  .component('custombuttons', custombuttons);
