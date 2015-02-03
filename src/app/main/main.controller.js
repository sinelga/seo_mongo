'use strict';

angular.module('4FiFipornoDesk')
  .controller('MainCtrl', function ($scope,$resource) {
	  
		var Blog = $resource("http://104.236.237.125\\:9000/blogs/:id", {
			id : '@id'
		}, {});
		
		$scope.blogs = Blog.query();
	  
	  

  });
