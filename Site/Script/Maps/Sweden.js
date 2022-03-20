var map = L.map('map').setView([63.12440050838607, 15.340211785642705], 5);

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

var polygon2 = [
    [
        59.217771541891736,
      18.2427978515625
    ],
    [
        59.200548158095586,
      18.26751708984375
    ],
    [
        59.184723110191065,
      18.21327209472656
    ],
    [
        59.180501859357584,
      18.21807861328125
    ],
    [
        59.172761545359215,
      18.208465576171875
    ],
    [
        59.16633927310099,
      18.209495544433594
    ],
    [
        59.16466752496466,
      18.231124877929688
    ],
    [
        59.16088379323613,
      18.239364624023438
    ],
    [
        59.17073821985765,
      18.279705047607422
    ],
    [
        59.153051018755384,
      18.308029174804688
    ],
    [
        59.167834978486596,
      18.393173217773438
    ],
    [
        59.177335579087384,
      18.402786254882812
    ],
    [
        59.18542660131102,
      18.379440307617188
    ],
    [
        59.19808696539121,
      18.378067016601562
    ],
    [
        59.211445594167785,
      18.32794189453125
    ],
    [
        59.20371228813144,
      18.31695556640625
    ],
    [
        59.22374497169974,
      18.277130126953125
    ],
    [
        59.23639113666801,
      18.293609619140625
    ],
    [
        59.24587268425508,
      18.266830444335938
    ],
    [
        59.24517043780604,
      18.251724243164062
    ],
    [
        59.22585299141959,
      18.262710571289062
    ],
    [
        59.217749578823636,
      18.24301242828369
    ]
  ]
var polygon3 = [
    [
        68.38868723907443,
      18.718643188476562
    ],
    [
        68.32778393150342,
      18.638992309570312
    ],
    [
        68.32207776677865,
      18.603286743164062
    ],
    [
        68.29212868065264,
      18.496856689453125
    ],
    [
        68.28844578075037,
      18.49720001220703
    ],
    [
        68.28717567739629,
      18.511619567871094
    ],
    [
        68.28819176573604,
      18.5174560546875
    ],
    [
        68.28755671582671,
      18.523635864257812
    ],
    [
        68.28044294906614,
      18.544235229492188
    ],
    [
        68.27942651562728,
      18.564834594726562
    ],
    [
        68.27294568827342,
      18.54835510253906
    ],
    [
        68.26659014964847,
      18.571014404296875
    ],
    [
        68.28920780882423,
      18.702850341796875
    ],
    [
      68.28615954380322,
      18.71246337890625
    ],
    [
        68.2886997929365,
        18.727569580078125
    ],
    [
        68.29504917850275,
        18.725509643554688
    ],
    [
        68.30418918922028,
        18.74336242675781
    ],
    [
        68.30520451981967,
      18.751602172851562
    ],
    [
        68.30774264847042,
        18.746795654296875
    ],
    [
        68.34045917933271,
        18.78662109375
    ],
    [
      68.34856763426428,
      18.805160522460938
    ],
    [
        68.35597674100552,
        18.80258560180664
    ],
    [
        68.35243080307954,
        18.820953369140625
    ],
    [
        68.35515362612867,
        18.837261199951172
    ],
    [
      68.35762288136507,
      18.831081390380856
    ],
    [
        68.35762288136507,
        18.81786346435547
      
    ],
    [
      68.3865375117646,
      18.722076416015625
    ]
  ]

  var polygon1 = [
    [
        67.73235365127071,
        16.666259765625   
    ],
    [
        67.57362188991469,
      17.100219726562496
    ],
    [
        67.65729826053568,
      17.5506591796875
    ],
    [
        67.58619226758864,
      17.896728515625
    ],
    [
        67.5064668859601,
      17.314453125
    ],
    [
        67.14863213340215,
      17.1112060546875
    ],
    [
        67.23593614290276,
      16.41357421875
    ],
    [
        67.4285812540874,
      16.083984375
    ],
    [
        67.51697240955544,
      16.1553955078125
    ],
    [
        67.53587062958475,
      16.424560546875
    ],
    [
        67.73027201419832,
      16.6278076171875
    ]
  ]

	//polygons
  var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Abisko National Park.</b><hr><i> One of the nature preserves in Sweden.</i>')
  .openPopup();

  var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Tyresta National Park.</b><hr><i> One of the nature preserves in Sweden.</i>')
  .openPopup();

  var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Padjelanta National Park.</b><hr><i> One of the nature preserves in Sweden.</i>')
  .openPopup();


//monuments
L.marker([59.328171052745624, 18.09193284059279],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Vasa Museum</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([59.321969479362465, 17.88745401009918],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Drottningholm Palace</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([67.84997863927966, 20.596885218137587],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Icehotel</b><hr><i>One of the most popular tourist destinations in Spain.</i>')
.openPopup();

L.marker([55.70416969659849, 13.194172467466318],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Lund Cathedral</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([57.636657385781966, 18.29485565057488],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Visby</b><hr><i>One of the most popular tourist destinations in Spain.</i>')
.openPopup();


//cities
L.marker([57.71093805967822, 11.965933427643622],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Gothenburg.</b><hr><i>Population: 579,281</i><br><i>Area: 447.8 km<sup>2</sup></i><br><i>Elevation: 12 m</i><hr><i>Gothenburg, a major city in Sweden, is situated off the Göta älv river on the country`s west coast.</i>')
.openPopup();

L.marker([55.60208195113387, 13.00181526081602],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Malmö.</b><hr><i>Population: 344,166</i><br><i>Area: 76.81 km<sup>2</sup></i><br><i>Elevation: 57 m</i><hr><i>Malmö is a coastal city in southern Sweden.</i>')
.openPopup();

L.marker([59.859814525400125, 17.635893737002007],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Uppsala.</b><hr><i>Population: 177,074</i><br><i>Area: 48.77 km<sup>2</sup></i><br><i>Elevation: 15 m</i><hr><i>Uppsala is a city near Stockholm, in Sweden.</i>')
.openPopup();


L.marker([59.27346182938627, 15.21018449483136],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Örebro.</b><hr><i>Population: 155,989</i><br><i>Area: 1,380 km<sup>2</sup></i><br><i>Elevation: 34 m</i><hr><i>Örebro is a city with 124,027 inhabitants, the seat of Örebro Municipality and the capital of Örebro County in Sweden.</i>')
.openPopup();

L.marker([58.58623608064828, 16.190535870739346],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Norrköping.</b><hr><i>Population: 137,326</i><br><i>Area: 35.68 km<sup>2</sup></i><br><i>Elevation: 119 m</i><hr><i>Norrköping is a city in the province of Östergötland in eastern Sweden and the seat of Norrköping Municipality, Östergötland County.</i>')
.openPopup();

L.marker([59.36693868725194, 18.064821650729527],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Stockholm.</b><hr><i>Population: 975,551</i><br><i>Area: 188 km<sup>2</sup></i><br><i>Elevation: 28 m</i><hr><i>Stockholm, the capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago.</i>')
.openPopup();