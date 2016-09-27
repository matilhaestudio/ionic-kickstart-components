var inputEmail = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@'
  },
  templateUrl: './email.html'
};

angular
  .module('components.inputs')
  .component('inputEmail', inputEmail);
