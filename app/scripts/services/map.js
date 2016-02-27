'use strict';
/**
 * @ngdoc service
 * @name capstoneApp.flickr
 * @description
 * # flickr
 * Factory in the capstoneApp.
 */

 angular.module('capstoneApp')
   .factory('map', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGaMlmN6hqBHzWl0ZdDOOI5MhUhM-CEsk&callback=initMap', {}, {
       query: {
         method:'GET',
         params:{
           tags: '' // Paris, FR
        },
       isArray:false
      }
    });
  });
