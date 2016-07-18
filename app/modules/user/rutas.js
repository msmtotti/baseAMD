define(function(){

  (function() {
    'user strict';
    runName.$inject = ["routehelper"];

    /* @ngInject */
    function runName(routehelper) {
      routehelper(getRoutes());
    }

    function getRoutes() {
      return [
        {
          url: '/user',
          config: {
            templateUrl: 'app/modules/user/views/uno.html',
            controller: 'UserCtrl',
            controllerAs: 'vm',
            title: 'Usuario',
          }
        }
      ];
    }

    return getRoutes;
  })();

});
