define(function(){

  ThemeCtrl.$inject = [];

  /* @ngInject */
  function ThemeCtrl() {
      var vm = this;
      vm.nombre = "José";

      activate();

      function activate() {
        vm.nombre = "Miguel";
      }
  }

  return ThemeCtrl;

});
