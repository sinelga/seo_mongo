'use strict';

angular.module('4FiFipornoDesk').controller("ArchiveCtrl",
		[ "$scope", "$resource", function($scope, $resource) {

			var Blog = $resource("http://104.236.237.125\\:9000/blogs/:id", {
				id : '@id'
			}, {});

			$scope.selected = null;
			$scope.edit = false;
			var update = false;
			var add = false;
			$scope.blogs = Blog.query();
			

			$scope.get = function(blog) {
				// Passing parameters to Book calls will become arguments if
				// we haven't defined it as part of the path (we did with id)
				Blog.get({
					id : blog.id
				}, function(data) {
										
					$scope.selected = data;
				});

			};

			$scope.add = function() {
				
				$scope.edit =true;
				add = true;
				$scope.blog = $scope.selected;

			};
			
			$scope.update = function(blog) {

				$scope.edit =true;				
				$scope.blog = blog;
				update = true;
				
			};
			
						
			$scope.insert = function(blog) {

				
				if (add === true) {
					
					add = false;
				
					var newBlog = new Blog();
				
					newBlog.title = blog.title;
					newBlog.author = blog.author;
					newBlog.contents = blog.contents;
					newBlog.permanentlink  = blog.permanentlink;
					newBlog.imglink  = blog.imglink;
					newBlog.extlink = blog.extlink;
					newBlog.keywords  = blog.keywords;
					newBlog.tags = blog.tags;

				
					newBlog.$save(function(){
						$scope.blogs = Blog.query();
						$scope.edit =false;
						
						
					});
				
			} else if (update === true) {
				
				update = false;
				var id_selected = blog.id;
				
				blog.$save(function() {
					
					$scope.edit =false;
					$scope.blogs = Blog.query(function() {
						
						
						Blog.get({
							id : id_selected
						}, function(data) {
												
							$scope.selected = data;
						});
						
							
					}
					);
					
									
				});				
				
			}
				
								
			};
			

			$scope.remove = function(blog) {

				$scope.selected.$delete(function() {
					$scope.blogs = Blog.query();
					$scope.selected = null;
				})
			}
			
			$scope.cancel= function() {
				
				$scope.edit =false;
				$scope.selected = null;
				update = false;
				add = false;
				
			}
			
			

		} ]);