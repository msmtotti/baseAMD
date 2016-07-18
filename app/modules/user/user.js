define(['modules/user/controller',
        'modules/user/rutas'],function(UserCtrl, rutas){
          
  (function() {
    'use strict';
    angular
      .module('user', [])
      .run(rutas)
      .controller('UserCtrl', UserCtrl);
  })();

});
