'use strict';
      angular.module('capstoneApp')
       .controller('AboutCtrl', function ($scope) {
         var imageArray = [
           {
             'title': 'Buchanan Street in Glasgow',
             'url': 'images/buchanan_glas.jpg',
             'source': 'https://www.flickr.com/photos/katzonic/5675535547/in/photolist-9DwAZa-4YZTtE-4jrtYu-8kRwxj-dqgRPJ-4E8LoX-33XNTj-ogdFFK-33Y5y3-4mxfg-a8iE7q-711g3z-6Chm9d-7fPKEc-71LZTD-33Y92u-33Y9kw-dishKo-acegnZ-71n4mr-p13ZdV-avfJat-nzVAQA-71r2zW-oDcqdC-33Y5kj-33Y6om-33Y56A-c6sjAY-6kpYcb-4swCVg-33TwrX-dhURP8-rdKHwt-33Y4mS-54qcQ8-daqCML-8CbH5-4ygRAQ-amaQYk-33YaAU-4UTjV6-aKW2Ln-8kRvHj-dDrpL3-3pr4NC-dRaNwt-67Fd5N-8kRw5U-8kRwUh'
           },
           {
             'title': 'Capilano Suspension Bridge in Vancouver',
             'url': 'images/capilanosusbridge.jpg',
             'source': 'https://www.flickr.com/photos/91954855@N05/9206414066/in/dateposted/'
           },
           {
             'title': 'Cat Street - Shibuya - in Tokyo',
             'url': 'images/catstreet_tokyo.jpg'
           },
           {
             'title': 'Placa in Dubrovnik',
             'url': 'images/dubrovnik.jpg'
           },
           {
             'title': 'Fez el Bali, Morocco',
             'url': 'images/fez.jpg',
             'source': 'https://www.flickr.com/photos/papy06/20799623406/in/photolist-xFZvoE-wSaQhg-xUFwTR-ybZzTm-wdbTqY-pRKF2m-qi3fMb-qc8sLi-pmuEoB-zQksba-x4RuAg-APPkhk-q7Tbu9-xyUj5s-xYgo7H-xdf5Bi-DAH9wJ-xKgTxg-stj27D-yjUjY1-xsxFfn-ytK62N-xDjNJs-AjW1Rg-yLvcDD-ypCHuQ-xk1PBC-AFLjqA-q73kJ3-xjJFAY-Aq923N-pZZJNA-qFdxGe-BN8g34-rJ2Bjv-qah5z1-AAvkKs-pcRLes-pKtzGr-rM9bJY-yQqH5r-qnYQpM-AN1Epv-pQoJfn-x5C2vx-r2VSRH-zkepjG-yEQdfW-EQSMfU-C1ahBh'
           },
           {
             'title': 'Lynn Canyon Suspension Bridge in Vancouver',
             'url': 'images/lynncanyon_vanc.jpg',
             'source': 'https://www.flickr.com/photos/clive_c/12727424983/in/photolist-9Nxt4C-fzZQCA-4xYQH6-BpUBx4-89WqXr-ekMpPK-7Ap1as-koFo2M-6ffYK-dAZzgK-aiwqrs-Hh6Gm-o5BUKa-866kA5-4sj5Cc-tssB7k-2ygDYH-a1j3Ht-3G9USF-835Fbi-8eL5jk-6kA5jT-fVswaF-3prSUo-557R93-fk8Cz-ApENJ-3Ge9cu-bGmxUK-3Gec1A-4SbVPm-aiwczs-7rs82R-8eUC6t-6B76q1-ATnRe3-6DxHsY-6ZLreX-ob2htQ-bf9RLP-7NA32v-9R2C59-cRqVtU-dv1DmG-5cLTEi-dWCAFN-egsNb-co8k9C-ocLnhF-oeQBKR'
           },
           {
             'title': 'Souk in the Medina, Marrakech',
             'url': 'images/marrakech.jpg'
           },
           {
             'title': 'Royal Mile in Edinburgh',
             'url': 'images/royalmile_edin.jpg',
             'source': 'https://www.flickr.com/photos/fotoknigge/8530876702/in/photolist-dZQYr5-X45kC-btZz5V-oZBMnp-qupD2p-aTNXLM-nG417H-cCgzv5-afrdx9-55hoH-dGKS2X-dAn9TU-55hi1-bxEYGf-8Kzv9y-6T81qX-eiybhq-dwH8Dx-dY3E9R-8shNwC-9RJVcy-anbLZS-55hic-5pZauj-pjYwKW-qLjNQc-r7tejC-eivtcT-LqFbb-8xEMVy-bZ54YN-amFnJU-4havMj-kUfHnk-eLqFMX-dxC8iM-7FinAX-aA7HiL-azmyhs-gzetdD-6yCKvg-pSeppN-6Xh6gH-e9Ue1k-4m22uC-iiym1f-jq5NF5-8NMVfZ-8r6msx-7Hbweq'
           },
           {
             'title': 'Passerelle de Simone de Beauvoir in Paris',
             'url': 'images/simonedebeauvoir.jpg'
           },
           {
             'title': 'Palazzo Re Enzo, Bologna',
             'url': 'images/bologna.jpg',
             'source': 'http://www.aeht2015.it/sito%204F_en/SITO%20UDA%20AEHT/Bologna%20Nuova/Bologna.html'
           },
            {
              'title': 'Vienna, Austria',
              'url': 'images/vienna.jpg',
              'source': 'https://www.wien.info/en/shopping-wining-dining/shopping'
            },
            {
              'title': 'Amsterdam',
              'url': 'images/amster.jpg',
              'source': 'https://www.flickr.com/photos/aigle_dore/4811919256/in/photolist-8kdkX7-q3z4Ep-gZq1N9-eRtZvm-8KGdUq-8a931q-8ibG4M-9H92Rg-Bxbvte-6imwGy-rqvFnV-813Rph-eSMof8-eNphfd-qh27BJ-ngjSiN-oKuLhY-ePLpEt-eNZRgr-9CDAx3-7jusFb-8BVSct-5qtMis-eQN1rp-8L7BdA-fS9SkK-oN6cBH-9Lm2NJ-8R1XFS-9H94wi-AHJ5r-4iEVpT-dxFos2-cnLqMY-cczLcs-qFMi9a-64Dga-fNope4-A7mkAK-yzj9uz-vG5QAc-h2tKbz-73GwbQ-qfidrs-eePgGa-byPdXv-9m8RuY-gXw47z-9i9A78-cptDJ9'
            },
            {
              'title': 'Place Massena in Nice, France',
              'url': 'images/massena-nice-1.jpg'
            },
            {
              'title': 'Khan el Khalili Bazaar, Cairo',
              'url': 'images/cairo.jpg',
              'source': 'https://www.flickr.com/photos/chrisschoenbohm/5146069762'
            },
            {
              'title': 'Stroeget, Copenhagen',
              'url': 'images/cph.jpg',
              'source': 'https://www.flickr.com/photos/katieneil/12179005994/in/photolist-jydAaY-9ouEsK-4PYAwJ-fFd2Lx-2PLnUs-bktxpo-pcW5D2-qgg9nX-6GoMSJ-9YAnHZ-cwDnch-yd8Wb-5tjbLY-7ce3aA-bhPsmn-afvcko-fFvm9f-jxDEzC-fFvjqS-fFdbcc-btD7eq-piJxWZ-bktuRm-fFuMfQ-vrhTc-vrhot-tiysd-3W8mDg-4wykaF-ady8RK-9oxJ5h-af9SiP-dcAfbr-vrjLZ-5BYJWA-4MEhEi-vrkBA-bktyeG-ag4Npu-ag4N3L-e8SF7P-7p4tJv-fFdc3r-5pmkkk-8pzmTt-PpYht-b54Bu6-ukJAR-5MR9Rf-atJSpw'
            },
            {
              'title': 'The High Line, NYC',
              'url': 'images/highline.jpg',
              'source': 'http://www.nytimes.com/2012/08/02/garden/close-quarters-on-the-high-line.html?_r=0'
            },
            {
              'title': 'Galata in Istanbul, Turkey',
              'url': 'images/istanbul.jpg',
              'source': 'http://holeinthedonut.com/2014/01/24/photo-trolley-on-istiklal-avenue-in-istanbul'
            },
            {
              'title': 'Lincoln Road in Miami',
              'url': 'images/miami.jpg',
              'source': 'http://www.miamihabitat.com/photos-of-lincoln-road-mall.asp'
            },
            {
              'title': 'Mykonos, Greece',
              'url': 'images/mykonos.jpg',
              'source': 'http://travel.usnews.com/Mykonos_Greece/Pictures/'
            },
            {
              'title': 'Las Ramblas in Barcelona',
              'url': 'images/ramblas.jpg',
              'source': 'https://citywonders.com/blog/things-las-ramblas'
            },
            {
              'title': 'The Spanish Steps in Rome',
              'url': 'images/rome.jpg',
              'source': 'https://www.flickr.com/photos/chrissy575/4103080677/in/photolist-7fzmWi-9gHEeB-8siuRG-AuBoAx-7a1eaq-7wo8U-spXB3e-5HxShi-5HxSxD-DXeYLB-jnf7m3-acv1aA-c49pmq-cWfbvm-cWf8pd-fwPNLN-fM6VKo-815P2e-cWf5gE-3mm5Vn-q7kRZV-4zCEWt-bqDubr-75HADp-8FB7J6-bucTGD-8eTZ4n-fM6T3C-fLPmTM-NnAMT-9FSrc4-4U68p4-pvfGA1-4UamoQ-4mQJwJ-nYC8gn-4U68k8-ehjh-3eLSHi-8LgyPW-5FRU22-c3hik3-4U68qX-576aJB-3JSwp-ddxMkC-5FWaK3-6nEJUQ-2qndN-4U68rV'
            },
            {
              'title': 'Piazzo del Campo in Siena, Italy',
              'url': 'images/siena.jpg',
              'source': 'http://www.turismo.intoscana.it/allthingstuscany/aroundtuscany/10_things_not_to_be_missed_in_siena'
            },
            {
              'title': 'Seaside Promenade in Split, Croatia',
              'url': 'images/split.jpg',
              'source': 'https://www.holidaycheck.at/m/neue-promenade-in-split/527482a2-a12c-39ed-bad6-816a334c5141'
            }
         ];

         $scope.refreshFlickr = function() {
            $scope.featuredImage = imageArray[Math.floor(Math.random() * imageArray.length)];
         };

         $scope.refreshFlickr();
       });
