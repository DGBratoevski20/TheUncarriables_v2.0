var map = L.map('map').setView([49.755294246029315, 6.1273152860427365], 10);

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
        49.98379273467213,
      6.015529632568359
    ],
    [
        49.98853879749191,
      6.025142669677734
    ],
    [
        49.988649165474,
      6.030979156494141
    ],
    [
        49.99493972181124,
      6.043338775634765
    ],
    [
        50.00156047113753,
        6.059989929199219
    ],
    [
        50.00674608799155,
      6.057071685791016
    ],
    [
        50.0028845116,
      6.054496765136719
    ],
    [
        50.00718739125516,
      6.042823791503906
    ],
    [
        49.999905369277386,
      6.033725738525391
    ],
    [
        49.99648464486737,
      6.017589569091797
    ],
    [
        49.99383617495203,
      6.01226806640625
    ],
    [
        49.98401349216408,
      6.0115814208984375
    ],
    [
        49.98379273467213,
      6.015529632568359
    ]
  ]
var polygon2 =
[
    [
        49.99240152617323,
      6.151142120361328
    ],
    [
        49.98787658428092,
      6.145477294921875
    ],
    [
        49.986331384664645,
      6.145305633544922
    ],
    [
        49.986441757712036,
      6.140499114990234
    ],
    [
        49.982578550357445,
      6.136722564697266
    ],
    [
        49.97849425093581,
      6.134319305419922
    ],
    [
        49.97606558419867,
      6.136894226074218
    ],
    [
        49.975734392872745,
      6.131401062011719
    ],
    [
        49.97496160424735,
      6.131572723388671
    ],
    [
        49.973747197046386,
      6.139984130859375
    ],
    [
        49.978273468116235,
      6.151313781738281
    ],
    [
        49.98677287533463,
      6.159038543701172
    ],
    [
        49.99240152617323,
      6.151142120361328
    ]
  ]
var polygon3 =
[
    [
        49.74334091284788,
      6.266326904296875
    ],
    [
        49.74417287890333,
      6.265296936035156
    ],
    [
        49.74433927040238,
      6.260576248168945
    ],
    [
        49.743119052823545,
      6.254482269287109
    ],
    [
        49.74012384319562,
      6.247615814208984
    ],
    [
        49.73557520833147,
      6.243839263916016
    ],
    [
        49.73257953301161,
      6.244869232177734
    ],
    [
        49.724923078200234,
      6.238346099853516
    ],
    [
        49.725366963628865,
      6.244869232177734
    ],
    [
        49.72836308411453,
      6.249504089355468
    ],
    [
        49.722925543545806,
      6.250705718994141
    ],
    [
        49.72059498257234,
      6.245899200439453
    ],
    [
        49.718264309730266,
      6.246757507324219
    ],
    [
        49.72048400068801,
      6.251220703125
    ],
    [
        49.72026203615833,
      6.258602142333984
    ],
    [
        49.72237065822268,
      6.262550354003906
    ],
    [
        49.72237065822268,
      6.257057189941406
    ],
    [
        49.72625472231029,
      6.2601470947265625
    ],
    [
        49.730138475662,
      6.258602142333984
    ],
    [
        49.73091518904465,
      6.251564025878906
    ],
    [
        49.73513141624827,
      6.250190734863281
    ],
    [
        49.73956915445477,
      6.252765655517578
    ],
    [
        49.74334091284788,
      6.266326904296875
    ]
  ]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Op Baerel Nature Reserve.</b><hr><i> One of the nature preserves in Luxembourg.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Aksecht National Park.</b><hr><i> One of the nature preserves in Luxembourg.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Ronnheck Nature Reserve.</b><hr><i> One of the nature preserves in Luxembourg.</i>')
.openPopup();

//monuments
L.marker([49.611808724863465, 6.1342556654379345],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>National Museum of History and Art</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>")
.openPopup();

L.marker([49.61728870610536, 6.140952542149191],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Grand Duke Jean Museum of Modern Art (MUDAM)</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>")
.openPopup();

L.marker([49.90606469430512, 6.080400659348498],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bourscheid Castle</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>')
.openPopup();


// cities
L.marker([49.49989929115584, 5.968235148549869],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Esch-sur-Alzette.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.47949008227143, 6.079707133699428],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Dudelange.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.61235929163547, 6.1313963902380415],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Luxembourg.</b><hr><i> The capital city of Luxembourg.</i>')
.openPopup();