var map = L.map('map').setView([39, 24.73613], 7);

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
              38.24141597995489,
              23.636398315429688
            ],
            [
              38.17559185481662,
              23.630218505859375
            ],
            [
              38.10214399750345,
              23.696136474609375
            ],
            [
              38.10376496815196,
              23.718109130859375
            ],
            [
              38.1399572748485,
              23.729782104492188
            ],
            [
              38.15291731872143,
              23.77578735351562
            ],
            [
              38.10916794391597,
              23.805313110351562
            ],
            [
              38.118892293285704,
              23.825912475585938
            ],
            [
              38.14535757293734,
              23.82453918457031
            ],
            [
              38.154537162312145,
              23.838958740234375
            ],
            [
              38.191243965987326,
              23.784713745117188
            ],
            [
              38.23440476759944,
              23.773040771484375
            ],
            [
              38.23440476759944,
              23.735275268554688
            ],
            [
              38.22038031480122,
              23.72222900390625
            ],
            [
              38.24141597995489,
              23.636398315429688
            ]
  ]


var polygon2 = [
			[
              40.17520087148328,
              22.30636596679687
            ],
            [
              40.089103914208806,
              22.247314453125
            ],
            [
              40.02603705467397,
              22.285079956054688
            ],
            [
              40.00447583427404,
              22.276840209960938
            ],
            [
              39.973436758888646,
              22.379837036132812
            ],
            [
              39.98501230042296,
              22.389450073242188
            ],
            [
              39.99290359080194,
              22.44781494140625
            ],
            [
              40.01446846627284,
              22.484893798828125
            ],
            [
              40.024459635387906,
              22.535018920898438
            ],
            [
              40.08174912168242,
              22.492446899414062
            ],
            [
              40.08490127291967,
              22.5
            ],
            [
              40.10591188464232,
              22.504119873046875
            ],
            [
              40.15998434802335,
              22.433395385742188
            ],
            [
              40.17205290512079,
              22.383270263671875
            ],
            [
              40.18359473454382,
              22.320098876953125
            ],
            [
              40.17520087148328,
              22.30636596679687
            ]
  ]
  
  var polygon3 = [
			[
              40.81380923056958,
              21.069717407226562
            ],
            [
              40.8034148344062,
              21.078643798828125
            ],
            [
              40.80965166748853,
              21.099929809570312
            ],
            [
              40.77066184486565,
              21.12396240234375
            ],
            [
              40.71916022743469,
              21.090316772460938
            ],
            [
              40.69834018178775,
              21.039505004882812
            ],
            [
              40.66813955408042,
              21.054611206054688
            ],
            [
              40.62385529380968,
              21.056671142578125
            ],
            [
              40.65824326951416,
              21.105422973632812
            ],
            [
              40.676992879826386,
              21.153488159179688
            ],
            [
              40.70875101828792,
              21.130142211914062
            ],
            [
              40.718119379753446,
              21.161041259765625
            ],
            [
              40.73321007823572,
              21.169967651367184
            ],
            [
              40.7508982634657,
              21.185760498046875
            ],
            [
              40.77430186363723,
              21.182327270507812
            ],
            [
              40.791979118109566,
              21.188507080078125
            ],
            [
              40.803934592883806,
              21.196746826171875
            ],
            [
              40.81328954943147,
              21.19331359863281
            ],
            [
              40.82472159414295,
              21.15829467773437
            ],
            [
              40.837190668541105,
              21.147994995117188
            ],
            [
              40.85017679415775,
              21.117782592773438
            ],
            [
              40.824201998489904,
              21.094436645507812
            ],
            [
              40.81380923056958,
              21.069717407226562
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Mount Parnitha National Park.</b><hr><i> One of the nature preserves in Greece.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Mount Olympus National Park.</b><hr><i> One of the nature preserves in Greece.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Prespa National Park.</b><hr><i> One of the nature preserves in Greece.</i>')
  .openPopup();


//monuments
L.marker([37.96841458381345, 23.728447971298007],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Acropolis Museum</b><hr><i>One of the most popular tourist destinations in Greece.</i>")
.openPopup();

L.marker([36.39165833841528, 25.46319990392785],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Santorini</b><hr><i>One of the most popular tourist destinations in Greece.</i>")
.openPopup();

L.marker([37.44742030080499, 25.332221138396317],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mykonos</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([38.48233893970499, 22.500886952405395],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Delphi</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([39.72171502374944, 21.630470602872855],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Metéora Monasteries</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([36.434960008584845, 28.220903097024717],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rhodes Town</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([37.569591210557086, 22.8037182515751],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Nafplio</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();


// cities
L.marker([40.64487,22.94075],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Thessaloniki.</b><hr><i>Population: 325,182</i><br><i>Area: 19.31 km<sup>2</sup></i><br><i>Elevation: 250 m</i><hr><i>Thessaloniki is a Greek port city on the Thermaic Gulf of the Aegean Sea.</i>')
.openPopup();

L.marker([38.25069,21.73445],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Patra.</b><hr><i>Population: 195,265</i><br><i>Area: 125.4 km<sup>2</sup></i><br><i>Elevation: 10 m</i><hr><i>Patras is Greeces third-largest city and the regional capital of Western Greece, in the northern Peloponnese, 215 km west of Athens.</i>')
.openPopup();

L.marker([39.63809,22.41986],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Piraeus.</b><hr><i>Population: 163,688</i><br><i>Area: 10.9 km<sup>2</sup></i><br><i>Elevation: 51 m</i><hr><i>Piraeus is a port city within the Athens urban area, in the Attica region of Greece.</i>')
.openPopup();

L.marker([35.34213,25.14550],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Herakleion.</b><hr><i>Population: 225.500</i><br><i>Area: 245.1 km<sup>2</sup></i><br><i>Elevation: 15 m</i><hr><i>Heraklion, also known as Iraklio, is a port city and the capital of the Greek island of Crete.</i>')
.openPopup();

L.marker([37.98700, 23.72932],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Athens.</b><hr><i>Population: 3,167,155</i><br><i>Area: 38.96 km<sup>2</sup></i><br><i>Elevation: 20 m</i><hr><i>Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.</i>')
.openPopup();