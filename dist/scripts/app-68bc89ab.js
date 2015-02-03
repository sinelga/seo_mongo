"use strict";angular.module("4FiFipornoDesk",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("archive",{url:"/q",templateUrl:"app/archive/archive.html",controller:"ArchiveCtrl"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutCtrl"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactCtrl"}),e.otherwise("/")}]),angular.module("4FiFipornoDesk").controller("NavbarCtrl",["$scope","$state",function(t,e){t.date=new Date,t.gohome=function(){e.go("home")},t.goabout=function(){e.go("about")},t.gocontact=function(){e.go("contact")}}]),angular.module("4FiFipornoDesk").controller("MainCtrl",["$scope","$resource",function(t,e){var n=e("http://104.236.237.125\\:9000/blogs/:id",{id:"@id"},{});t.blogs=n.query()}]),angular.module("4FiFipornoDesk").controller("ContactCtrl",["$scope",function(){}]),angular.module("4FiFipornoDesk").controller("ArchiveCtrl",["$scope","$resource",function(t,e){var n=e("http://104.236.237.125\\:9000/blogs/:id",{id:"@id"},{});t.selected=null,t.edit=!1;var l=!1,a=!1;t.blogs=n.query(),t.get=function(e){n.get({id:e.id},function(e){t.selected=e})},t.add=function(){t.edit=!0,a=!0,t.blog=t.selected},t.update=function(e){t.edit=!0,t.blog=e,l=!0},t.insert=function(e){if(a===!0){a=!1;var i=new n;i.title=e.title,i.author=e.author,i.contents=e.contents,i.permanentlink=e.permanentlink,i.imglink=e.imglink,i.extlink=e.extlink,i.keywords=e.keywords,i.tags=e.tags,i.$save(function(){t.blogs=n.query(),t.edit=!1})}else if(l===!0){l=!1;var o=e.id;e.$save(function(){t.edit=!1,t.blogs=n.query(function(){n.get({id:o},function(e){t.selected=e})})})}},t.remove=function(){t.selected.$delete(function(){t.blogs=n.query(),t.selected=null})},t.cancel=function(){t.edit=!1,t.selected=null,l=!1,a=!1}}]),angular.module("4FiFipornoDesk").controller("AboutCtrl",["$scope",function(){}]),angular.module("4FiFipornoDesk").run(["$templateCache",function(t){t.put("app/about/about.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><h1>Under Construction</h1>"),t.put("app/archive/archive.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron"><div class="row"><div class="col-sm-10"><h1>My Blog</h1></div><div class="col-sm-2 well"><p ng-show="selected"><button class="btn btn-primary pull-right" ng-click="add()"><i class="fa fa-plus"></i> Add Blog</button></p><br><br><p ng-show="selected"><button class="btn btn-primary pull-right" ng-click="update(selected)"><i class="fa fa-pencil"></i> Update this blog</button></p><p ng-show="selected"><button class="btn btn-danger pull-right" ng-show="selected" ng-click="remove(selected)"><i class="fa fa-trash-o"></i> Remove this blog</button></p><p></p></div></div></div><div ng-show="!edit" class="ng-hide"><div class="row"><div class="col-sm-3 well"><h3>Blogs</h3><ul class="nav nav-pills nav-stacked"><li ng-class="{active: b.title == selected.title}" ng-repeat="b in blogs"><a href="" ng-click="get(b)">{{b.title}}</a></li></ul></div><div class="col-sm-6" ng-show="selected"><h2>{{selected.title}}</h2><dl class="dl-horizontal"><dt>Author:</dt><dd>{{selected.author}}</dd><dt>Pubdate:</dt><dd>{{selected.pubdate | date:\'medium\'}}</dd><dt>Contents:</dt><dd>{{selected.contents}}</dd><dt>Permanentlink:</dt><dd>{{selected.permanentlink}}</dd><dt>ImgLink:</dt><dd>{{selected.imglink}}</dd><dt>ExtLink:</dt><dd>{{selected.extlink}}</dd><dt>Keywords:</dt><dd>{{selected.keywords}}</dd><dt>Tags:</dt><dd>{{selected.tags}}</dd></dl></div></div></div><div ng-if="edit == true"><form style="margin-left:15px">Title: <input type="text" ng-model="blog.title"><br>Author : <input type="text" ng-model="blog.author"><br><textarea style="width:500px" ng-model="blog.contents"></textarea><br>Permanentlink: <input type="text" style="width:500px" ng-model="blog.permanentlink"><br>Imglink: <input type="text" style="width:500px" ng-model="blog.imglink"><br>Extlink: <input type="text" style="width:500px" ng-model="blog.extlink"><br>Keywords: <input type="text" style="width:500px" ng-model="blog.keywords"><br>Tags: <input type="text" style="width:500px" ng-model="blog.tags"><br><br><button class="btn btn-danger" ng-click="insert(blog)"><i class="fa fa-trash-o"></i> Submit</button> <button class="btn btn-primary" ng-click="cancel()"><i class="fa fa-pencil"></i> Cancel</button></form></div>'),t.put("app/contact/contact.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><h1>Under Construction</h1>"),t.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p></div><div class="container"><div class="media" ng-repeat="b in blogs"><div class="media-left"><a href="#"><img alt="" ng-src="{{b.imglink}}"></a></div><div class="media-body"><h4 class="media-heading">{{b.pubdate |date:\'medium\'}}</h4><h3>{{b.title}}</h3>{{b.contents}}</div></div></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr></div>'),t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><span class="glyphicon glyphicon-home"></span></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-click="gohome()">Home</a></li><li><a ng-click="goabout()">About</a></li><li><a ng-click="gocontact()">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li></li></ul></div></div></nav>')}]);