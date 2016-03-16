"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/map",{templateUrl:"views/map.html",controller:"MapCtrl",controllerAs:"map"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",["$scope","$rootScope","flickr",function(a,b,c){a.flickrData=c.query(),a.flickrData.$promise.then(function(c){a.latLng=[];for(var d=0;d<c.photos.photo.length;d++)if(0!==c.photos.photo[d].latitude||0!==c.photos.photo[d].longitude){var e={pos:[c.photos.photo[d].latitude,c.photos.photo[d].longitude],name:c.photos.photo[d].title};a.latLng.push(e)}b.latLng=a.latLng})}]),angular.module("capstoneApp").controller("AboutCtrl",["$scope",function(a){var b=[{title:"Buchanan Street in Glasgow",url:"images/buchanan_glas.dec41c85.jpg"},{title:"Capilano Suspension Bridge in Vancouver",url:"images/capilanosusbridge.08ebd12c.jpg"},{title:"Cat Street in Tokyo",url:"images/catstreet_tokyo.0418b8a6.jpg"},{title:"Stroeget in Copenhagen",url:"images/cph2014.3ced1cfd.jpg"},{title:"Placa in Dubrovnik",url:"images/dubrovnik.18a948ed.jpg"},{title:"Fez",url:"images/fez.9b0ffde3.jpg"},{title:"Jinli in Chengdu",url:"images/jinli.jpg"},{title:"Cat Street in Tokyo",url:"images/catstreet_tokyo.0418b8a6.jpg"},{title:"Lynn Canyon Suspension Bridge in Vancouver",url:"images/lynncanyon_vanc.1559c0a8.jpg"},{title:"Jemna al Fna in Marrakech",url:"images/marrakech.6e82b22f.jpg"},{title:"Plaka in Athens",url:"images/plaka-athens.6b184704.jpg"},{title:"Plaka in Athens",url:"images/plaka.3d6ee23d.jpg"},{title:"Royal Mile in Edinburgh",url:"images/royalmile_edin.699eb1b0.jpg"},{title:"Passerelle de Simone de Beauvoir in Paris",url:"images/simonedebeauvoir.167f9e9c.jpg"},{title:"Place Massena in Nice",url:"images/massena.3a222cf1.jpg"},{title:"Place Massena in Nice",url:"images/massena-nice-1.d8b1beab.jpg"},{title:"Place Massena in Nice",url:"images/massena.3a222cf1.jpg"}];a.refreshFlickr=function(){a.featuredImage=b[Math.floor(Math.random()*b.length)]},a.refreshFlickr()}]),angular.module("capstoneApp").controller("MapCtrl",["$rootScope","NgMap",function(a,b){var c=this;c.setPositions=function(a){c.positions=angular.copy(a)},b.getMap().then(function(a){c.map=a}),c.setPositions(a.latLng)}]),angular.module("capstoneApp").factory("flickr",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f90b0fdc1b04e6c99b933cddf84d6560&tags=pedestrian+zone,pedestrian+bridge-portrait,footbridge,pedestrian+precinct&extras=geo,tags,url_m&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{tag:""},isArray:!1}})}]),angular.module("capstoneApp").factory("test",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("capstoneApp").factory("map1",["$resource",function(a){return a("https://maps.googleapis.com/maps/api/js?key=AIzaSyBFkHegIuqWVnuQh31Lz5zPYn9EQrK47hQ&callback=initMap",{},{query:{method:"GET",params:{tags:""},isArray:!1}})}]),angular.module("capstoneApp").factory("latlong",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=f90b0fdc1b04e6c99b933cddf84d6560&photo_id=:photoId&format=json&nojsoncallback=1",{},{query:{method:"GET",params:{photoId:""},isArray:!1}})}]),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- <html>\n<body> --> <div> <h2>Image of the Day<small>Pedestrian Zones<small></small></small></h2> <h3>Examples of global pedestrian-friendly places</h3> </div> <!-- <div ng-controller="AboutCtrl"> --> <img ng-src="{{featuredImage.url}}" class="massena" width="600" height="600" alt="Image of {{ featuredImage.title }}"> <p class="tBlock"> {{featuredImage.title}} </p>  <p><a class="btn btn-primary" ng-click="refreshFlickr()"> Another</a></p> <!-- </div> --> <div> <div class="flyout"> <button class="myzones"><a href="#/">Main</a></button> <button class="flyout-toggle"><a href="#/map">Map</a></button> <div class="flyout-content"></div> </div> <!-- navig\n\n\n\n          <!-- <p class="displayText">{{displayText}}</p>\n      </div> --> <!-- <p class="displayText">{{displayText}}</p> --> <!-- <a><img  ng-src="{{myPicture}}" class="massena" width=\'600\' height=\'600\'></a> --></div>'),a.put("views/main.html",'<!-- <html>\n<body> --> <div> <div class="flyout"> <button class="flyout-toggle"><a href="#/map">Map</a></button> <button class="myzones"><a href="#/about">About</a></button> <div class="flyout-content"></div> </div> <h2>Where in the world can I walk?</h2> <h3>Flickr images tagged with "pedestrian zone" or "pedestrian bridge" where people are walking right now</h3> <ul id="photos" ng-repeat="image in flickrData.photos.photo"> <!-- <li><a href="https://www.flickr.com/photos/"{{ photo.owner_name }}"/"><img src="{{ image.url_m }}" height="300" width="auto"/><div><h3>{{ image.title }}</h3></div></a></li> --> <li><a href="https://www.flickr.com/photos/{{image.owner}}/{{image.id}}"><img src="{{ image.url_m }}" height="300" width="auto"><div><h3>{{ image.title }}</h3></div></a></li> <!-- <br>\n  Lat: {{ image.lat }} Lon: {{ image.lon }}\n  <br>\n   Tags: {{ image.tags }} --> </ul> </div>'),a.put("views/map.html",'<!-- <html>\n<body> --><!-- <div id="map">\n  <h2>MAP OF PEDESTRIAN ZONE DATA</h2>\n  <h3>Mapping the coordinates of the most recent images tagged "pedestrian zone" <br> using data generated from a Flickr API</h3> --> <div> <div class="flyout"> <button class="myzones"><a href="#/about">About</a></button> <button class="flyout-toggle"><a href="#/">Main</a></button> <div class="flyout-content"></div> </div> ​<div ng-controller="MapCtrl as vm"> <ng-map zoom="8" center="[40.74, -74.18]" default-style="false" class="my-map"> <marker ng-repeat="p in vm.positions track by $index" id="custom-marker-{{$index}}" on-click="vm.map.showInfoWindow(\'foo\', \'custom-marker-\'+$index)" position="{{p.pos}}"> <!-- <div> --> <!-- position {{p.name}}: {{p.pos[0]}}, {{p.pos[1]}} --> <!-- <img src="images/massena.3a222cf1.jpg" width="10px" height="10px"/> --> <!-- </div> --> </marker> <!-- <custom-marker ng-repeat="image in flickrData.photos.photo track by $index"\n    id="custom-marker-{{$index}}"\n    on-click="showImage(\'custom-marker-\'+$index)"\n    position="[{{image.latitude}}, {{image.longitude}}]">\n    <div>\n      {{ image.title }}\n    </div>\n  </custom-marker> --> </ng-map> <!-- <div>\n    <info-window id="info" on-mouseover="vm.mouseover()">\n      <div ng-non-bindable="">\n        Lat: {{anchor.getPosition().lat()}}<br/>\n        Lng: {{anchor.getPosition().lng()}}<br/>\n      </div>\n    </info-window>\n  </div> --> <!-- <button ng-click="vm.setPositions(vm.positions1)">show positions 1</button> --> <!-- <button ng-click="vm.setPositions(vm.positions2)">show positions 2</button> --> <!-- <button ng-click="vm.selectNextCustomMarker()">select next marker</button> --> <!-- current position: {{vm.currentPosition}}<br/> --> <!-- vm.positions : {{vm.positions}} --> <!-- </div> --> <!-- <button ng-click="vm.setPositions(vm.positions1)">show positions 1</button>\n  <button ng-click="vm.setPositions(vm.positions2)">show positions 2</button>\n  <button ng-click="vm.selectNextCustomMarker()">select next marker</button>\n  current position: {{vm.currentPosition}}<br/>\n  vm.positions : {{vm.positions}} --></div></div>')}]);