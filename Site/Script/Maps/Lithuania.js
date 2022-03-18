var map = L.map('map').setView([55.40952692116255, 24.16784582576052 ], 7);

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
        56.00874711616218,
      22.033767700195312
    ],
    [
        56.022948079627454,
      21.984329223632812
    ],
    [
        56.072418721188015,
      22.00286865234375
    ],
    [
        56.11072441806606,
      22.026214599609375
    ],
    [
        56.14287176762201,
      21.938323974609375
    ],
    [
        56.11608417567324,
      21.915664672851562
    ],
    [
        56.09157633201662,
      21.94244384765625
    ],
    [
        56.08812866507154,
      21.91497802734375
    ],
    [
        56.1080442593139,
      21.895751953125
    ],
    [
        56.109192921632825,
      21.86965942382812
    ],
    [
        56.12986298193436,
      21.84425354003906
    ],
    [
        56.15243424341579,
      21.87171936035156
    ],
    [
        56.14057641938123,
      21.825027465820312
    ],
    [
        56.12871493658035,
      21.800308227539062
    ],
    [
        56.08697937417548,
      21.815414428710938
    ],
    [
        56.07816700469287,
      21.79756164550781
    ],
    [
        56.08544693297173,
      21.768722534179688
    ],
    [
        56.059386103946444,
      21.792755126953125
    ],
    [
        56.04500678372126,
      21.805973052978516
    ],
    [
        56.043472673151285,
        21.771469116210938
    ],
    [
        56.040020701334626,
      21.75893783569336
    ],
    [
        56.027744522528096,
      21.756019592285156,
    ],
    [
        56.02697713170535,
      21.74795150756836
    ],
    [
        56.01028260718664,
      21.7474365234375
    ],
    [
        56.00932293244827,
      21.74022674560547
    ],
    [
        56.0004928062537,
      21.74468994140625
    ],
    [
        55.99262077545425,
      21.74571990966797
    ],
    [
        55.98167406859523,
      21.764259338378906
    ],
    [
        55.98839609794612,
      21.796531677246094
    ],
    [
        55.98417095876462,
      21.793785095214844
    ],
    [
        55.9749508706423,
      21.820907592773434
    ],
    [
        55.9774481948768,
      21.8353271484375
    ],
    [
        55.975335084865094,
      21.842880249023438
    ],
    [
        55.98359476765002,
      21.856613159179688
    ],
    [
        55.98359476765002,
      21.86450958251953
    ],
    [
        55.97206914232834,
      21.84734344482422
    ],
    [
        55.962269660275695,
      21.861763000488278
    ],
    [
        55.96419132294944,
      21.88098907470703
    ],
    [
        55.95515867866729,
      21.88854217529297
    ],
    [
        56.00087676674526,
      21.939697265625
    ],
    [
        55.99242875467368,
      21.95446014404297
    ],
    [
        56.00087676674526,
      21.96544647216797
    ],
    [
        56.00010884194735,
      21.982612609863278
    ],
    [
        55.9956929782265,
      21.988449096679684
    ],
    [
        56.00433223950498,
      22.000808715820312
    ],
    [
        55.9949249504244,
      22.021408081054688
    ],
    [
        56.00874711616218,
      22.033767700195312
    ]
  ]
var polygon2 =
[
    [
        56.242586824367926,
      23.223724365234375
    ],
    [
        56.25708311922577,
      23.24569702148437
    ],
    [
        56.26394786950044,
        23.240203857421875
    ],
    [
        56.270811388414565,
      23.24981689453125
    ],
    [
        56.28224785058033,
      23.23883056640625
    ],
    [
        56.298253152913865,
      23.26629638671875
    ],
    [
        56.309681409139095,
      23.234710693359375
    ],
    [
        56.35688194477737,
      23.275909423828125
    ],
    [
        56.36068589615771,
      23.22509765625
    ],
    [
        56.333288974155664,
      23.18115234375
    ],
    [
        56.315013425566924,
      23.212738037109375
    ],
    [
        56.30434864830831,
      23.18527221679687
    ],
    [
        56.309681409139095,
      23.177032470703125
    ],
    [
        56.2913945582176,
      23.168792724609375
    ],
    [
        56.28758369598093,
      23.148193359374996
    ],
    [
        56.242586824367926,     
         23.223724365234375
    ]
  ]
var polygon3 =
[
    [
        54.247575231805506,
      24.175415039062496
    ],
    [
        54.25559837127025,
      24.169921875
    ],
    [
        54.20582974353425,
      24.0765380859375
    ],
    [
        54.21546706469533,
      23.9666748046875
    ],
    [
        54.212254874138836,
      23.947448730468746
    ],
    [
        54.159217654166895,
      23.97216796875
    ],
    [
        54.154392714598124,
      24.0985107421875
    ],
    [
        54.10933281663397,
      24.101257324218746
    ],
    [
        54.08839548669902,
      24.005126953125
    ],
    [
        54.0609999517185,
      23.9996337890625
    ],
    [
        54.07389422020433,
      24.040832519531246
    ],
    [
        54.059387886623576,
      24.18365478515625
    ],
    [
        54.05293900056246,
      24.2413330078125
    ],
    [
        53.99000988393033,
      24.268798828125
    ],
    [
        53.98839506479995,
      24.309997558593746
    ],
    [
        54.03197320632049,
      24.35943603515625
    ],
    [
        53.993239334343045,
      24.3841552734375
    ],
    [
        53.960933558166715,
      24.34844970703125
    ],
    [
        53.90110181472825,
      24.3841552734375
    ],
    [
        53.92213355362716,
      24.44183349609375
    ],
    [
        54.01422465756089,
      24.4281005859375
    ],
    [
        54.04165104090459,
      24.48577880859375
    ],
    [
        54.059387886623576,
      24.57916259765625
    ],
    [
        54.1109429427243,
      24.5269775390625
    ],
    [
        54.19136954556109,
      24.27978515625
    ],
    [
        54.186548355115775,
      24.2303466796875
    ],
    [
        54.247575231805506,
      24.175415039062496
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
L.marker([54.67823470344015, 25.288082087841325],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Vilnius Old Town</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>")
.openPopup();

L.marker([54.63778506178523, 24.934693706930023],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Trakai</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>")
.openPopup();

L.marker([54.900997536129125, 23.91109612141516],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Devil’s Museum</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.88337593128866, 25.60836669266662],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>St. Anne’s Church</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([56.01540980247236, 23.41590631350237],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Siauliai Hill of Crosses</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.686729840825656, 25.2828403772309],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Money Museum</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.68812011935642, 25.270831533053123],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Museum of Genocide Victims</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();


// cities
L.marker([55.7457984437633, 24.35109526451854],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Panevėžys.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([55.94981948011651, 23.317505540676695],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Šiauliai.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([55.70819598338497, 21.143975513138106],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Klaipėda.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([54.90676677054016, 23.90542723575055],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kaunas.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([54.693044937555925, 25.286213984496587],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vilnius.</b><hr><i> The capital city of Lithuania.</i>')
.openPopup();