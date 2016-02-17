'use strict';
/**
 * @ngdoc function
 * @name capstoneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the capstoneApp
 */
angular.module('capstoneApp')
  .controller('AboutCtrl', function ($scope, flickr) {
    $scope.search = function(){
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
