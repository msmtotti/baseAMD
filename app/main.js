require.config({
  paths: {
    'angular': '/bower_components/angular/angular',
    'angular-route': '/bower_components/angular-route/angular-route',
    'jquery':  '/bower_components/jquery/dist/jquery',
    'core': 'modules/core/core',
    'theme': 'modules/theme/theme',
    'user': 'modules/user/user',
  },

  shim: {
    'angular': {
      deps: ['jquery']
    },
    'angular-route': {
      deps: ['angular']
    },
    'core': {
      deps: ['angular-route', 'theme', 'user']
    },
    'theme': {
      deps: ['angular-route']
    },
    'user':{
      deps: ['angular-route']
    }
  }
});

require(['core'], function(){
  angular.bootstrap(document, ['core']);
});
