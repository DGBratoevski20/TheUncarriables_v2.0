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
        48.735134682507514,
      19.45850372314453
    ],
    [
      48.709314421349,
      19.434471130371094
    ],
    [
       48.712032967791615,
       19.404258728027344
    ],
    [
        48.705236326283455,
      19.369583129882812
    ],
    [
        48.66874533279169,
      19.40082550048828
    ],
    [
        48.66216961042053,
      19.342117309570312
    ],
    [
        48.63290858589535,
      19.35688018798828
    ],
    [
        48.630866485453446,
      19.372329711914062
    ],
    [
        48.60635483327761,
      19.355850219726562
    ],
    [
        48.60703587322351,
      19.38640594482422
    ],
    [
        48.58955294054395,
      19.391555786132812
    ],
    [
        48.58909875777496,
      19.41112518310547
    ],
    [
        48.59454868157923,
      19.412498474121094
    ],
    [
        48.591369630797935,
      19.449920654296875
    ],
    [
        48.60408463379358,
      19.468116760253906
    ],
    [
        48.60226840073151,
      19.486312866210938
    ],
    [
        48.59409454371403,
      19.495925903320312
    ],
    [
        48.60158729649512,
      19.506912231445312
    ],
    [
        48.61180289568751,
      19.512062072753906
    ],
    [
        48.58909875777496,
      19.526138305664062
    ],
    [
        48.617023403943534,
      19.582786560058594
    ],
    [
        48.633135480842654,
      19.57317352294922
    ],
    [
        48.64152987659335,
      19.59789276123047
    ],
    [
        48.64595338795999,
      19.646644592285156
    ],
    [
        48.659901921005854,
      19.635486602783203
    ],
    [
        48.66307665762014,
      19.65007781982422
    ],
    [
        48.675773604480426,
      19.652137756347656
    ],
    [
        48.68212087819241,
      19.64252471923828
    ],
    [
        48.686540828507226,
      19.607505798339844
    ],
    [
        48.683254235765325,
      19.58690643310547
    ],
    [
        48.70342373350562,
      19.549484252929688
    ],
    [
        48.69662592916659,
      19.53540802001953
    ],
    [
        48.7000249460914,
      19.525108337402344
    ],
    [
        48.70410346344752,
      19.537811279296875
    ],
    [
        48.70682229141283,
      19.532661437988278
    ],
    [
        48.69617270956898,
      19.492149353027344
    ],
    [
        48.725849974568995,
      19.502792358398438
    ],
    [
        48.7351349036358,
      19.458505399525166
    ]
  ]

var polygon2 =[
    [
        49.123769891142764,
      18.982315063476562
    ],
    [
        49.14847850429909,
      19.013900756835938
    ],
    [
        49.15790945299408,
      19.059906005859375
    ],
    [
        49.14713107934596,
      19.101104736328125
    ],
    [
        49.150275013903794,
      19.13818359375
    ],
    [
        49.17631708317648,
      19.129257202148434
    ],
    [
        49.18664031858177,
      19.180068969726562
    ],
    [
        49.21849411435681,
      19.210281372070312
    ],
    [
        49.25794640246735,
      19.216461181640625
    ],
    [
        49.256153800301036,
      19.10385131835937
    ],
    [
        49.24718981286537,
      19.017333984375
    ],
    [
        49.18798666879189,
      18.885498046875
    ],
    [
        49.16464474569078,
      18.88275146484375
    ],
    [
        49.13679960399857,
      18.896484375
    ],
    [
        49.123766380521666,
      18.982333838939667
    ]
  ]
var polygon3 = 
[
    [
        49.101746387895574,
      19.125823974609375
    ],
    [
        49.0027448364445,
      19.1107177734375
    ],
    [
        49.005447494058096,
      19.00360107421875
    ],
    [
        48.909864610926675,
      18.903350830078125
    ],
    [
        48.89180956320587,
      18.919830322265625
    ],
    [
        48.87736082887189,
      18.8909912109375
    ],
    [
        48.85116185716921,
      18.928070068359375
    ],
    [
        48.855679899769,
      18.999481201171875
    ],
    [
        48.81952414194507,
      19.04205322265625
    ],
    [
        48.865618158309374,
      19.167022705078125
    ],
    [
        48.91257230555584,
      19.169769287109375
    ],
    [
        48.95407191575548,
      19.261779785156246
    ],
    [
        48.99193273920089,
      19.2041015625
    ],
    [
        49.06486885623368,
      19.213714599609375
    ],
    [
        49.10176394879165,
      19.125797152519226
    ]
]
//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Greater farta Natural Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Mala Farta National Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Polanda Protected Landscape area.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

//monuments
L.marker([49.26201232241269, 19.359021509605817],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Orava Castle</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([49.03953430529116, 19.27801123133447],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Vlkolinec</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([49.28677743369211, 21.269835728152714],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bardejov</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>')
.openPopup();

L.marker([48.99968194348498, 20.767940851927445],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Spis Castle</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([48.5173973521273, 18.919174939799593],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Banska Stiavnica</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>')
.openPopup();

L.marker([49.212674124872095, 20.121167276679245],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>High Tatras</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();


//cities
L.marker([48.311791651899036, 18.070614006567418],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nitra.</b><hr><i>Population: 77,603</i><br><i>Area: 100.5 km<sup>2</sup></i><br><i>Elevation: 167 m</i><hr><i>Nitra is a city in western Slovakia, situated at the foot of Zobor Mountain in the valley of the river Nitra.</i>')
.openPopup();

L.marker([48.84204277459344, 19.158964794791576],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Banská Bystrica.</b><hr><i>Population: 78,758</i><br><i>Area: 103.4 km<sup>2</sup></i><br><i>Elevation: 368 m</i><hr><i>Banská Bystrica is a city in central Slovakia located on the Hron River in a long and wide valley encircled by the mountain chains of the Low Tatras, the Veľká Fatra, and the Kremnica Mountains.</i>')
.openPopup();

L.marker([49.217418140637655, 18.738528627520484],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Žilina.</b><hr><i>Population: 81,094</i><br><i>Area: 80  km<sup>2</sup></i><br><i>Elevation: 378 m</i><hr><i>Žilina is a city in north-western Slovakia, around 200 kilometres from the capital Bratislava, close to both the Czech and Polish borders.</i>')
.openPopup();

L.marker([49.002469539522856, 21.23720083735469],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prešov.</b><hr><i>Population: 89,872</i><br><i>Area: 70.43 km<sup>2</sup></i><br><i>Elevation: 296 m</i><hr><i>Prešov is a city in Eastern Slovakia. It is a seat of the administrative Prešov Region and Šariš as well as the historic Sáros County of the Kingdom of Hungary.</i>')
.openPopup();

L.marker([48.72203788044131, 21.256532952408698],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Košice.</b><hr><i>Population: 238,757</i><br><i>Area: 242.8 km<sup>2</sup></i><br><i>Elevation: 208 m</i><hr><i>Košice is a city in eastern Slovakia, close to the Hungarian border.</i>')
.openPopup();

L.marker([48.15043737772495, 17.100639332663736],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bratislava.</b><hr><i>Population: 424,428</i><br><i>Area: 367.6 km<sup>2</sup></i><br><i>Elevation: 367.6 m</i><hr><i>Bratislava, the capital of Slovakia, is set along the Danube River by the border with Austria and Hungary.</i>')
.openPopup();