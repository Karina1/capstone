'use strict';
                  ​
// /*
//  * @ngdoc function
//  * @name capstoneApp.controller:AboutCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the capstoneApp
//  */
                  ​
              angular.module('capstoneApp')
                .controller('MainCtrl', ['$scope',function($scope,flickr) {
                    $scope.flickrData = flickr.query();
                    $scope.flickrData.$promise.then(function(data){
                      for(i=0;i<=data.photos.photo.length; i++){
                        //set up map markers
                      }
                    });
                });
