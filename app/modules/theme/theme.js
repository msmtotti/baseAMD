define(['modules/theme/controller'],function(ThemeCtrl){
  (function() {
      'use strict';
      angular
          .module('theme', [])
          .controller('ThemeCtrl', ThemeCtrl);
  })();

  (function() {
    'use strict';
    angular
      .module('theme')
      .run(runName);

    /* @ngInject */
    function runName(routehelper) {
      routehelper(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/theme',
                config: {
                    templateUrl: 'app/modules/theme/views/uno.html',
                    controller: 'ThemeCtrl',
                    controllerAs: 'vm',
                    title: 'Theme',
                }
            }
        ];
    }

  })();

});
