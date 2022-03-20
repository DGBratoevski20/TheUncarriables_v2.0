//initialize map
var map = L.map('map').setView([56.996505006, 24.427360938789217], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

//intialize markers
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

//polygon cordinates
var polygon =
[
    [
        57.759868346374425,
      22.60162353515625
    ],
    [
        57.65899427270635,
      22.196502685546875
    ],
    [
        57.63327234438773,
      22.217788696289062
    ],
    [
        57.62739048683103,
      22.210922241210938
    ],
    [
        57.61378504244448,
      22.21160888671875
    ],
    [
        57.62591987359766,
      22.225341796875
    ],
    [
        57.62297846850774,
      22.23358154296875
    ],
    [
        57.632169568654916,
      22.269973754882812
    ],
    [
        57.64246083992679,
      22.260360717773438
    ],
    [
        57.659728917120724,
      22.311859130859375
    ],
    [
        57.640623326843844,
      22.342071533203125
    ],
    [
        57.63841818837133,
      22.377090454101562
    ],
    [
        57.66009623374909,
      22.363357543945312
    ],
    [
        57.67368433459917,
      22.39837646484375
    ],
    [
        57.66523827604164,
      22.441635131835938
    ],
    [
        57.67882445064995,
      22.44781494140625
    ],
    [
        57.6821284261475,
      22.405929565429688
    ],
    [
        57.692038545838415,
      22.400436401367188
    ],
    [
        57.72101925959205,
      22.501373291015625
    ],
    [
        57.717352096870876,
      22.544631958007812
    ],
    [
        57.676254483720356,
      22.544631958007812
    ],
    [
        57.67478584938936,
      22.571411132812496
    ],
    [
        57.759868346374425,
      22.604370117187496
    ]
  ]
var polygon2 =
[
    [
        57.09896020435966,
      25.10101318359375
    ],
    [
        57.198783806596964,
      25.0323486328125
    ],
    [
        57.28349647452156,
      25.4827880859375
    ],
    [
        57.50106890607948,
      25.41412353515625
    ],
    [
        57.44051527979127,
      25.2301025390625
    ],
    [
        57.37986126240439,
      25.175170898437496
    ],
    [
        57.37541921931102,
      25.02685546875
    ],
    [
        57.329486594251506,
      24.9169921875
    ],
    [
        57.25825166121577,
      24.89227294921875
    ],
    [
        57.14369064054635,
      24.664306640625
    ],
    [
        57.15709923882379,
      24.900512695312496
    ],
    [
        57.16752478898164,
      24.96917724609375
    ],
    [
        57.12282315984669,
      24.96368408203125
    ],
    [
        57.09149987857074,
      25.054321289062496
    ],
    [
        57.087022962459756,
      25.10101318359375
    ],
    [
        57.09896020435966,
      25.10101318359375
    ]
  ]
var polygon3 =
[
    [
        57.001858813506765,
      23.258056640625
    ],
    [
        56.95246396506335,
      23.35418701171875
    ],
    [
        56.832446746576004,
      23.37066650390625
    ],
    [
        56.7933580978463,
      23.39263916015625
    ],
    [
        56.85948424030449,
      23.61236572265625
    ],
    [
        56.916499275766704,
      23.62335205078125
    ],
    [
        56.928491358513355,
      23.56292724609375
    ],
    [
        56.946472258070806,
      23.5986328125
    ],
    [
        57.02578425367197,
      23.499755859375
    ],
    [
        57.0511881715046,
      23.33221435546875
    ],
    [
        57.001858813506765,
      23.258056640625
    ]
  ]
//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Slitere National Park.</b><hr><i> One of the nature preserves in Latvia.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Gaujas National Park.</b><hr><i> One of the nature preserves in Latvia.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Kemeru  National Park.</b><hr><i> One of the nature preserves in Latvia.</i>')
.openPopup();

//monuments
L.marker([56.95864795575303, 23.71840773037556],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Jūrmala beach</b><hr><i>One of the most popular tourist destinations in Latvia.</i>")
.openPopup();

L.marker([56.569094395018396, 21.0285276586329],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Liepaja beach</b><hr><i>One of the most popular tourist destinations in Latvia.</i>")
.openPopup();

L.marker([56.969553279928455, 21.96325678436013],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Kuldiga</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.75897880672118, 22.604700654587802],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cape Kolka</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.315182506260115, 25.27143806450294],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cēsis Castle</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([56.41362310502395, 24.024801934954773],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rundāle Palace Museum</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.183430249049785, 24.85963809994719],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Turaida castle</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();


// cities
L.marker([57.39884497483879, 21.55014710659771],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ventspils.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.96093619207526, 23.78874018624686],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Jūrmala.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.65153464510933, 23.72320623118176],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Jelgava.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.50627347991781, 21.010744000409918],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liepāja.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([55.8775557008804, 26.53266705226049],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Daugvpils.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.948491643410236, 24.11069035433517],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Riga.</b><hr><i> The capital city of Latvia.</i>')
.openPopup();