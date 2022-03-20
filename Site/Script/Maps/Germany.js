var map = L.map('map').setView([51.42070, 10.43204], 6);

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
              51.892596535517995,
              10.61004638671875
            ],
            [
              51.69554394591284,
              10.318908691406248
            ],
            [
              51.66744494147575,
              10.361480712890625
            ],
            [
              51.698097536240525,
              10.41778564453125
            ],
            [
              51.72617752055949,
              10.419158935546875
            ],
            [
              51.73808497487476,
              10.46173095703125
            ],
            [
              51.69554394591284,
              10.460357666015625
            ],
            [
              51.66914840783795,
              10.53314208984375
            ],
            [
              51.68617954855624,
              10.57159423828125
            ],
            [
              51.76699001900172,
              10.6402587890625
            ],
            [
              51.760190496399375,
              10.702056884765625
            ],
            [
              51.77378851755184,
              10.724029541015625
            ],
            [
              51.84171719308102,
              10.66497802734375
            ],
            [
              51.892596535517995,
              10.667724609375
            ],
            [
              51.89768130456134,
              10.614166259765623
            ],
            [
              51.892596535517995,
              10.61004638671875
            ]
  ]


var polygon2 = [
			[
              53.253712042468464,
              9.849243164062498
            ],
            [
              53.19616119954287,
              9.82452392578125
            ],
            [
              53.15253552862651,
              9.84100341796875
            ],
            [
              53.13276591360896,
              9.80804443359375
            ],
            [
              53.08577660238899,
              9.806671142578125
            ],
            [
              53.068451806558706,
              9.8382568359375
            ],
            [
              53.095673355930195,
              9.864349365234375
            ],
            [
              53.08330205836349,
              9.895935058593748
            ],
            [
              53.03956165303218,
              9.8712158203125
            ],
            [
              53.02717422874229,
              9.895935058593748
            ],
            [
              53.06102475986279,
              9.931640625
            ],
            [
              53.05607268392864,
              9.95361328125
            ],
            [
              53.07670257877685,
              9.957733154296875
            ],
            [
              53.08660141878404,
              9.9371337890625
            ],
            [
              53.1072166918934,
              9.92889404296875
            ],
            [
              53.13111803493987,
              9.9810791015625
            ],
            [
              53.15171197633304,
              10.03326416015625
            ],
            [
              53.17558858019308,
              10.0579833984375
            ],
            [
              53.26274871542287,
              9.96734619140625
            ],
            [
              53.270140936902166,
              9.905548095703125
            ],
            [
              53.24796043831028,
              9.89044189453125
            ],
            [
              53.253712042468464,
              9.849243164062498
            ]
  ]
  
  var polygon3 = [
			[
              50.622459375045366,
              7.21527099609375
            ],
            [
              50.583236614805884,
              7.224884033203126
            ],
            [
              50.5780044432562,
              7.267456054687499
            ],
            [
              50.44526214970796,
              7.39654541015625
            ],
            [
              50.465372121864185,
              7.495422363281249
            ],
            [
              50.440889285370865,
              7.566833496093749
            ],
            [
              50.47935662596124,
              7.583312988281249
            ],
            [
              50.49595785216966,
              7.678070068359375
            ],
            [
              50.51866586854534,
              7.671203613281251
            ],
            [
              50.5570699439854,
              7.546234130859374
            ],
            [
              50.59892964194682,
              7.59429931640625
            ],
            [
              50.60067298872855,
              7.64923095703125
            ],
            [
              50.6268154416189,
              7.63275146484375
            ],
            [
              50.645977340713586,
              7.525634765624999
            ],
            [
              50.61810290492478,
              7.436370849609375
            ],
            [
              50.641623049601776,
              7.340240478515625
            ],
            [
              50.622459375045366,
              7.21527099609375
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Harz National Park.</b><hr><i> One of the nature preserves in Germany.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Naturschutzgebiet Luneburger Heide.</b><hr><i> One of the nature preserves in Germany.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Rhine Westerwald.</b><hr><i> One of the nature preserves in Germany.</i>')
  .openPopup();


//monuments
L.marker([50.94130734237991, 6.958154681547038],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Cologne Cathedral</b><hr><i>One of the most popular tourist destinations in Germany.</i>")
.openPopup();

L.marker([48.277356141340874, 8.184714654253856],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>The Black Forest</b><hr><i>One of the most popular tourist destinations in Germany.</i>")
.openPopup();

L.marker([50.161382435248534, 7.701484472380946],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rhine Valley</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([49.900586112762426, 10.89595117424217],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bamberg</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([47.42055455664908, 10.984663387589352],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Zugspitze Massif</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([47.558808875701466, 12.982057517230952],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Königssee</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([49.379357652267096, 10.185697975998362],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rothenburg</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();


// cities
L.marker([53.54030739150022, 10.01953125],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Hamburg.</b><hr><i>Population: 1,841,382</i><br><i>Area: 755.2 km<sup>2</sup></i><br><i>Elevation: 3 m</i><hr><i>Hamburg, a major port city in northern Germany, is connected to the North Sea by the Elbe River.</i>')
.openPopup();

L.marker([48.16608541901253,11.557617187499998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Munich.</b><hr><i>Population: 1,472,723</i><br><i>Area: 310.7 km<sup>2</sup></i><br><i>Elevation: 520 m</i><hr><i>Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums.</i>')
.openPopup();

L.marker([50.965346321637696,6.954345703125],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Köln.</b><hr><i>Population: 1,086,729</i><br><i>Area: 405.2 km<sup>2</sup></i><br><i>Elevation: 37 m</i><hr><i>Cologne, a 2,000-year-old city spanning the Rhine River in western Germany, is the region’s cultural hub.</i>')
.openPopup();

L.marker([50.127621728300475,8.690185546875],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Frankfurt.</b><hr><i>Population: 753,056</i><br><i>Area: 248.3 km<sup>2</sup></i><br><i>Elevation: 112 m</i><hr><i>Frankfurt, a central German city on the river Main, is a major financial hub that`s home to the European Central Bank.</i>')
.openPopup();

L.marker([51.46427482966439,7.00927734375],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Essen.</b><hr><i>Population: 583,109</i><br><i>Area: 210.3 km<sup>2</sup></i><br><i>Elevation: 116 m</i><hr><i>Essen is the central and, after Dortmund, second-largest city of the Ruhr, the largest urban area in Germany.</i>')
.openPopup();

L.marker([48.785151998043155,9.184570312499998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Stuttgard.</b><hr><i>Population: 634,830</i><br><i>Area: 207.4 km<sup>2</sup></i><br><i>Elevation: 245 m</i><hr><i>Stuttgart, capital of southwest Germany’s Baden-Württemberg state, is known as a manufacturing hub.</i>')
.openPopup();

L.marker([52.53627304145948, 13.38134765625],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Berlin.</b><hr><i>Population: 3,645,522</i><br><i>Area: 891.8 km<sup>2</sup></i><br><i>Elevation: 34 m</i><hr><i>Berlin, Germany’s capital, dates to the 13th century.</i>')
.openPopup();
