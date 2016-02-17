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
           photoId: '' // Paris, FR
        },
       isArray:false
      }
    });
  });
