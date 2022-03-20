var map = L.map('map').setView([52.1773188797716, 19.63282019793907], 6);

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
        49.276316821041135,
      19.822425842285156
    ],
    [
        49.26959672962893,
      19.79633331298828
    ],
    [
        49.246965692324494,
      19.785003662109375
    ],
    [
        49.238000036465465,
      19.76852416992187
    ],
    [
        49.216027299936215,
      19.75719451904297
    ],
    [
        49.20503726723141,
      19.77916717529297
    ],
    [
        49.19830746998781,
      19.79461669921875
    ],
    [
        49.205485887818945,
      19.808692932128906
    ],
    [
        49.19920482920086,
      19.82208251953125
    ],
    [
        49.201223827901714,
      19.831695556640625
    ],
    [
        49.193147338549174,
      19.841995239257812
    ],
    [
        49.19628835222938,
      19.869461059570312
    ],
    [
        49.2140089056539,
      19.9017333984375
    ],
    [
        49.23082633976077,
      19.905166625976562
    ],
    [
        49.2359825395677,
      19.931602478027344
    ],
    [
        49.231723108823424,
      19.982070922851562
    ],
    [
        49.22028808387943,
      20.01022338867187
    ],
    [
        49.20144815600279,
      20.020523071289062
    ],
    [
        49.17856144796902,
      20.078201293945312
    ],
    [
        49.18013244277108,
      20.087127685546875
    ],
    [
        49.205934504336255,
      20.086097717285156
    ],
    [
        49.222081988283755,
      20.100860595703125
    ],
    [
        49.252344304524165,
      20.102920532226562
    ],
    [
        49.279004601275915,
      20.130043029785156
    ],
    [
        49.29915828440903,
      20.1324462890625
    ],
    [
        49.30363576187125,
      20.10566711425781
    ],
    [
        49.33272944976965,
      20.076828002929688
    ],
    [
        49.33004459856528,
      20.064468383789062
    ],
    [
        49.30990354687672,
      20.076828002929688
    ],
    [
        49.31214184829101,
      20.093994140624996
    ],
    [
        49.29602380812735,
      20.08026123046875
    ],
    [
        49.321989166353404,
      20.05279541015625
    ],
    [
        49.299606050462074,
      20.046615600585938
    ],
    [
        49.29781496184064,
      20.0225830078125
    ],
    [
        49.287067063161125,
      20.01983642578125
    ],
    [
        49.276315946088836,
      19.822426177561283
    ]
  ]
var polygon2 = [
    [
        52.72880745669853,
      23.937835693359375
    ],
    [
        52.70426690641694,
      23.83209228515625
    ],
    [
        52.746684245687945,
      23.721542358398438
    ],
    [
        52.77743178879529,
      23.71536254882812
    ],
    [
        52.79113653258534,
      23.72772216796875
    ],
    [
        52.82143775410805,
      23.753814697265625
    ],
    [
        52.83305453774939,
      23.83621215820312
    ],
    [
        52.82019291448827,
      23.935089111328125
    ],
    [
        52.728805223265944,
      23.937835358083245
    ]
  ]
var polygon3 = [
    [
        50.21470089197037,
      19.77264404296875
    ],
    [
        50.169861746007314,
      19.839935302734375
    ],
    [
        50.17425960242971,
      19.853668212890625
    ],
    [
        50.199759188312065,
      19.83100891113281 
    ],
    [
        50.20591222106041,
      19.847488403320312
    ],
    [
        50.222609311890224,
      19.848175048828125
    ],
    [
        50.24896124371442,
      19.8138427734375
    ],
    [
        50.24500938246365,
      19.771270751953125
    ],
    [
        50.23490869265562,
      19.784317016601562
    ],
    [
        50.23271260731141,
      19.807662963867188
    ],
    [
        50.21953397103998,
      19.821395874023438
    ],
    [
        50.226123744371364,
      19.793243408203125
    ],
    [
        50.21469831740145,
      19.772635996341705
    ]
  ]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Tatrazinski National Park.</b><hr><i> One of the nature preserves in Poland.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Białowieża National Park.</b><hr><i> One of the nature preserves in Poland.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Ojcowski National Park.</b><hr><i> One of the nature preserves in Poland.</i>')
.openPopup();

//monuments
L.marker([50.3095646076892, 18.67856971046181],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Memorial and Museum Auschwitz I</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([52.25568341711586, 21.009310655114284],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Warsaw Old Town</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([54.03999828819079, 19.028624242277974],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Malbork Castle</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([50.04760870746531, 19.962045667299172],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Schindler's Factory</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([53.21430039602068, 14.476746349648879],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Crooked Forest</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([53.21430039602068, 14.476746349648879],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Wolf's Lair</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();


// cities
L.marker([54.36156691700089, 18.61455855745029],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Gdańsk.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([51.24963709545433, 22.56922563861176],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lublin.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([53.126884697234374, 18.007072291466972],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bydgoszcz.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([52.40910888940215, 16.92649488944622],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Poznań.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([51.761687647656515, 19.457853920144267],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Łódź.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([50.07267808451097, 19.93629863608337],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kraków.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([52.23109118169717, 21.004082355745474],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Warsaw.</b><hr><i> The capital city of Poland.</i>')
.openPopup();