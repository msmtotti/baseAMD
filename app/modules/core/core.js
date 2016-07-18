
define(['modules/core/configure',
        'modules/core/provider',
        'modules/core/factory'], function(configure,routehelperConfig, routehelper){

  (function() {
    'use strict';

    angular
      .module('core', ['ngRoute','theme', 'user'])
      .provider('routehelperConfig', routehelperConfig)
      .config(configure)
      .factory('routehelper', routehelper);
  })();

});
