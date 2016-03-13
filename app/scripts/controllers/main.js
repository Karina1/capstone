'use strict';
//**
// /* @ngdoc function
// * @name capstoneApp.controller:MainCtrl
// * @description
// * # MainCtrl
// * Controller of the capstoneApp
//*/

angular.module('capstoneApp')
  .controller('MainCtrl', function($scope,flickr){
    $scope.flickrData = flickr.query();
    $scope.flickrData.$promise.then(function(data){
      for(var i=0;i<=data.photos.photo.length; i++){
        //set up map markers
      }
    });
  });
