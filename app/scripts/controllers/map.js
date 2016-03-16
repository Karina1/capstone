  'use strict';
  /**
   * @ngdoc function
   * @name capstoneApp.controller:ImagesCtrl
   * @description
   * # ImagesCtrl
   * Controller of the capstoneApp
   */
  // angular.module('capstoneApp')
  //   .controller('MapCtrl', function () {
  //     this.awesomeThings = [
  //       'HTML5 Boilerplate',
  //       'AngularJS',
  //       'Karma'
  //     ];
  //   });
    angular.module('capstoneApp').controller('MapCtrl', function($rootScope, NgMap) {
        var vm = this;
        vm.setPositions = function(pos) {
          vm.positions = angular.copy(pos);
        };
        NgMap.getMap().then(function(map) {
          vm.map = map;
        });
        vm.setPositions($rootScope.latLng);

        // vm.currentIndex = 0;
        // vm.selectNextCustomMarker = function() {
        //   vm.map.customMarkers[vm.currentIndex].removeClass('selected');
        //   vm.currentIndex = (vm.currentIndex+1) % vm.positions.length;
        //   vm.map.customMarkers[vm.currentIndex].addClass('selected');
        //   vm.currentPosition = vm.positions[vm.currentIndex];
        // };
      });
