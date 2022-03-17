var map = L.map('map').setView([50.620948, 4.528359], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5, 35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/monument.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});


var polygon1 = [
    [
		51.06897617696871, 5.6669041705638845
    ],
    [
        51.06487106803357, 5.668129016091213
    ],
    [
        51.06718023660827, 5.673436680042968
    ],
    [
        51.0445967556324, 5.665679325036558
    ],
    [
        51.03971933095988, 5.67956090767961
    ],
    [
        51.03343118440361, 5.679003670663465
    ],
    [
        51.026789750849815, 5.653331482013734
    ],
    [
        51.037573835868955, 5.661905470585442
    ],
    [
        51.03680362730155, 5.6453699211971475
    ],
    [
        50.99943314230812, 5.589638995481046
    ],
    [
        50.98517048498446, 5.593313562011779
    ],
    [
        50.99673513791256, 5.560242463235191
    ],
    [
        50.96473255538789, 5.565141885276167
    ],
    [
        50.957789325489266, 5.583514717929827
    ],
    [
        50.95894660252849, 5.614136105685926
    ],
    [
        50.935795585089316, 5.595763273032267
    ],
    [
        50.92010133743917, 5.615589932477994
    ],
    [
        50.906238271353395, 5.613826732831396
    ],
    [
        50.903479519921774, 5.600702529038649
    ],
    [
        50.92416617107043, 5.554330342304278
    ],
    [
        50.916720035917415, 5.54645582002863
    ],
    [
        50.901824190592784, 5.566579599177508
    ],
    [
        50.88847118221835, 5.585566980796181
    ],
    [
        50.895617923328395, 5.615294587038593
    ],
    [
        50.906872558591495, 5.625896072820468
    ],
    [
        50.91132908785107, 5.626956221398655
    ],
    [
        50.89673236499439, 5.664238113064913
    ],
    [
        50.89951835248143, 5.674309524557694
    ],
    [
        50.910660635662325, 5.657523838736393
    ],
    [
        50.92703495080345, 5.6684787073776635
    ],
    [
        50.92552250309543, 5.6600291986862
    ],
    [
        50.97472635783066, 5.667993524858412
    ],
    [
        50.97747635144684, 5.658744629948746
    ],
    [
        50.986372275384475, 5.6805823000476465
    ],
    [
        51.00189561969059, 5.667993526420601
    ],
    [
        51.03357299257622, 5.6977955211295255
    ],
    [
        51.04245816309071, 5.687262057482405
    ],
    [
        51.0787914302599, 5.699595646618342
    ],
	
  ]


var polygon2 = [
    [
        51.36387912250474, 3.3423754175112634
    ],
    [
        51.36337001190319, 3.3420320947735402
    ],
    [
        51.36330302324484, 3.342804570933418
    ],
    [
        51.3611325376968, 3.3452078300974812
    ],
    [
        51.36056980243087, 3.351301808692069
    ],
    [
        51.35782301916478, 3.354949612780379
    ],
    [
        51.3528710744225, 3.3630699256837246
    ],
    [
        51.349545030586825, 3.3634803342004194
    ],
    [
        51.34318859336244, 3.3676664678594235
    ],
    [
        51.34760663594747, 3.3751004634896575
    ],
    [
        51.348598382886614, 3.3739456680519515
    ],
    [
        51.35794336711758, 3.3744457905581897
    ],
    [
		51.35933680785927, 3.3747277663094795
    ],
    [
        51.36601269640055, 3.3688076795928574
    ],
    [
        51.36692366296828, 3.3641621127777808
    ],
    [
        51.365771741498115, 3.3615736852335303
    ],
    [
        51.36430720236777, 3.34908745956333
    ],
    [
        51.36480289777832, 3.3459117721096376
    ],
    [
        51.36392416133026, 3.342375211081662
    ]
  ]
  
  var polygon3 = [
    [
        51.42114602230781, 4.3844857669773205
    ],
	[
		51.408507031746474, 4.3916319826759525
	],
    [
        51.37541430365116, 4.431864304783132
    ],
    [
        51.37166377453211, 4.42534117276639
    ],
    [
        51.36416179418428, 4.431349321226767
    ],
    [
        51.37252106539198, 4.457613511350372
    ],
    [
        51.37702157940426, 4.450575396100924
    ],
    [
        51.40369411078687, 4.463106676027825
    ],
    [
        51.42178829702997, 4.463621660134408
    ],
    [
        51.42692616839461, 4.431864306895005
    ],
    [
        51.42253760591502, 4.435297534272239
    ],
    [
        51.42542768224983, 4.424997852140541
    ],
    [
        51.42146716088987, 4.425512836247126
    ],
    [
        51.42114602248704, 4.384314106619889
    ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Hoge Kempen National Park.</b><hr><i> One of the nature preserves in Belgium.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>The Zwin.</b><hr><i> One of the nature preserves in Belgium.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>De Zoom– Kalmthoutse Heide.</b><hr><i> One of the nature preserves in Belgium.</i>')
  .openPopup();


//monuments
L.marker([50.84709578238636, 4.352481425544326],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Grand-Place de Bruxelles</b><hr><i>One of the most popular tourist destinations in Belgium.</i>')
.openPopup();

L.marker([51.22610210683549, 3.281152709019281],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Belfry of Bruges</b><hr><i>One of the most popular tourist destinations in Belgium.</i>")
.openPopup();

L.marker([51.05768427970214, 3.721069292465888],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Gravensteen</b><hr><i>One of the most popular tourist destinations in Belgium.</i>')
.openPopup();

L.marker([51.053216768706605, 3.727584811505701],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Saint Bavo's Cathedral</b><hr><i>One of the most popular tourist destinations in Belgium.</i>")
.openPopup();

L.marker([51.20835608984874, 3.2271026980168456],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Basilica of the Holy Blood</b><hr><i>One of the most popular tourist destinations in Belgium.</i>')
.openPopup();

L.marker([50.88541882987309, 4.712136557500243],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Saint Peter's Church of Leuven</b><hr><i>One of the most popular tourist destinations in Belgium.</i>")
.openPopup();

L.marker([50.722472689331646, 4.378496844247709],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Waterloo</b><hr><i>One of the most popular tourist destinations in Belgium.</i>')
.openPopup();


//cities
L.marker([51.05966, 3.72912],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ghent.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.22878, 4.40136112],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Antwerpen.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.21080, 3.224591],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brugge.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.63255, 5.56805],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liege.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.46641, 4.86376],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Namur.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.85017, 4.36192],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brussels.</b><hr><i> The capital city of Belgium.</i>')
.openPopup();