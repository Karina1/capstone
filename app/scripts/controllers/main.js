'use strict';

// /**
//  * @ngdoc function
//  * @name capstoneApp.controller:AboutCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the capstoneApp
//  */
      angular.module('capstoneApp')
        .controller('MainCtrl', function ($scope, flickr) {
          $scope.myPicture = "images/massena.jpg",
          $scope.flickrQuery = function(){
            $scope.picturesId = flickr.query({
              tag: $scope.keyword
            });
            console.log($scope.picturesId);
            // $scope.pictures = flickr.query({
            //   photoId: $scope.picturesId.photos.photo[0].id
            // });
            // console.log($scope.pictures);
          };
        });

        function initMap() {
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
            center: {lat: 43.460, lng: 7.28},
            zoom: 8
          });
        }
