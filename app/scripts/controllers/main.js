'use strict';

// /**
//  * @ngdoc function
//  * @name capstoneApp.controller:AboutCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the capstoneApp
//  */
// angular.module('capstoneApp')
//   .controller('MainCtrl', function ($scope) {
//     alert("I am an alert box!");
    //
    // $scope.citiesFound = CitySearch.find();
    // $scope.storage = $localStorage;

    // $scope.findCities = function(){
    //     $scope.citiesFound = CitySearch.find({
    //         query: $scope.location
    //     });
    //     $scope.searchQuery = $scope.location;
    // };
  // });




  //   var app = angular.module('capstoneApp', []);
  //   app.controller('MainCtrl',['$scope',function($scope){
  //     alert('success');
  //
  //
  //       }]);
  //
  // })();

  //
  angular.module('capstoneApp')
    .controller('MainCtrl', ['$scope',function($scope,flickr, getphoto, latlong) {


              $scope.flickrData = flickr.query();
              $scope.flickrData.$promise.then(function(data){
                for(i=0;i<=data.photos.photo.length; i++){
                  //set up map markers
          //
          // $scope.searchphot = function(){
          //   $scope.picturesId = searchphot.query({
          //     tag: $scope.keyword
          //   });
          //   console.log($scope.picturesId);
          //   };
          //   $scope.getphot = function(){
          //     $scope.picturesId = getphot.query({
          //       photoId: $scope.photo_id
          //     });
          //     console.log($scope.picturesId);
          //   };
          //     $scope.getLoc = function(){
          //       $scope.picturesId = getLoc.query({
          //         photoId: $scope.photo_id
          //       });
          //       console.log($scope.picturesId);

            // $scope.pictures = flickr.query({
            //   photoId: $scope.picturesId.photos.photo[0].id
            // });
            // console.log($scope.pictures);
        //   };
        // });





            // $scope.flickr= flickr.query();
            //
            // $scope.refreshFlickr = function(){
            //   $scope.flickr = flickr.query({
            //     photoId: $scope.photoId
            //
            //   });
            // };

            //   alert('success');
            // $scope.picturesId();
              // $scope.flickr = get.photoId;
              // tag: $scope.keyword
                // });
              //   console.log($scope.picturesId);
              //   $scope.picturesId = getphoto.query({
              //   //       photoId: $scope.photo_id
              //   $scope.getLoc = function(){
              //         $scope.picturesId = getLoc.query({
              //           photoId: $scope.photo_id
              //         });
              //         console.log($scope.picturesId);
              //   };
              //   $scope.refresh();
              // });
              // $scope.refresh = function(){
        //     );
        //
        // });
