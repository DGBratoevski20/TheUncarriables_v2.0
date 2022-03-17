var map = L.map('map').setView([46.03028772748342, 24.987739329528555], 7);

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

var polygon = [
    [
  47.59690318115471,
      24.87579345703125
    ],
    [
  47.55428670127958,
      24.65057373046875
    ],
    [
  47.60338525714934,	
      24.3841552734375
    ],
    [
  47.49493650511712,
      24.128723144531246
    ],
    [
  47.385333517742595,	
      24.532470703125
    ],
    [
        47.396490013933416,
      24.739837646484375
    ],
    [
        47.48380086737799,
      24.962310791015625
    ],
    [
        47.57281986733871,
      25.006256103515625
    ],
    [
        47.596961060386555,
      24.876136779785156
    ],
    [
        47.59693212077863,
      24.87582564353943
    ]
  ]
   var polygon2 = [
    [
        45.340804456964136,
      22.720584869384766
    ],
    [
        45.31787464828503,
      22.749252319335938
    ],
    [
        45.309062306034996,
      22.797832489013672
    ],
    [
        45.29747138648206,
      22.813282012939453
    ],
    [
        45.337667241885754,
      22.88915634155273
    ],
    [
        45.358659139618965,
      22.911643981933594
    ],
    [
        45.37602585730995,
      22.854995727539062
    ],
    [
        45.40351225590908,
      22.87078857421875
    ],
    [
        45.40471749372361,
      22.829933166503906
    ],
    [
        45.38977072743874,
      22.767791748046875
    ],
    [
        45.34080469262578,
      22.72058319300413
    ],
    [
        45.340803749979116,
      22.720582187175747
    ],
    [
        45.34080210034736,
      22.72058185189962
    ],
    [
        45.34080327865575,
      22.720583528280258
    ]
  ]
var polygon3 = [
    [
        45.556371735883125,
      25.195770263671875
    ],
    [
        45.5049032167422,
      25.149078369140625
    ],
    [
        45.463501855252474,
      25.149078369140625
    ],
    [
        45.38591285563495,
      25.18341064453125
    ],
    [
        45.36517228358507,
      25.217056274414062
    ],
    [
        45.382537001817276,
      25.243148803710938
    ],
    [
        45.391217361482845,
      25.26031494140625
    ],
    [
        45.38494834654319,
      25.303573608398438
    ],
    [
        45.42110617524166,
      25.302886962890625
    ],
    [
        45.428816850348596,
      25.265121459960938
    ],
    [
        45.42255200704734,
      25.250015258789062
    ],
    [
        45.44086267178177,
      25.22598266601562
    ],
    [
        45.464946600971466,
      25.235595703124996
    ],
    [
        45.497684239670036,
      25.252761840820312
    ],
    [
        45.52847875806646,
      25.284347534179684
    ],
    [
        45.51693278828882,
      25.3619384765625
    ],
    [
        45.54483149242463,
      25.30769348144531
    ],
    [
        45.561660222250204,
      25.308380126953125
    ],
    [
        45.58088688584061,
      25.247955322265625
    ],
    [
        45.556416810313166,
      25.195716619491577
    ]
  ]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b> Natural Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b> National Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

//monuments
L.marker([47.722855534161866, 24.152100507081002],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Wooden church Paraschiva</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([45.18070318849824, 28.795357965389815],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Danube Delta</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([45.60165364485322, 25.551763203008946],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Poiana Brașov</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([45.74966572896988, 22.888765380674364],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Corvin Castle</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([47.77832135351248, 25.7115885347026],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Sucevita Monastery</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([45.50267064877976, 24.249661852567126],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Transylvanian Alps</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();


//cities
L.marker([46.56737476701929, 26.908884041765983],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bacău.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.1647553660865, 28.63532666928853],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Constanța.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([46.775227446524866, 23.621977661540935],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Cluj-Napoca.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([47.160805029371424, 27.59998516278188],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Iași.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([45.43509050553079, 28.057399670964112],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Galați.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.43145360848081, 26.10121466957515],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bucharest.</b><hr><i> The capital city of Romania.</i>')
.openPopup();