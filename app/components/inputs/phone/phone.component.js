var inputPhone = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@'
  },
  templateUrl: './phone.html'
};

angular
  .module('components.inputs')
  .component('inputPhone', inputPhone);
