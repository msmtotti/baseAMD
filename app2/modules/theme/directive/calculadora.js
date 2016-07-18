define(function(){
  'use strict';

  /* @ngInject */
  function calculadora() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app2/modules/theme/directive/calculadora.html',
      scope: {
      },
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  return calculadora;
});
