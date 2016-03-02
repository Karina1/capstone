"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstoneApp").controller("AboutCtrl",["$scope","flickr",function(a,b){a.search=function(){a.picturesId=b.query({tag:a.keyword}),console.log(a.picturesId)}}]),angular.module("capstoneApp").factory("flickr",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f90b0fdc1b04e6c99b933cddf84d6560&tags=treehouse&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{tags:"treehouse"},isArray:!1}})}]),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="panel panel-success"> <div class="panel-heading"> <h3 class="panel-title">What is this page about?</h3> </div> <div class="panel-body"> All about math! </div> </div> <input placeholder="search here" ng-model="keyword"> <button class="btn btn-primary" ng-click="search()">SEARCH</button> <div class="jumbotron"> <h1>MATHEMATICAL!!</h1> <p>Let\'s add these numbers!</p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div> <br> <p><a class="btn btn-primary btn-lg" href="#" role="button">Splended!</a></p> </div>'),a.put("views/contact.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Hello hello hello. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div> <div class="jumbotron"> <h1>MATHEMATICAL!!</h1> <p>Let\'s add these numbers!</p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div> <br> <p><a class="btn btn-primary btn-lg" href="#/" role="button">Splendeed!</a></p> </div>')}]);