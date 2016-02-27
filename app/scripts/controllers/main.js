
'use strict';
/**
 * @ngdoc function
 * @name capstoneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the capstoneApp
 */
angular.module('capstoneApp')
  .controller('MainCtrl', function ($scope, $routeParams, flickr) {

    $scope.myPicture = "images/massena.jpg";
    $scope.displayText = "Where in the world can I walk?";

    $scope.search = function(){
      $scope.picturesId = flickr.query({
        tag: $scope.keyword
      });
      console.log($scope.picturesId);

    // $scope.refreshFlickr = function(){
    //   $scope.picturesId = flickr.query({
    //     tag: $scope.keyword
    //     });
      // $scope.pictures = flickr.query({
      //   photoId: $scope.picturesId.photos.photo[0].id
      // });
      // console.log($scope.pictures);
    };
  });

// 'use strict';
// /**
//  * @ngdoc function
//  * @name capstoneApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the capstoneApp
//  */
// angular.module('capstoneApp')
//   .controller('MainCtrl', function () {
//       $scope.map = {
//               center: {
//                       latitude: 56.162939,
//                       longitude: 10.203921
//               },
//               zoom: 8
//       };
//   });

//   .controller('MainCtrl', function($scope, uiGmapGoogleMapApi) {
//     // Do stuff with your $scope.
//     // Note: Some of the directives require at least something to be defined originally!
//     // e.g. $scope.markers = []
//
//     // uiGmapGoogleMapApi is a promise.
//     // The "then" callback function provides the google.maps object.
//     uiGmapGoogleMapApi.then(function(maps) {
//
//     });
// });


//
//   $scope.markerList = {
//   },
// }
