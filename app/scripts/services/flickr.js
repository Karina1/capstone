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
     return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f90b0fdc1b04e6c99b933cddf84d6560&tags=footbridge,pedestrian+zone&extras=geo,tags,url_m&format=json&nojsoncallback=1', {}, {
    //  return $resource('http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=f90b0fdc1b04e6c99b933cddf84d6560&user_id=21679005@N07', {}, {
       query: {
         method:'GET',
         params:{
           tag: '', //pedestrian+bridge,pedestrian+zone,pedestrian+precinct,footbridge
        },
       isArray: false
      }
    });
  });
