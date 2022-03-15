var map = L.map('map').setView([48.85481212770279, 19.805606675974946], 8);

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

var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Sečovlje Saltpans Natural Park.</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Parque Nacional de Los Picos de Europa".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Caldera de Taburiente".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

L.marker([48.311791651899036, 18.070614006567418],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nitra.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.74167045870027, 19.1424918664681],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.217418140637655, 18.738528627520484],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Žilina.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.002469539522856, 21.23720083735469],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prešov.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.72203788044131, 21.256532952408698],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Košice.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.15043737772495, 17.100639332663736],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bratislava.</b><hr><i> The capital city of Slovakia.</i>')
.openPopup();