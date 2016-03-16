'use strict';
//**
// /* @ngdoc function
// * @name capstoneApp.controller:MainCtrl
// * @description
// * # MainCtrl
// * Controller of the capstoneApp
//*/

angular.module('capstoneApp')
  .controller('MainCtrl', function($scope,$rootScope,flickr){
    $scope.flickrData = flickr.query();
    $scope.flickrData.$promise.then(function(data){
      $scope.latLng = [];
      for(var i=0;i<data.photos.photo.length; i++){
          //set up map markers
          if (data.photos.photo[i].latitude === 0 && data.photos.photo[i].longitude === 0) {
            continue;
          } else {
            var pic = {
              pos: [data.photos.photo[i].latitude, data.photos.photo[i].longitude],
              name: data.photos.photo[i].title
            };
            $scope.latLng.push(pic);
          }
      }
      $rootScope.latLng = $scope.latLng;
    });
  });
