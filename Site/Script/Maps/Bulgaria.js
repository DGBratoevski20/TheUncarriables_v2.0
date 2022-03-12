var map = L.map('map').setView([42.895, 25.39], 7.5);
	
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/castle.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

var polygon3 = [
  [ 
    [[
      42.024030553523524,
      28.010395914316177
    ],
    [
      42.024004650799384,
      28.00961136817932
    ],
    [
      42.0236778770655,
      28.0092653632164
    ],
    [
      42.02334113896071,
      28.00917416810989
    ],
    [
      42.022918719408025,
      28.009337782859802
    ],
    [
      42.02169727349686,
      28.009230494499207
    ],
    [
      42.021087538046835,
      28.009552359580994
    ],
    [
      42.020928129121934,
      28.01003515720367
    ],
    [
      42.02077270503537,
      28.010770082473755
    ],
    [
      42.02071691168087,
      28.011687397956845
    ],
    [
      42.0212230353188,
      28.0121111869812
    ],
    [
      42.02125093178012,
      28.01166594028473
    ],
    [
      42.02164148095364,
      28.010694980621334
    ],
    [
      42.02197623547881,
      28.010335564613342
    ],
    [
      42.02216752298764,
      28.010190725326538
    ],
    [
      42.0228370247367,
      28.010008335113525
    ],
    [
      42.024000665763985,
      28.010330200195312
    ],
    [
      42.024030553523524,
      28.010395914316177
    ]
    ]
  ]
];
var polygon4 = [
  [
    [
      42.72381262999295,
      25.202808380126953
    ],
    [
      42.6910158708481,
      25.228729248046875
    ],
    [
      42.6970719613491,
      25.233879089355465
    ],
    [
      42.70464124398721,
      25.233020782470703
    ],
    [
      42.70552426685297,
      25.221691131591797
    ],
    [
      42.72948723304796,
      25.213966369628906
    ],
    [
      42.72381262999295,
      25.202808380126953
    ]
  ]
]
var polygon = [
    [ 
      [[
        44.131710111843084,
        27.061386108398438
      ],
      [
        44.12604225281769,
        27.058639526367188
      ],
      [
        44.12185261614565,
        27.062759399414062
      ],
      [
        44.11741620639636,
        27.06001281738281
      ],
      [
        44.113472451413294,
        27.05657958984375
      ],
      [
        44.110514462451455,
        27.055892944335938
      ],
      [
        44.10829587357286,
        27.05795288085937
      ],
      [
        44.10262576809246,
        27.062416076660156
      ],
      [
        44.098681026118264,
        27.066879272460938
      ],
      [
        44.09572229691591,
        27.070999145507812
      ],
      [
        44.09276341966685,
        27.068252563476562
      ],
      [
        44.089557802247704,
        27.065849304199215
      ],
      [
        44.089557802247704,
        27.067909240722653
      ],
      [
        44.09029757553512,
        27.076492309570312
      ],
      [
        44.091777094351315,
        27.079238891601562
      ],
      [
        44.09325657615601,
        27.075462341308594
      ],
      [
        44.09227025906529,
        27.07168579101562
      ],
      [
          
        44.09596886333733,
        27.080955505371094
      ],
      [
        44.09572229691591,
        27.093658447265625
      ],
      [
        44.09547572946637,
        27.103271484375
      ],
      [
        44.09843447100597,
        27.09949493408203
      ],
      [
        44.09942068528651,
        27.093658447265625
      ],
      [
        44.10385844598368,
        27.08919525146484
      ],
      [
        44.108788900520494,
        27.08404541015625
      ],
      [ 
        44.11667677238545,
        27.080612182617188
      ],
      [
        44.122345529999656,
        27.088165283203125
      ],
      [
        44.13023159235851,
        27.089881896972656
      ],
      [
        44.13220294344616,
        27.062759399414062        
      ],
      [
        44.131710111843084,
        27.061386108398438
      ]
    ] 
  ]
];


