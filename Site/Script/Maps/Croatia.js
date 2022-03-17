var map = L.map('map').setView([44.5, 16.25016], 7);

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

var polygon1 = [
    [
		44.8833698755307, 15.56130706127278
    ],
    [
        44.873096146525185, 15.544287122138883
    ],
    [
        44.86073546237722, 15.546388349192451
    ],
    [
        44.85224526246045, 15.562988042915633
    ],
    [
        44.84226395329237, 15.588833135674511
    ],
    [
        44.847627259777184, 15.602070866111989
    ],
    [
        44.852692146296114, 15.600389884469136
    ],
    [
        44.85388381957189, 15.594086203308434
    ],
    [
        44.853287986016326, 15.593665957897718
    ],
    [
        44.85403277699758, 15.58967362649594
    ],
    [
        44.855373376490505, 15.593455835192364
    ],
    [
        44.85447964696282, 15.597658289299499
    ],
    [
        44.86341631806947, 15.598708902826282
    ],
    [
        44.864458839347975, 15.59492669412986
    ],
    [
        44.881079632082574, 15.61141835261164
    ],
    [
        44.89405350833335, 15.602913337390937
    ],
    [
        44.900157002097906, 15.611022686984578
    ],
    [
        44.914515608361896, 15.606461177838156
    ],
    [
        44.93066475315696, 15.624200380074242
    ],
    [
        44.94106957445505, 15.539559043690618
    ],
    [
        44.878253222001234, 15.50408063921844
    ]
	
  ]


var polygon2 = [
			[
              44.92573606134963,
              13.733854293823242
            ],
            [
              44.92421678935694,
              13.736515045166016
            ],
            [
              44.92257593047454,
              13.73591423034668
            ],
            [
              44.92166432195577,
              13.739948272705078
            ],
            [
              44.922454383507784,
              13.742351531982422
            ],
            [
              44.92075269897216,
              13.743553161621094
            ],
            [
              44.92154277306035,
              13.749732971191406
            ],
            [
              44.91820007766514,
              13.749818801879883
            ],
            [
              44.91661982669198,
              13.755226135253904
            ],
            [
              44.90774530248751,
              13.75265121459961
            ],
            [
              44.90598239139811,
              13.745784759521484
            ],
            [
              44.90409784044567,
              13.74690055847168
            ],
            [
              44.89856541465798,
              13.749990463256836
            ],
            [
              44.89832221889217,
              13.753423690795898
            ],
            [
              44.89491737016678,
              13.753166198730467
            ],
            [
              44.89503897537852,
              13.74732971191406
            ],
            [
              44.890965060798116,
              13.746213912963867
            ],
            [
              44.8915731260725,
              13.751449584960938
            ],
            [
              44.888715163384624,
              13.750677108764648
            ],
            [
              44.88798544802555,
              13.754196166992186
            ],
            [
              44.89333647901328,
              13.754453659057617
            ],
            [
              44.89278923733482,
              13.759174346923828
            ],
            [
              44.90598239139811,
              13.757801055908203
            ],
            [
              44.906103973209014,
              13.762092590332031
            ],
            [
              44.90762372414815,
              13.761491775512695
            ],
            [
              44.90592160039622,
              13.76612663269043
            ],
            [
              44.90197004737575,
              13.763809204101562
            ],
            [
              44.901848456821654,
              13.76861572265625
            ],
            [
              44.90312514481406,
              13.770503997802734
            ],
            [
              44.904523389609324,
              13.769044876098633
            ],
            [
              44.904341011782066,
              13.772220611572266
            ],
            [
              44.90744135615697,
              13.772907257080078
            ],
            [
              44.90397625439176,
              13.778743743896484
            ],
            [
              44.90719819793535,
              13.782520294189453
            ],
            [
              44.91035917458495,
              13.780803680419922
            ],
            [
              44.9102983882118,
              13.773593902587889
            ],
            [
              44.9140670217781,
              13.780202865600586
            ],
            [
              44.91923329518873,
              13.777027130126953
            ],
            [
              44.91655904694052,
              13.76861572265625
            ],
            [
              44.91892940961043,
              13.76861572265625
            ],
            [
              44.92117812483123,
              13.766984939575195
            ],
            [
              44.922454383507784,
              13.762521743774414
            ],
            [
              44.9198410615237,
              13.759946823120115
            ],
            [
              44.921238899696796,
              13.755311965942383
            ],
            [
              44.92269747718415,
              13.755741119384766
            ],
            [
              44.92287979676639,
              13.75986099243164
            ],
            [
              44.92421678935694,
              13.759775161743164
            ],
            [
              44.92743759827963,
              13.746385574340819
            ],
            [
              44.92622221990126,
              13.739519119262694
            ],
            [
              44.92658683611489,
              13.736944198608398
            ],
            [
              44.92573606134963,
              13.733854293823242
            ]
  ]
  
  var polygon3 = [
			[
              45.566948210863636,
              16.469879150390625
            ],
            [
              45.53136488027206,
              16.449279785156246
            ],
            [
              45.471688258104614,
              16.571502685546875
            ],
            [
              45.35407536661815,
              16.708831787109375
            ],
            [
              45.32801318215748,
              16.78848266601562
            ],
            [
              45.263288531496876,
              16.802215576171875
            ],
            [
              45.144273362849326,
              17.2100830078125
            ],
            [
              45.29034662473613,
              17.083740234375
            ],
            [
              45.38880628417227,
              16.821441650390625
            ],
            [
              45.423515874347714,
              16.84478759765625
            ],
            [
              45.43700828867391,
              16.719818115234375
            ],
            [
              45.465909744214535,
              16.761016845703125
            ],
            [
              45.51693278828882,
              16.59210205078125
            ],
            [
              45.563102450326866,
              16.469879150390625
            ],
            [
              45.566948210863636,
              16.469879150390625
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Plitvice Lakes National Park.</b><hr><i> One of the nature preserves in Croatia.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Brijuni Islands National Park.</b><hr><i> One of the nature preserves in Croatia.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Park Prirode Lonjsko polje.</b><hr><i> One of the nature preserves in Croatia.</i>')
  .openPopup();


//monuments
L.marker([44.88366084161831, 13.859690013394374],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Pula</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();

L.marker([43.50864171873293, 16.44067360945156],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Diocletian's Palace</b><hr><i>One of the most popular tourist destinations in Croatia.</i>")
.openPopup();

L.marker([43.17337499601382, 16.44174064219017],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hvar Town</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();

L.marker([45.81903577752728, 15.972643744014121],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Gornji Grad</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();

L.marker([43.25643894759743, 16.633959679108393],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Zlatni Rat Beach</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();

L.marker([42.757073207125394, 17.51478827114701],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mljet</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();

L.marker([45.291527085553604, 13.887037606228398],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Istria</b><hr><i>One of the most popular tourist destinations in Croatia.</i>')
.openPopup();


//cities
L.marker([43.51046, 16.44431],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Split.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.32162, 14.43944],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rijeka.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.55202, 18.70005],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Osijek.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([44.11874, 15.23047],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zadar.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.81546, 15.973691],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zagreb.</b><hr><i> The capital city of Croatia.</i>')
.openPopup();