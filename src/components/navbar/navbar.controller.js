'use strict';

angular.module('4FiFipornoDesk')
  .controller('NavbarCtrl', function ($scope,$state) {
    $scope.date = new Date();
    
    $scope.gohome = function() {
    	
    	$state.go("home");
    }
    $scope.goabout = function() {
    	
    	$state.go("about");
    }
    $scope.gocontact = function() {
    	
    	$state.go("contact");
    } 
    
  });
