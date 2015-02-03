'use strict';

angular.module('4FiFipornoDesk')
  .controller('MainCtrl', function ($scope,$resource) {
	  
		var Blog = $resource("http://localhost\\:9000/blogs/:id", {
			id : '@id'
		}, {});
		
		$scope.blogs = Blog.query();
	  
	  

  });
