var map = L.map('map').setView([46.03998851436525, 14.510287223533883], 8);

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
        45.49918826955754,
      13.59060287475586
    ],
    [
        45.495398037299395,
      13.603134155273436
    ],
    [
        45.487816807415115,
      13.618497848510742
    ],
    [
        45.482641731208865,
      13.621158599853516
    ],
    [
        45.477887463195614,
      13.61703872680664
    ],
    [
        45.478308743648334,
      13.610773086547852
    ],
    [
        45.46964176885276,
      13.616352081298828
    ],
    [
        45.465006797906256,
      13.61454963684082
    ],
    [
        45.46572915610992,
      13.606653213500977
    ],
    [
        45.478368926313074,
      13.585710525512695
    ],
    [
        45.48324350868221,
      13.59283447265625
    ],
    [
        45.48883973131902,
      13.592147827148438
    ],
    [
        45.49293124116844,
      13.588199615478516
    ],
    [
        45.49816553360498,
      13.584680557250975
    ],
    [
        45.499789870263776,
      13.58682632446289
    ],
    [
        45.49924842991741,
      13.590087890625
    ],
    [
        45.49918826955754,
      13.590474128723143
    ]
  ]
var polygon2 =
[
  [
    45.49918826955754,
    13.59060287475586
  ],
  [
    45.495398037299395,
    13.603134155273436
  ],
  [
    45.487816807415115,
    13.618497848510742
  ],
  [
    45.482641731208865,
    13.621158599853516
  ],
  [
    45.477887463195614,
    13.61703872680664
  ],
  [
    45.478308743648334,
    13.610773086547852
  ],
  [
    45.46964176885276,
    13.616352081298828
  ],
  [
    45.465006797906256,
    13.61454963684082
  ],
  [
    45.46572915610992,
    13.606653213500977
  ],
  [
    45.478368926313074,
    13.585710525512695
  ],
  [
    45.48324350868221,
    13.59283447265625
  ],
  [
    45.48883973131902,
    13.592147827148438
  ],
  [
    45.49293124116844,
    13.588199615478516
  ],
  [
    45.49816553360498,
    13.584680557250975
  ],
  [
    45.499789870263776,
    13.58682632446289
  ],
  [
    45.49924842991741,
    13.590087890625
  ],
  [
    45.49918826955754,
    13.590474128723143
  ]
]

var polygon3 =
[
  [
    46.36777895261494,
    13.50494384765625
  ],
  [
    46.19266555785523,
    13.75762939453125
  ],
  [
    46.240651955001695,
    13.94233703613281
  ],
  [
    46.26154380710643,
    13.888778686523438
  ],
  [
    46.30093177319756,
    13.935470581054686
  ],
  [
    46.29476444388206,
    14.031600952148438
  ],
  [
    46.320852243721966,
    14.052200317382812
  ],
  [
    46.37156925087649,
    14.039840698242188
  ],
  [
    46.39904104733023,
    14.09271240234375
  ],
  [
    46.45015858941525,
    13.9306640625
  ],
  [
    46.4605655457854,
    13.9361572265625
  ],
  [
    46.481373492133784,
    13.841400146484375
  ],
  [
    46.47191632087041,
    13.704071044921875
  ],
  [
    46.43596408010131,
    13.68072509765625
  ],
  [
    46.44069599413034,
    13.610687255859375
  ],
  [
    46.36778820659308,
    13.504925072193146
  ],
  [
    46.36777895261494,
    13.504925072193146
  ]
]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Sečovlje Saltpans Natural Park.</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Parque Nacional de Los Picos de Europa".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Caldera de Taburiente".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();


//monuments
L.marker([45.81604296322976, 14.127523228551638],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Predjama Castle</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>")
.openPopup();

L.marker([45.78330412795398, 14.204123161359602],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Postojna Cave</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>")
.openPopup();

L.marker([45.66849610927118, 13.883560654236751],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Lipica</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>')
.openPopup();

L.marker([45.99986758999248, 14.02292476533881],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Anthony's Shaft Mining Museum</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>")
.openPopup();

L.marker([46.049108567202026, 14.508953155544495],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Ljubljana Castle</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>')
.openPopup();

L.marker([45.98376877023109, 14.325712054149374],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Holy Trinity Church, Vrhnika</b><hr><i>One of the most popular tourist destinations in Slovenia.</i>")
.openPopup();


//cities
L.marker([46.55807749861824, 15.657039519127492],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Maribor.</b><hr><i> One of the biggest cities in Slovenia.</i>')
.openPopup();

L.marker([46.235578381336616, 15.264664258694664],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Celje.</b><hr><i> One of the biggest cities in Slovenia.</i>')
.openPopup();

L.marker([46.183360742377324, 13.729824553291953],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tolmin.</b><hr><i> One of the biggest cities in Slovenia.</i>')
.openPopup();

L.marker([46.23808183540291, 14.3538932869235],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kranj.</b><hr><i> One of the biggest cities in Slovenia.</i>')
.openPopup();

L.marker([46.37289315777687, 14.107914272729888],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bled.</b><hr><i> One of the biggest cities in Slovenia.</i>')
.openPopup();

L.marker([46.03998851436525, 14.510287223533883],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ljubljana.</b><hr><i> The capital city of Slovenia.</i>')
.openPopup();