define(function(){
  'use strict';

  configure.$inject = ["$routeProvider", "routehelperConfigProvider"];

  /* @ngInject */
  function configure($routeProvider, routehelperConfigProvider) {
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.docTitle = 'Kueski 2.0: ';
  }

  return configure;

});
