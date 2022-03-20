var map = L.map('map').setView([42.05202978939177, 12.702840083976747 ], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/monument.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

var polygon =
[
    [
        42.286452962920926,
      13.83453369140625
    ],
    [
        42.25495072629938,
      13.816680908203125
    ],
    [
        42.17256412461651,
      13.844146728515625
    ],
    [
        42.04827286732349,
      13.99658203125
    ],
    [
        41.99624282178583,
      14.037780761718748
    ],
    [
        41.94621306986162,
      13.9910888671875
    ],
    [
        41.916585116228354,
      13.981475830078125
    ],
    [
        41.891032732083765,
      14.028167724609375
    ],
    [
        41.89001042401827,
      14.0789794921875
    ],
    [
        41.870583462266836,
      14.114685058593748
    ],
    [
        41.852173524388824,
      14.088592529296875
    ],
    [
        41.86956082699455,
      14.219055175781248
    ],
    [
        41.912497421968425,
      14.192962646484375
    ],
    [
        41.918628865183045,
      14.235534667968748
    ],
    [
        41.970722347928096,
      14.249267578124998
    ],
    [
        41.97174336327968,
      14.1943359375
    ],
    [
        41.95949009892467,
      14.15313720703125
    ],
    [
        41.97889001249024,
      14.114685058593748
    ],
    [
        42.07580094787546,
      14.206695556640625
    ],
    [
        42.11350522894021,
      14.227294921875
    ],
    [
        42.21326229782065,
      14.150390625
    ],
    [
        42.20105559753742,
      14.1229248046875
    ],
    [
        42.24275208539065,
      14.095458984375
    ],
    [
        42.22851735620852,
      14.037780761718748
    ],
    [
        42.19698617329925,
      14.063873291015625
    ],
    [
        42.21936476344714,
      13.974609375
    ],
    [
        42.24071874922666,
      13.9910888671875
    ],
    [
        42.25190128722992,
      13.973236083984375
    ],
    [
        42.199020918176785,
      13.94439697265625
    ],
    [
        42.17459965566123,
      13.97186279296875
    ],
    [
        42.14813264235833,
      13.9361572265625
    ],
    [
        42.1684928659947,
      13.910064697265623
    ],
    [
        42.194951362905265,
      13.9141845703125
    ],
    [
        42.200038266046754,
      13.897705078125
    ],
    [
        42.235635122140614,
      13.8922119140625
    ],
    [
        42.2860719815549,
      13.835391998291016
    ]
  ]


var polygon2 =
[
    [
        44.61344515302858,
      9.204483032226562
    ],
    [
        44.59266759328414,
      9.201393127441406
    ],
    [
        44.59046718130883,
      9.181480407714844
    ],
    [
        44.573594588453545,
      9.145431518554688
    ],
    [
        44.59731263387036,
      9.094276428222656
    ],
    [
        44.5853325627196,
      9.079170227050781
    ],
    [
        44.567724712695366,
      9.074363708496094
    ],
    [
        44.55157949972927,
      9.07745361328125
    ],
    [
        44.54374990501309,
      9.097023010253906
    ],
    [
        44.528577068252744,
      9.094963073730469
    ],
    [
        44.52759803979947,
      9.1131591796875
    ],
    [
        44.50899337263551,
      9.1461181640625
    ],
    [
        44.52710851940198,
      9.14646148681640
    ],
    [
        44.528087556083065,
      9.157447814941406
    ],
    [
        44.51560360577554,
      9.168434143066406
    ],
    [
        44.54179234177644,
      9.217529296875
    ],
    [
        44.55965266622662,
      9.215812683105469
    ],
    [
        44.58386544552787,
      9.230575561523438
    ],
    [
        44.57848569904532,
      9.239158630371092
    ],
    [
        44.58019749055897,
      9.251518249511719
    ],
    [
        44.60049060560402,
      9.243278503417969
    ],
    [
        44.59877941165391,
      9.224052429199219
    ],
    [
        44.61344515302858,
      9.204483032226562
    ]
  ]

  var polygon3 =
[
    [
        44.464170919586834,
      9.965972900390625
    ],
    [
        44.442604689982,
      10.012664794921875
    ],
    [
        44.39356091349481,
      9.941253662109375
    ],
    [
        44.37196862007497,
      9.993438720703123
    ],
    [
        44.36804189293882,
      10.04150390625
    ],
    [
        44.34840430835639,
      10.007171630859375
    ],
    [
        44.326795363769975,
      10.052490234375
    ],
    [
        44.35429627478575,
      10.06072998046875
    ],
    [
        44.315987905196906,
      10.111541748046875
    ],
    [
        44.33367180085156,
      10.13214111328125
    ],
    [
        44.286502899553156,
      10.19256591796875
    ],
    [
        44.32974250695349,
      10.254364013671875
    ],
    [
        44.364114902541495,
      10.240631103515625
    ],
    [
        44.362151308620156,
      10.30792236328125
    ],
    [
        44.383747221908365,
      10.331268310546875
    ],
    [
        44.41416430998939,
      10.287322998046875
    ],
    [
        44.357242035876375,
      10.2008056640625
    ],
    [
        44.384728665110295,
      10.163726806640625
    ],
    [
        44.405335171450915,
      10.139007568359375
    ],
    [
        44.41122141189896,
      10.107421874999998
    ],
    [
        44.459270203098846,
      10.130767822265625
    ],
    [
        44.470051236358984,
      10.078582763671875
    ],
    [
        44.485729184996416,
      10.023651123046873
    ],
    [
        44.464170919586834,
      9.965972900390625
    ]
  ]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Maiella National Park.</b><hr><i> One of the nature preserves in Italy.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Antola Natural Regional Park.</b><hr><i> One of the nature preserves in Italy.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Appennino Tosco-Emiliano National Park.</b><hr><i> One of the nature preserves in Italy.</i>')
.openPopup();

//monuments
L.marker([41.89044179649501, 12.49225235598876],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Colosseum</b><hr><i>One of the most popular tourist destinations in Italy.</i>")
.openPopup();

L.marker([43.773377392365276, 11.256035300213906],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Cathedral of Santa Maria del Fiore</b><hr><i>One of the most popular tourist destinations in Italy.</i>")
.openPopup();

L.marker([45.435960352256124, 12.327906288926002],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Grand Canal in Venice</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([43.72313806574941, 10.396607727199354],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Leaning Tower of Pisa</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([40.63381525647895, 14.604048505482611],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Amalfi Coast</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([44.12779144691539, 9.71098823711514],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cinque Terre</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([43.768041256560736, 11.255439544391535],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Uffizi Gallery in Florence</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();


// cities
L.marker([45.48484638001285, 9.178645255184874],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Milan.</b><hr><i>Population: 1,352,246</i><br><i>Area: 181.8 km<sup>2</sup></i><br><i>Elevation: 120 m</i><hr><i>Milan, a metropolis in Italy`s northern Lombardy region, is a global capital of fashion and design.</i>')
.openPopup();

L.marker([40.8666701753286, 14.265061020864495],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Naples.</b><hr><i>Population: 3,085,845</i><br><i>Area: 119 km<sup>2</sup></i><br><i>Elevation: 17 m</i><hr><i>Naples, a city in southern Italy, sits on the Bay of Naples.</i>')
.openPopup();

L.marker([45.07122781404754, 7.68348772490847],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Turin.</b><hr><i>Population: 886,837</i><br><i>Area: 130.2 km<sup>2</sup></i><br><i>Elevation: 239 m</i><hr><i>Turin is the capital city of Piedmont in northern Italy, known for its refined architecture and cuisine.</i>')
.openPopup();

L.marker([38.143048357320474, 13.35771912637409],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Palermo.</b><hr><i>Population: 673,735</i><br><i>Area: 158.9 km<sup>2</sup></i><br><i>Elevation: 14 m</i><hr><i>Palermo is the capital of the Italian island of Sicily.</i>')
.openPopup();

L.marker([44.40694381575936, 8.94425899172044],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Genoa.</b><hr><i>Population: 583,601</i><br><i>Area: 243 km<sup>2</sup></i><br><i>Elevation: 20 m</i><hr><i>Genoa is a port city and the capital of northwest Italy`s Liguria region.</i>')
.openPopup();

L.marker([43.77555741658469, 11.252341632252282],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Florence.</b><hr><i>Population: 382,258</i><br><i>Area: 102.4 km<sup>2</sup></i><br><i>Elevation: 50 m</i><hr><i>Florence, capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture.</i>')
.openPopup();

L.marker([44.49439041804245, 11.340800024282567],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bologna.</b><hr><i>Population: 388,367</i><br><i>Area: 140.9 km<sup>2</sup></i><br><i>Elevation: 54 m</i><hr><i>Bologna is the lively, historic capital of the Emilia-Romagna region, in northern Italy.</i>')
.openPopup();

L.marker([41.92539143426936, 12.484632494412406],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rome.</b><hr><i>Population: 2,873,737</i><br><i>Area: 1.285 km<sup>2</sup></i><br><i>Elevation: 21 m</i><hr><i>Rome is the capital city of Italy.</i>')
.openPopup();