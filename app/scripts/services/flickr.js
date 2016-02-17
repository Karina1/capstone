'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.flickr
 * @description
 * # flickr
 * Factory in the capstoneApp.
 */

 angular.module('capstoneApp')
   .factory('flickr', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f90b0fdc1b04e6c99b933cddf84d6560&tags=treehouse&format=json&nojsoncallback=1', {}, {
       query: {
         method:'GET',
         params:{
           tags: 'treehouse' // Paris, FR
        },
       isArray:false
      }
    });
  });
