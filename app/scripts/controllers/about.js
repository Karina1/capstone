'use strict';
      angular.module('capstoneApp')
       .controller('AboutCtrl', function ($scope) {
         var imageArray = [
           {
             'title': 'Buchanan Street in Glasgow',
             'url': 'images/buchanan_glas.jpg',
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
             'title': 'Essaouira, Morocco',
             'url': 'images/CEH1NB.jpg'
           },
           {
             'title': 'Placa in Dubrovnik',
             'url': 'images/dubrovnik.jpg'
           },
           {
             'title': 'Fez el Bali, Morocco',
             'url': 'images/fez.jpg'
           },
           {
             'title': 'Jinli in Chengdu, Sichuan, China',
             'url': 'images/jinli_chengdu.jpg'
           },
           {
             'title': 'Cat Street (Shibuya) in Tokyo',
             'url': 'images/catstreet_tokyo.jpg'
           },
           {
             'title': 'Cat Street (Shibuya) in Tokyo',
             'url': 'images/cat2.jpg'
           },
           {
             'title': 'Lynn Canyon Suspension Bridge in Vancouver',
             'url': 'images/lynncanyon_vanc.jpg'
           },
           {
             'title': 'Souk in the Medina, Marrakech',
             'url': 'images/marrakech.jpg'
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
             'title': 'Place Massena in Nice, France',
             'url': 'images/massena.jpg'
           },
           {
             'title': 'Palazzo Re Enzo, Bologna',
             'url': 'images/bologna.jpg'
           },
           {
             'title': 'Place Massena in Nice',
             'url': 'images/massena.jpg'
           },
            {
              'title': 'Vienna, Austria',
              'url': 'images/vienna.jpg'
            },
            {
              'title': 'Amsterdam',
              'url': 'images/amster.jpg'
            },
            {
              'title': 'Place Massena in Nice, France',
              'url': 'images/massena-nice-1.jpg'
            },
            {
              'title': 'Khan el Khalili Bazaar, Cairo',
              'url': 'images/cairo.jpg'
            },
            {
              'title': 'Cat Street - Shibuya - Tokyo',
              'url': 'images/cat2.jpg'
            },
            {
              'title': 'The High Line, NYC',
              'url': 'images/highline.jpg'
            },
            {
              'title': 'Galata in Istanbul, Turkey',
              'url': 'images/istanbul.jpg'
            },
            {
              'title': 'Lincoln Road in Miami',
              'url': 'images/miami.jpg'
            },
            {
              'title': 'Mykonos, Greece',
              'url': 'images/mykonos.jpg'
            },
            {
              'title': 'Las Ramblas in Barcelona',
              'url': 'images/ramblas.jpg'
            },
            {
              'title': 'The Spanish Steps in Rome',
              'url': 'images/rome.jpg'
            },
            {
              'title': 'Piazzo del Campo in Siena, Italy',
              'url': 'images/siena.jpg'
            },
            {
              'title': 'Seaside Promenade in Split, Croatia',
              'url': 'images/split.jpg'
            }
         ];

         $scope.refreshFlickr = function() {
            $scope.featuredImage = imageArray[Math.floor(Math.random() * imageArray.length)];
         };

         $scope.refreshFlickr();
       });
