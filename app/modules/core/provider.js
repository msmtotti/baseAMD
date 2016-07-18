define(function(){

  'use strict';

  routehelperConfig.$inject = ["$routeProvider"];

  function routehelperConfig($routeProvider) {
      /* jshint validthis:true */
      this.config = {
      };

      this.$get = function() {
          return {
              config: this.config
          };
      };
  }

  return routehelperConfig;

});
