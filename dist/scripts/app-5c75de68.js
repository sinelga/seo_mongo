"use strict";angular.module("4FiFipornoDesk",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("archive",{url:"/q",templateUrl:"app/archive/archive.html",controller:"ArchiveCtrl"}),e.otherwise("/")}]),angular.module("4FiFipornoDesk").controller("MainCtrl",["$scope",function(t){t.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(t.awesomeThings,function(t){t.rank=Math.random()})}]),angular.module("4FiFipornoDesk").controller("ArchiveCtrl",["$scope","$resource",function(t,e){var a=e("http://localhost\\:9000/books/:id",{id:"@id"},{query1:{method:"GET",isArray:!0,headers:{something:"anything"}}});t.selected=null,t.books=a.query(),t.get=function(e){a.get({id:e.id},function(e){t.selected=e})},t.add=function(){var e=prompt("Enter the book's title.");if(null!=e){var o=prompt("Enter the book's author.");if(null!=o){var r=new a;r.title=e,r.author=o,r.$save(function(){t.books=a.query()})}}},t.update=function(e){var o=prompt("Enter a new title",e.title);if(null!=o){var r=prompt("Enter a new author",e.author);if(null!=r){e.title=o,e.author=r;var i=e.id;e.$save(function(){t.books=a.query();var e=new a;e.title=o,e.author=r,e.id=i,t.selected=e})}}},t.remove=function(){t.selected.$delete(function(){t.books=a.query(),t.selected=null})}}]),angular.module("4FiFipornoDesk").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),angular.module("4FiFipornoDesk").run(["$templateCache",function(t){t.put("app/archive/archive.html",'<div class="jumbotron"><button class="btn btn-primary pull-right" ng-click="add()"><i class="fa fa-plus"></i> Add book</button><h1>My Bookshelf</h1></div><div class="container-fluid"><div class="row"><div class="col-sm-3 well"><h3>Books</h3><ul class="nav nav-pills nav-stacked"><li ng-class="{active: b.title == selected.title}" ng-repeat="b in books"><a href="" ng-click="get(b)">{{b.title}}</a></li></ul></div><div class="col-sm-6" ng-show="selected"><h2>{{selected.title}}</h2><dl class="dl-horizontal"><dt>Author:</dt><dd>{{selected.author}}</dd></dl></div><div class="col-sm-3" ng-show="selected"><button class="btn btn-primary form-control" ng-click="update(selected)"><i class="fa fa-pencil"></i> Update this book</button> <button class="btn btn-danger form-control" ng-click="remove(selected)"><i class="fa fa-trash-o"></i> Remove this book</button></div></div></div>'),t.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>'),t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);