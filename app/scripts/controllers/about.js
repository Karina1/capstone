// 'use strict';
//
//
// angular.module('capstoneApp')
//   .controller('AboutCtrl', function ($scope) {
//       $scope.backgroundStyle  = function(){
//
//       if ($scope.path() === '/'){
//         $scope.backgroundStyle = {background: 'black'};
//       } else {
//         $scope.backgroundStyle = {background: 'orange'};
//       }
//     };
//   });

angular.module('capstoneApp')
       .controller('AboutCtrl', function ($scope, flickr) {
         $scope.myPicture = "images/massena.jpg";

           // $scope.pictures = flickr.query({
           //   photoId: $scope.picturesId.photos.photo[0].id
           // });
           // console.log($scope.pictures);
       });
