define(function(){

  (function() {
    'use strict';
    UserCtrl.$inject = [];

    /* @ngInject */
    function UserCtrl() {
      var vm = this;
      vm.nombre = "José";

      activate();

      function activate() {
        vm.nombre = "Pedrinhio";
      }
    }

    return UserCtrl;
  })();
});
