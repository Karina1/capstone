'use strict';
/**
 * @ngdoc service
 * @name capstoneApp.getPhotos
 * @description
 * # getPhotos
 * Factory in the capstoneApp.
 */

 angular.module('capstoneApp')
   .factory('getPhotos', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=f90b0fdc1b04e6c99b933cddf84d6560&photo_id=:photoId&format=json&nojsoncallback=1', {}, {
       query: {
         method:'GET',
         params:{
           photoId: '' // 
        },
       isArray:false
      }
    });
  });

  // <a class='image-link' href='http://www.flickr.com/photos/" . $photo['owner'] . "/" . $photo['id'] . "/'>" . "<img class='img-circle' src='http://farm" . $photo['farm'] . ".static.flickr.com/" . $photo['server'] . "/" . $photo['id'] . "_" . $photo['secret'] . "_s.jpg' alt='". $photo['title'] . "'/>" . "</a> <br>" . "<a class='owner-link' href='http://www.flickr.com/people/" . $photo['owner'] . "/'>credits</a>";
