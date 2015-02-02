'use strict';	

angular.module('4FiFipornoDesk').controller("ArchiveCtrl", ["$scope", "$resource", function($scope, $resource){
		// I designed the backend to play nicely with angularjs so this is all the
		// setup we need to do all of the ususal operations.
//		$httpProvider.defaults.headers.set = { 'My-Header' : 'value' }
	
		var Book = $resource("http://localhost\\:9000/books/:id", {id: '@id'}, {
			
			'query1': {method: 'GET',
				isArray: true,
				
				headers: { 'something': 'anything' }
			}
			
			
		});

		$scope.selected = null;
		$scope.books = Book.query();


		$scope.get = function(book){
			// Passing parameters to Book calls will become arguments if
			// we haven't defined it as part of the path (we did with id)
			Book.get({id: book.id}, function(data) {
	
				$scope.selected =data;
			});
						
		};

		$scope.add = function() {
			// I was lazy with the user input.
			var title = prompt("Enter the book's title.");
			if(title == null){
				return;
			}
			var author = prompt("Enter the book's author.");
			if(author == null){
				return;
			}
			// Creating a blank book object means you can still $save
			var newBook = new Book();
			newBook.title = title;
			newBook.author = author;
			newBook.$save(function(){
				$scope.books = Book.query();
//				$scope.selected =newBook;
				
			});
			

		};

		$scope.update = function(book) {

			var title = prompt("Enter a new title", book.title);
			if(title == null) {
				return;
			}
			var author = prompt("Enter a new author", book.author);
			if(author == null) {
				return;
			}
			book.title = title;
			book.author = author;
			// Noticed I never created a new Book()

			var id = book.id;
						
			book.$save(function(){
				$scope.books = Book.query();
												
				var updatedBook = new Book();
				updatedBook.title = title;
				updatedBook.author = author;
				updatedBook.id =id;
				
				$scope.selected =updatedBook; 
				
				
			});

		};
		
		$scope.remove = function(book){
			
			$scope.selected.$delete(function(){
				$scope.books = Book.query();
				$scope.selected = null;
			})
		}
		
	}]);