'use strict';
      angular.module('capstoneApp')
       .controller('AboutCtrl', function ($scope) {
         var imageArray = [
           {
             'title': 'Buchanan Street in Glasgow',
             'url': 'images/buchanan_glas.jpg'
           },
           {
             'title': 'Capilano Suspension Bridge in Vancouver',
             'url': 'images/capilanosusbridge.jpg'
           },
           {
             'title': 'Cat Street in Tokyo',
             'url': 'images/catstreet_tokyo.jpg'
           },
           {
             'title': 'Stroeget in Copenhagen',
             'url': 'images/cph2014.jpg'
           },
           {
             'title': 'Placa in Dubrovnik',
             'url': 'images/dubrovnik.jpg'
           },
           {
             'title': 'Fez',
             'url': 'images/fez.jpg'
           },
           {
             'title': 'Jinli in Chengdu',
             'url': 'images/jinli.jpg'
           },
           {
             'title': 'Cat Street in Tokyo',
             'url': 'images/catstreet_tokyo.jpg'
           },
           {
             'title': 'Lynn Canyon Suspension Bridge in Vancouver',
             'url': 'images/lynncanyon_vanc.jpg'
           },
           {
             'title': 'Jemna al Fna in Marrakech',
             'url': 'images/marrakech.jpg'
           },
           {
             'title': 'Plaka in Athens',
             'url': 'images/plaka-athens.jpg'
           },
           {
             'title': 'Plaka in Athens',
             'url': 'images/plaka.jpg'
           },
           {
             'title': 'Royal Mile in Edinburgh',
             'url': 'images/royalmile_edin.jpg'
           },
           {
             'title': 'Passerelle de Simone de Beauvoir in Paris',
             'url': 'images/simonedebeauvoir.jpg'
           },
           {
             'title': 'Place Massena in Nice',
             'url': 'images/massena.jpg'
           },
           {
             'title': 'Place Massena in Nice',
             'url': 'images/massena-nice-1.jpg'
           },
           {
             'title': 'Place Massena in Nice',
             'url': 'images/massena.jpg'
            }
         ];

         $scope.refreshFlickr = function() {
            $scope.featuredImage = imageArray[Math.floor(Math.random() * imageArray.length)];
         };

         $scope.refreshFlickr();
       });
