'use strict';


angular.module('capstoneApp')
  .controller('AboutCtrl', function ($scope) {
      $scope.backgroundStyle  = function(){

      if ($scope.path() === '/'){
        $scope.backgroundStyle = {background: 'black'};
      } else {
        $scope.backgroundStyle = {background: 'orange'};
      }
    };
  });