var polygon2 = [
    [ 
        [
            41.842966567859406,
            23.2745361328125
          ],
          [
            41.83171182161546,
            23.29925537109375
          ],
          [
            41.81636125072054,
            23.302001953125
          ],
          [
            41.78052894057897,
            23.32672119140625
          ],
          [
            41.73647896274239,
            23.30474853515625
          ],
          [
            41.72110557838152,
            23.29238891601562
          ],
          [
            41.6872711837914,
            23.336334228515625
          ],
          [
            41.693424216151314,
            23.35281372070312
          ],
          [
            41.68009190220902,
            23.37066650390625
          ],
          [
            41.68624562118,
            23.38714599609375
          ],
          [
            41.66367910784373,
            23.41323852539062
          ],
          [
            41.63494664852403,
            23.436584472656246
          ],
          [
            41.62262881463783,
            23.44757080078125
          ],
          [
            41.623655390686395,
            23.465423583984375
          ],
          [
            41.65034063112266,
            23.569793701171875
          ],
          [
            41.68932225997044,
            23.56292724609375
          ],
          [
            41.700602010054766,
            23.57940673828125
          ],
          [
            41.72213058512578,
            23.553314208984375
          ],
          [
            41.73340458018376,
            23.571166992187496
          ],
          [
            41.74979958661997,
            23.5601806640625
          ],
          [
            41.77848077487428,
            23.52996826171875
          ],
          [
            41.812267143599804,
            23.5162353515625
          ],
          [
            41.81533774847465,
            23.531341552734375
          ],
          [
            41.826595373571706,
            23.50112915039062
          ],
          [
            41.82454867985508,
            23.477783203124996
          ],
          [
            41.811243575929346,
            23.4613037109375
          ],
          [
            41.83785101947692,
            23.451690673828125
          ],
          [
            41.83375828633243,
            23.424224853515625
          ],
          [
            41.84194349089866,
            23.40087890625
          ],
          [
            41.85524221544658,  
            23.372039794921875
          ],
          [
            41.88285380945687,
            23.302001953125
          ],
          [
            41.842966567859406,
            23.2745361328125
          ]
    ]
]
//poygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Nature preserve "Srebarna".</b><hr><i> One of the nature preserves in Bulgaria.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Pirin".</b><hr><i> One of the nature preserves in Bulgaria.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Nature preserve "Silistar".</b><hr><i> One of the nature preserves in Bulgaria.</i>')
.openPopup();

var polygon = L.polygon(polygon4, {color: 'red'}).addTo(map)
.bindPopup('<b>Nature preserve "Leshnica".</b><hr><i> One of the nature preserves in Bulgaria.</i>')
.openPopup();

//cities
L.marker([42.15525946577863, 24.75],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Plovdiv.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.20645, 27.91536333],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Varna.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([42.4923, 27.47136333],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Burgas.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.0822, 25.63136333],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Veliko Tarnovo.</b><hr><i>  One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([42.423871, 25.6272],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Stara Zagora.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.8476, 25.954],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ruse.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.409, 24.617999],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pleven.</b><hr><i>  One of the biggest cities in Bulgaria.</i>')
.openPopup();

//destinations
L.marker([42.13331272396505, 23.549941201410448],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rila.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([41.52435646089968, 23.39132024911288],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Melnik.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([43.083809981708264, 25.65247580232216],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Tsarevets.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([43.3610206224683, 28.46580744769052],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cape Kaliakra.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([42.712749643027895, 24.8944921659984726],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Central Balkan National Park.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([44.0965768614296, 27.063071411637523],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Srebarna.</b><hr><i>One of the most popular tourist destiantions in Bulgaria.</i>')
.openPopup();

L.marker([42.698, 23.32222222],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Sofia.</b><hr><i> The capital city of Bulgaria.</i>')
.openPopup();