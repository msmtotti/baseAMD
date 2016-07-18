define(function(){

  'use strict';

  routehelper.$inject = ['$rootScope', 'routehelperConfig'];

  /* @ngInject */

  function routehelper($rootScope, routehelperConfig) {
    var routes = [];
    var $routeProvider = routehelperConfig.config.$routeProvider;

    function configureRoutes(routes) {
      routes.forEach(function(route) {
        $routeProvider.when(route.url, route.config);
      });
      $routeProvider.otherwise({redirectTo: '/'});
    }

    (function updateDocTitle() {
      $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        var title = routehelperConfig.config.docTitle + ' ' + (current.title || '');
        $rootScope.title = title;
      });
    })();

    return configureRoutes;
  }

  return routehelper;
});
