'use strict';

angular.module('4FiFipornoDesk')
  .controller('NavbarCtrl', function ($scope,$state) {
    
	  $scope.statename =  $state.current.name
	  
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
