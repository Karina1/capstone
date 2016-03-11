'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.latlong
 * @description
 * # latlong
 * Factory in the capstoneApp.
 */

    angular.module('capstoneApp')
      .factory('latlong', function ($resource) {
        // Service logic
        // ...

        // Public API here
        return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=f90b0fdc1b04e6c99b933cddf84d6560&photo_id=:photoId&format=json&nojsoncallback=1', {}, {
          query: {
            method:'GET',
            params:{
              photoId: '' //
           },
          isArray:false
         }
       });
     });
