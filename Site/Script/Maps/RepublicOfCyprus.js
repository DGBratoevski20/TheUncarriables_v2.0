var map = L.map('map').setView([35.139832609554624, 33.384133301430296 ], 9);

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
        35.13700174353023,
      33.37549924850464
    ],
    [
        35.13549263451299,
      33.38768720626831
    ],
    [
        35.13196542178965,
      33.38876008987427
    ],
    [
        35.133386854253075,
      33.396806716918945
    ],
    [
        35.13800195153418,
      33.39942455291748
    ],
    [
        35.14026553479837,
      33.410797119140625
    ],
    [
        35.13847572998379,
      33.416987657547
    ],
    [
        35.13240413816034,
      33.42491626739502
    ],
    [
        35.13032460161155,
      33.42419743537903
    ],
    [
        35.126612891741956,
      33.42658996582031
    ],
    [
        35.124980738819545,
      33.42083930969238
    ],
    [
        35.126402293202794,
      33.41742753982544
    ],
    [
        35.12580559438448,
      33.41699838638306
    ],
    [
        35.1261565942188,
      33.41262102127075
    ],
    [
        35.12371711409389,
      33.41395139694214
    ],
    [
        35.12362936164887,
      33.413071632385254
    ],
    [
        35.12262897709356,
      33.41324329376221
    ],
    [
        35.124261177142884,
      33.409059047698975
    ],
    [
        35.12580559438448,
      33.40800762176514
    ],
    [
        35.124076898130056,
      33.401559591293335
    ],
    [
        35.121066948570046,
      33.39860916137695
    ],
    [
        35.12110205066362,
      33.397278785705566
    ],
    [
        35.12436647924874,
      33.39169979095459
    ],
    [
        35.124261177142884,
      33.38975787162781
    ],
    [
        35.122367909804304,
      33.386190533638
    ],
    [
        35.12326080034742,
      33.381829261779785
    ],
    [
        35.12695511320665,
      33.38163614273071
    ],
    [
        35.128306435196436,
      33.3803915977478
    ],
    [
        35.12868374837094,
        33.377183675765984
    ],
    [
        35.13074577785953,
      33.37716221809387
    ],
    [
        35.13164077015355,
        33.37421178817749
    ],
    [
        35.13700064680419,
      33.37549723684788
    ]
  ]
var polygon2 =
[
    [
        34.98837848142154,
      32.31285095214844
    ],
    [
        34.98387798216256,
      32.342376708984375
    ],
    [
        35.00553436504395,
      32.351646423339844
    ],
    [
        35.02409241738468,
      32.33104705810547
    ],
    [
        35.05894767058473,
      32.34546661376953
    ],
    [
        35.07187406335313,
      32.32383728027344
    ],
    [
        35.08592216835832,
      32.303924560546875
    ],
    [
        35.10474283635563,
      32.28778839111328
    ],
    [
        35.10474283635563,
      32.280921936035156
    ],
    [
        35.0892933536166,
      32.272682189941406
    ],
    [
        35.06316302357556,
      32.269248962402344
    ],
    [
        35.04882993544457,
      32.27130889892578
    ],
    [
        35.017063347574855,
      32.28984832763672
    ],
    [
        34.98837628397252,
      32.31285095214844
    ]
  ]
var polygon3 =
 [
      [
          34.710467776192885,
        33.00498962402344
      ],
      [
          34.710503054315865,
        33.005290031433105
      ],
      [
          34.7108205567456,
        33.00636291503906
      ],
      [
          34.71145555794871,
        33.00636291503906
      ],
      [
          34.71173777914081,
        33.00769329071045
      ],
      [
          34.713466362929424,
        33.0069637298584
      ],
      [
          34.71473631983373,
        33.006834983825684
      ],
      [
          34.71431300303243,
        33.005032539367676
      ],
      [
          34.71343108607037,
        33.00516128540039
      ],
      [
          34.71318414763572,
        33.004088401794434
      ],
      [
          34.712866654279196,
        33.00335884094238
      ],
      [
          34.710467776192885,
        33.00498962402344
      ]
]


//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Athalassas National Park.</b><hr><i> One of the nature preserves in the Republic of Cyprus.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Akama forest.</b><hr><i> One of the nature preserves in the Republic of Cyprus.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Limassol forest park.</b><hr><i> One of the nature preserves in the Republic of Cyprus.</i>')
.openPopup();

//monuments
L.marker([34.66896002732899, 32.882705955641114],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Ancient Kourion</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();

L.marker([35.31162534866984, 33.281048501312014],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>St. Hilarion Castle</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();

L.marker([34.949327940562455, 33.623408575220004],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Larnaca</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.50101237922233, 34.25034329469294],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Karpas Peninsula</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();


// cities
L.marker([34.902839381520735, 33.61975979021524],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Larnaca.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.10647215608584, 33.31571338906268],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lakatamia.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.03582486080627, 33.986402936213416],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Paralimni.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.186839430423774, 33.37960450539726],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nicosia.</b><hr><i> The capital city of the Republic of Cyprus.</i>')
.openPopup();