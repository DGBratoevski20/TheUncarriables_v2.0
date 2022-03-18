var map = L.map('map').setView([47.2, 2.41880], 6);

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
              48.60158729649512,
              -0.08651733398437499
            ],
            [
              48.58705488479709,
              -0.0981903076171875
            ],
            [
              48.577515717867044,
              -0.081024169921875
            ],
            [
              48.568883491709244,
              -0.1043701171875
            ],
            [
              48.55979534565516,
              -0.098876953125
            ],
            [
              48.54661463307771,
              -0.045318603515625
            ],
            [
              48.54252336892718,
              -0.01373291015625
            ],
            [
              48.53979567575707,
              -0.00823974609375
            ],
            [
              48.54343256731947,
              0.01922607421875
            ],
            [
              48.517968838568294,
              0.0048065185546875
            ],
            [
              48.511146022547344,
              -0.032958984375
            ],
            [
              48.513875259211225,
              -0.05424499511718749
            ],
            [
              48.506596968085894,
              -0.06797790527343749
            ],
            [
              48.49704262447178,
              -0.05699157714843749
            ],
            [
              48.50159253651377,
              -0.04669189453125
            ],
            [
              48.49294735446591,
              -0.0240325927734375
            ],
            [
              48.49977262070255,
              -0.02197265625
            ],
            [
              48.50523217211621,
              0.04669189453125
            ],
            [
              48.49749763405313,
              0.0714111328125
            ],
            [
              48.512510659255334,
              0.1153564453125
            ],
            [
              48.52024290640028,
              0.1078033447265625
            ],
            [
              48.517514012751505,
              0.12084960937499999
            ],
            [
              48.52888343314758,
              0.12084960937499999
            ],
            [
              48.53615852287704,
              0.111236572265625
            ],
            [
              48.54706919756837,
              0.1462554931640625
            ],
            [
              48.54252336892718,
              0.155181884765625
            ],
            [
              48.54843286654265,
              0.155181884765625
            ],
            [
              48.54888741470154,
              0.1696014404296875
            ],
            [
              48.558431982894355,
              0.16204833984375
            ],
            [
              48.568883491709244,
              0.1558685302734375
            ],
            [
              48.55615962997105,
              0.0933837890625
            ],
            [
              48.564339622814806,
              0.092010498046875
            ],
            [
              48.5743355954839,
              0.12908935546875
            ],
            [
              48.585238039418606,
              0.1263427734375
            ],
            [
              48.59159671248723,
              0.0954437255859375
            ],
            [
              48.570246572767076,
              0.06797790527343749
            ],
            [
              48.56206753526866,
              0.0130462646484375
            ],
            [
              48.56388521347092,
              -0.0226593017578125
            ],
            [
              48.58114989850295,
              -0.0274658203125
            ],
            [
              48.58114989850295,
              -0.04119873046875
            ],
            [
              48.56797475059117,
              -0.0384521484375
            ],
            [
              48.571155273059546,
              -0.04875183105468749
            ],
            [
              48.59477574898104,
              -0.05218505859375
            ],
            [
              48.60431165833416,
              -0.06591796875
            ],
            [
              48.60158729649512,
              -0.08651733398437499
            ]
  ]


var polygon2 = [
			[
              48.767787376170105,
              1.9633769989013672
            ],
            [
              48.76710850675318,
              1.961660385131836
            ],
            [
              48.76495869305272,
              1.9609737396240234
            ],
            [
              48.76484554241387,
              1.9593429565429688
            ],
            [
              48.76077194962675,
              1.959428787231445
            ],
            [
              48.76309167491164,
              1.9660377502441408
            ],
            [
              48.76422320934319,
              1.9660377502441408
            ],
            [
              48.76416663322709,
              1.964406967163086
            ],
            [
              48.76575074038647,
              1.964406967163086
            ],
            [
              48.76609018541975,
              1.9654369354248047
            ],
            [
              48.763487714862606,
              1.967153549194336
            ],
            [
              48.76416663322709,
              1.968870162963867
            ],
            [
              48.76671249535505,
              1.9660377502441408
            ],
            [
              48.766655922043235,
              1.9654369354248047
            ],
            [
              48.767787376170105,
              1.9633769989013672
            ]
  ]
  
  var polygon3 = [
			[
              48.75618876280552,
              1.9499874114990234
            ],
            [
              48.75318966115,
              1.9467687606811521
            ],
            [
              48.75112413797833,
              1.9511461257934568
            ],
            [
              48.752623772835896,
              1.9521331787109373
            ],
            [
              48.752821834470836,
              1.9532918930053709
            ],
            [
              48.753133072605415,
              1.9530773162841795
            ],
            [
              48.754179950362875,
              1.953849792480469
            ],
            [
              48.754434593005485,
              1.9532489776611328
            ],
            [
              48.754717527761315,
              1.953849792480469
            ],
            [
              48.754604354050194,
              1.95406436920166
            ],
            [
              48.75477411452126,
              1.9542360305786133
            ],
            [
              48.755057047364936,
              1.953721046447754
            ],
            [
              48.75556632246816,
              1.9538068771362302
            ],
            [
              48.75616047023023,
              1.9532918930053709
            ],
            [
              48.756415102834275,
              1.9524765014648438
            ],
            [
              48.75579266530133,
              1.9516611099243166
            ],
            [
              48.75562290827208,
              1.9507169723510742
            ],
            [
              48.75618876280552,
              1.9499874114990234
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Foret domaniale d`Ecouves.</b><hr><i> One of the nature preserves in Estonia.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Coulee verte de la Villadieu.</b><hr><i> One of the nature preserves in Estonia.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Parc du Chateau de la Verriere.</b><hr><i> One of the nature preserves in Estonia.</i>')
  .openPopup();


//monuments
L.marker([48.80494576172443, 2.120157413583311],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Château de Versailles</b><hr><i>One of the most popular tourist destinations in France.</i>")
.openPopup();

L.marker([48.63591941049683, -1.5113202248844833],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Mont Saint-Michel</b><hr><i>One of the most popular tourist destinations in France.</i>")
.openPopup();

L.marker([48.447799873097516, 1.487820239330474],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cathédrale Notre-Dame de Chartres</b><hr><i>One of the most popular tourist destinations in France.</i>')
.openPopup();

L.marker([45.86517408576714, 6.887266427201082],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Chamonix-Mont-Blanc</b><hr><i>One of the most popular tourist destinations in France.</i>')
.openPopup();

L.marker([43.20990612595836, 2.3318619261475244],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Carcassonne</b><hr><i>One of the most popular tourist destinations in France.</i>')
.openPopup();

L.marker([43.48354338897869, -1.5586911150619458],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Biarritz</b><hr><i>One of the most popular tourist destinations in France.</i>')
.openPopup();

L.marker([44.80209574256782, 1.6204141805287549],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rocamadour</b><hr><i>One of the most popular tourist destinations in France.</i>')
.openPopup();

// cities
L.marker([43.35713822211053,5.361328125],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Marseille.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([45.73685954736049, 4.833984374999999],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lyon.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([43.60625069174641, 1.4447021484374998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Toulouse.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([43.70138869210391, 7.269172668457031],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nice.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();


L.marker([47.22329888685773,  -1.5545654296874998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Montepellier.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([47.2232988885773,  -1.5545654296874998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nantes.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([44.84418558537004,  -0.582275390625],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bordeaux.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([48.592959181191695,  7.750854492187499],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Strasbourg.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();


L.marker([48.8641, 2.35336],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Paris.</b><hr><i> The capital city of France.</i>')
.openPopup();