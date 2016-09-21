var inputCep = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@'
  },
  templateUrl: './cep.html'
};

angular
  .module('components.inputs')
  .component('inputCep', inputCep);
