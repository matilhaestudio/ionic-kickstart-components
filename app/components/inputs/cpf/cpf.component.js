var inputCpf = {
  bindings: {
    placeholder: '@',
    label: '@',
    model: '=',
    required: '@'
  },
  templateUrl: './cpf.html'
};

angular
  .module('components.inputs')
  .component('inputCpf', inputCpf);
