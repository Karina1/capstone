'use strict';

/**
 * @ngdoc overview
 * @name capstoneApp
 * @description
 * # capstoneApp
 *
 * Main module of the application.
 */
angular
  .module('capstoneApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl',
        controllerAs: 'images'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
