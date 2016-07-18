define(['modules/theme/controller',
        'modules/theme/directive/calculadora',
       ],function(ThemeCtrl, calculadora){
  (function() {
      'use strict';
      angular
        .module('theme', [])
        .controller('ThemeCtrl', ThemeCtrl)
        .directive('calculadora', calculadora);
  })();

});
