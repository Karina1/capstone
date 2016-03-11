'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.map1
 * @description
 * # map1
 * Factory in the capstoneApp.
 */
  angular.module('capstoneApp')
    .factory('map1', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('https://maps.googleapis.com/maps/api/js?key=AIzaSyBFkHegIuqWVnuQh31Lz5zPYn9EQrK47hQ&callback=initMap', {}, {
        query: {
          method:'GET',
          params:{
            tags: '' // Paris, FR
         },
        isArray:false
       }
     });
   });
