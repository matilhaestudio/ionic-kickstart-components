var counter = {
  bindings: {
    count: '='
  },
  controller: 'CounterController',
  templateUrl: 'components/counter/counter.html'
}

angular.module('components.counter').component('counter', counter)
