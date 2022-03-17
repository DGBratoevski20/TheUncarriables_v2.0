 var map = L.map('map').setView([35.93772903209806, 14.37020907020132], 11);

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
        35.96980972942163,
      14.349431991577148
    ],
    [
        35.973057154140875,
      14.349088668823242
    ],
    [
        35.97293559519445,
      14.34865951538086
    ],
    [
        35.97184155625306,
      14.348423480987549
    ],
    [
        35.97166789788387,
      14.348895549774172
    ],
    [
        35.970348081793944,
      14.348123073577879
    ],
    [
        35.97107745657121,
      14.347157478332518
    ],
    [
        35.97007022296342,
      14.344754219055174
    ],
    [
        35.96921927421149,
      14.345226287841797
    ],
    [
        35.96937557160862,
      14.34589147567749
    ],
    [
        35.96869828065295,
      14.348144531249998
    ],
    [
        35.96980972942163,
      14.349431991577148
    ]
  ]
var polygon2 =
[
    [
        35.958555587856566,
      14.338274002075194
    ],
    [
        35.95563758563406,
      14.338188171386717
    ],
    [
        35.95452593738403,
      14.33964729309082
    ],
    [
        35.953483752941494,
      14.341621398925781
    ],
    [
        35.95188571009145,
      14.33964729309082
    ],
    [
        35.95084349081679,
      14.33784484863281
    ],
    [
        35.94931487767647,
      14.337930679321287
    ],
    [
        35.94723035754932,
      14.335870742797852
    ],
    [
        35.94445091183275,
      14.335527420043945
    ],
    [
        35.94431193698057,
      14.33235168457031
    ],
    [
        35.94340859448378,
      14.329347610473633
    ],
    [
        35.940629014340836,
      14.328918457031252
    ],
    [
        35.93819680152115,
      14.330978393554688
    ],
    [
        35.9386137576059,
      14.334669113159181
    ],
    [
        35.93673743790305,
      14.33810234069824
    ],
    [
        35.934791577832506,
      14.340677261352539
    ],
    [
        35.935139056358175,
      14.341449737548828
    ],
    [
        35.93659844948653,
      14.339475631713867
    ],
    [
        35.93777984323682,
      14.3441104888916
    ],
    [
        35.938335787127116,
      14.341192245483398
    ],
    [
        35.94014257776471,
      14.342222213745115
    ],
    [
        35.93910020359144,
      14.34608459472656
    ],
    [
        35.94215779551757,
      14.35312271118164
    ],
    [
        35.94584064691189,
      14.352006912231444
    ],
    [
        35.94688293218141,
      14.341964721679686
    ],
    [
        35.94848107622507,
      14.342136383056639
    ],
    [
        35.95056556335478,
      14.348917007446289
    ],
    [
        35.96001454854175,
      14.342565536499025
    ],
    [
        35.958555587856566,
      14.338274002075194
    ]
  ]
var polygon3 =
    [
      [
          35.89240512263651,
        14.418096542358397
      ],
      [
          35.89150118714464,
        14.418139457702637
      ],
      [
          35.89193577280385,
        14.419577121734617
      ],
      [
          35.89150118714464,
        14.419834613800047
      ],
      [
          35.891744555407676,
        14.421122074127197
      ],
      [
          35.89136211922988,
        14.422044754028319
      ],
      [
          35.891761938826406,
        14.422452449798582
      ],
      [
          35.89144903670524,
        14.422838687896729
      ],
      [
          35.890562473979884,
        14.421916007995605
      ],
      [
          35.89068415964758,
        14.424619674682617
      ],
      [
          35.89165763825676,
        14.425477981567383
      ],
      [
          35.89449108822943,
        14.421851634979248
      ],
      [
          35.89416081400604,
        14.420650005340574
      ],
      [
          35.89301353494514,
        14.420821666717528
      ],
      [
          35.89240512263651,
        14.418096542358397
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
L.marker([35.88504288744429, 14.4037164997512],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Mdina Gate</b><hr><i>One of the most popular tourist destinations in Malta.</i>")
.openPopup();

L.marker([36.01425614280091, 14.324268363546754],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Blue Lagoon</b><hr><i>One of the most popular tourist destinations in Malta.</i>")
.openPopup();

L.marker([35.82683334768911, 14.437019824612198],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mnajdra Temples of the Maltese Bronze Age</b><hr><i>One of the most popular tourist destinations in Malta.</i>')
.openPopup();


// cities
L.marker([35.910824921615955, 14.50280230389274],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Sliema.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89504007609341, 14.466460745410323],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Birkirkara.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89877173968337, 14.514370904818078],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Valletta</b><hr><i> The capital city of Malta.</i>')
.openPopup();