
define([], function(){

  (function() {
    'use strict';

    angular
      .module('core', ['ngRoute','theme', 'user'])
      .config(config);

    config.$inject = ["$routeProvider"];
    function config($routeProvider){


      $routeProvider
        .when('/theme', {
          controller: 'ThemeCtrl',
          controllerAs: 'vm',
          templateUrl: 'app2/modules/theme/views/uno.html',
        })
        .when('/user', {
          controller: 'UserCtrl',
          controllerAs: 'vm',
          templateUrl: 'app2/modules/user/views/uno.html',
        })
        .otherwise("theme");
    }
  })();

});
