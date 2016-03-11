'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.test
 * @description
 * # test
 * Factory in the capstoneApp.
 */
angular.module('capstoneApp')
  .factory('test', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
