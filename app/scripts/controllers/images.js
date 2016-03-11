// angular.module('capstoneApp')
//   .controller('ImagesCtrl', function ($scope, flickr) {
//     $scope.flickrQuery = function(){
//       $scope.picturesId = flickr.query({
//         tag: $scope.keyword
//       });
//       console.log($scope.picturesId);
//       };
//         $scope.getPhotos = function(){
//           $scope.picturesId = flickr.query({
//             photoId: $scope.photo_id
//           });
//           console.log($scope.picturesId);
//         };
//         $scope.displayImages = function(){
//           $scope.picturesId = flickr.query({
//             photoId: $scope.photo_id
//           });
//           console.log($scope.picturesId);
//         };
//   });

// $(document).ready(function(){
// //Connects to the Flickr API and reads the results of the query into a JSON array. This query uses the 'flickr.people.getPublicPhotos' method to access all the photos in a particular person's user account. It passes the resultant JSON array of data to the 'displayImages1' function below.
// $.getJSON("http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=f90b0fdc1b04e6c99b933cddf84d6560&user_id=21679005@N07&format=json&jsoncallback=?", displayImages1);
// //This function actually does something with the data after it has been read in from the Flickr API.
// function displayImages1(data) {
//                      //Loop through the results in the JSON array of data. The 'data.photos.photo' bit is what you are trying to 'get at'. i.e. this loop looks at each photo in turn.
//                     $.each(data.photos.photo, function(i,item){
//
// 					//Reads in each photo id.
//                     var photoID = item.id;
//
// 					//Adds the photo id to the 'images1' div (created in the main body of this html page).
// 					$('#images1').append(photoID);
//
// 					//Gets the url for the image.
// 					var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
//
// 					//Uses this URL to creats a html 'img' tag.
// 					htmlString = '<img src="' + photoURL + '">';
//
// 					//Adds this image to the 'images1' div.
// 					$('#images1').append(htmlString);
//
// 					//Adds some basic formatting to seperate out the images.
// 					$('#images1').append("<br/><hr/><br/>");
//
// 					});
// }
// });
// </script>


  'use strict';

  /**
   * @ngdoc function
   * @name capstoneApp.controller:ImagesCtrl
   * @description
   * # ImagesCtrl
   * Controller of the capstoneApp
   */
  angular.module('capstoneApp')
    .controller('ImagesCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
