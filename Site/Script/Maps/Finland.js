var map = L.map('map').setView([65.27308, 27.28202], 5);

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
              61.96994329935749,
              23.358650207519528
            ],
            [
              61.95977723176091,
              23.357276916503906
            ],
            [
              61.95816325870665,
              23.3514404296875
            ],
            [
              61.93426647548581,
              23.35590362548828
            ],
            [
              61.93087420038689,
              23.363800048828125
            ],
            [
              61.91326062496328,
              23.369979858398438
            ],
            [
              61.91326062496328,
              23.378562927246094
            ],
            [
              61.90970436019562,
              23.379249572753906
            ],
            [
              61.909381042889436,
              23.38886260986328
            ],
            [
              61.902752284767615,
              23.390235900878906
            ],
            [
              61.88301918820573,
              23.40259552001953
            ],
            [
              61.88301918820573,
              23.411521911621094
            ],
            [
              61.89272557991797,
              23.41323852539062
            ],
            [
              61.89401953292948,
              23.42182159423828
            ],
            [
              61.89887136945339,
              23.422164916992188
            ],
            [
              61.90420750108401,
              23.434181213378906
            ],
            [
              61.905015924679205,
              23.44482421875
            ],
            [
              61.91002767408355,
              23.45409393310547
            ],
            [
              61.90000335394442,
              23.456497192382812
            ],
            [
              61.89078454781127,
              23.457870483398438
            ],
            [
              61.88172477007169,
              23.50490570068359
            ],
            [
              61.89967993407799,
              23.505592346191406
            ],
            [
              61.916654855526275,
              23.48705291748047
            ],
            [
              61.9195638961029,
              23.477783203124996
            ],
            [
              61.92764311199831,
              23.475379943847656
            ],
            [
              61.93071265408207,
              23.479156494140625
            ],
            [
              61.93798139224157,
              23.464393615722656
            ],
            [
              61.9378198835161,
              23.44379425048828
            ],
            [
              61.95219081617638,
              23.44585418701172
            ],
            [
              61.95445079673577,
              23.451004028320312
            ],
            [
              61.96413453265996,
              23.450660705566406
            ],
            [
              61.97397651442142,
              23.43830108642578
            ],
            [
              61.976718796040124,
              23.40534210205078
            ],
            [
              61.96461863879657,
              23.39435577392578
            ],
            [
              61.963811790968165,
              23.38165283203125
            ],
            [
              61.96768446595687,
              23.375816345214844
            ],
            [
              61.96639362891431,
              23.373069763183594
            ],
            [
              61.94880053159287,
              23.385086059570312
            ],
            [
              61.94363365963514,
              23.372039794921875
            ],
            [
              61.95089932358717,
              23.365516662597656
            ],
            [
              61.95541930861176,
              23.374099731445312
            ],
            [
              61.9689752483813,
              23.36139678955078
            ],
            [
              61.96994329935749,
              23.358650207519528
            ]
  ]


var polygon2 = [
			[
              63.29263064353181,
              24.60662841796875
            ],
            [
              63.254956632991515,
              24.743270874023438
            ],
            [
              63.242902921685726,
              24.748077392578125
            ],
            [
              63.24352118311121,
              24.775543212890625
            ],
            [
              63.21630515996689,
              24.832534790039062
            ],
            [
              63.24413943130473,
              24.841461181640625
            ],
            [
              63.24413943130473,
              24.852447509765625
            ],
            [
              63.25217545380908,
              24.857254028320312
            ],
            [
              63.25557463643204,
              24.87716674804687
            ],
            [
              63.27071158919724,
              24.853134155273438
            ],
            [
              63.28059266177026,
              24.79888916015625
            ],
            [
              63.31206599967475,
              24.78790283203125
            ],
            [
              63.30620592365014,
              24.764556884765625
            ],
            [
              63.28645794737014,
              24.767303466796875
            ],
            [
              63.300036134543824,
              24.736404418945312
            ],
            [
              63.31884986161489,
              24.680099487304684
            ],
            [
              63.31884986161489,
              24.654693603515625
            ],
            [
              63.29263064353181,
              24.60662841796875
            ]
  ]
  
  var polygon3 = [
			[
              63.913831547524325,
              29.037551879882812
            ],
            [
              63.91473733306567,
              29.021072387695312
            ],
            [
              63.90779222975061,
              29.018325805664062
            ],
            [
              63.909151189598866,
              29.008369445800785
            ],
            [
              63.90356393373293,
              29.007682800292965
            ],
            [
              63.902204703275636,
              29.00356292724609
            ],
            [
              63.90386597600604,
              28.996696472167972
            ],
            [
              63.8993350005692,
              28.99120330810547
            ],
            [
              63.899637088355156,
              28.987083435058594
            ],
            [
              63.89767345963204,
              28.98433685302734
            ],
            [
              63.89812661691396,
              28.97472381591797
            ],
            [
              63.89404793801676,
              28.97472381591797
            ],
            [
              63.88891098086903,
              29.006309509277344
            ],
            [
              63.87939001720202,
              29.00115966796875
            ],
            [
              63.88075035246135,
              28.990516662597656
            ],
            [
              63.88347082537768,
              28.991889953613278
            ],
            [
              63.88437759113695,
              28.98639678955078
            ],
            [
              63.88075035246135,
              28.984680175781246
            ],
            [
              63.88135492476689,
              28.967857360839844
            ],
            [
              63.866690378027336,
              28.96991729736328
            ],
            [
              63.858977082475825,
              28.98571014404297
            ],
            [
              63.84293875598863,
              29.004592895507816
            ],
            [
              63.84702485808786,
              29.141921997070312
            ],
            [
              63.86124591848476,
              29.139175415039062
            ],
            [
              63.866690378027336,
              29.12372589111328
            ],
            [
              63.87425037840635,
              29.129562377929688
            ],
            [
              63.885888802354046,
              29.1192626953125
            ],
            [
              63.88815546672915,
              29.10072326660156
            ],
            [
              63.90084540698831,
              29.078750610351566
            ],
            [
              63.900543332206574,
              29.064674377441406
            ],
            [
              63.913831547524325,
              29.037551879882812
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Lauhanvuoren Kansallispuisto National Park.</b><hr><i> One of the nature preserves in Finland.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Salamajarvi National Park.</b><hr><i> One of the nature preserves in Finland.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Hiidenportti National Park.</b><hr><i> One of the nature preserves in Finland.</i>')
  .openPopup();



//monuments
L.marker([60.14538123309489, 24.988111646825423],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Suomenlinna Fortress</b><hr><i>One of the most popular tourist destinations in Finland.</i>")
.openPopup();

L.marker([60.220627657500735, 20.688853444513597],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Åland Archipelago</b><hr><i>One of the most popular tourist destinations in Finland.</i>")
.openPopup();

L.marker([60.39319387989489, 25.665129055817733],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Porvoo</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([61.86796110124743, 28.886257984387868],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Savonlinna</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([63.09514987914709, 21.616621571998774],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Vaasa</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([65.0121581086502, 25.465299354233675],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Oulu</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([60.99279125880206, 24.458782906648725],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hameenlinna</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

// cities
L.marker([61.49693,23.76023],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tampere.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.20530,24.66009],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Espoo.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.30552,25.03812],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vantaa.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.45194,22.26677],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Turku.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.17003, 24.93626],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Helsinki.</b><hr><i> The capital city of Finland.</i>')
.openPopup();