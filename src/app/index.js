'use strict';

angular.module('4FiFipornoDesk', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).state('archive', {
          url: '/q',
          templateUrl: 'app/archive/archive.html',
          controller: 'ArchiveCtrl'
        });

    $urlRouterProvider.otherwise('/');
    
//  angular.module('4FiFipornoDesk').run(function($http){
//	  $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
//   });
    
  })
;
