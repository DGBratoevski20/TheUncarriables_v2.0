var map = L.map('map').setView([47.16157, 19.49207], 6);

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
              47.74117041801028,
              21.23382568359375
            ],
            [
              47.712533675859476,
              21.117095947265625
            ],
            [
              47.692201274744136,
              21.09100341796875
            ],
            [
              47.68942806015855,
              21.001739501953125
            ],
            [
              47.66816184901461,
              21.03607177734375
            ],
            [
              47.64318610543658,
              21.016845703125
            ],
            [
              47.615421267605434,
              21.000366210937496
            ],
            [
              47.622826666563675,
              20.966033935546875
            ],
            [
              47.6080148197327,
              20.990753173828125
            ],
            [
              47.58486290927609,
              20.993499755859375
            ],
            [
              47.57652571374621,
              20.933074951171875
            ],
            [
              47.61264397257417,
              20.90286254882812
            ],
            [
              47.60431120244565,
              20.865783691406246
            ],
            [
              47.56448075401425,
              20.8575439453125
            ],
            [
              47.543163654317304,
              20.905609130859375
            ],
            [
              47.557067094186735,
              20.9674072265625
            ],
            [
              47.56911375866714,
              20.99212646484375
            ],
            [
              47.54965238525127,
              20.990753173828125
            ],
            [
              47.53203824675999,
              20.990753173828125
            ],
            [
              47.535746978239125,
              20.953674316406246
            ],
            [
              47.502358951968574,
              20.946807861328125
            ],
            [
              47.50143120349543,
              20.9344482421875
            ],
            [
              47.475447589655055,
              20.94268798828125
            ],
            [
              47.47359112535713,
              20.8905029296875
            ],
            [
              47.41322033016902,
              20.89874267578125
            ],
            [
              47.42065432071318,
              20.93170166015625
            ],
            [
              47.409502941311075,
              21.00860595703125
            ],
            [
              47.357431944587034,
              21.026458740234375
            ],
            [
              47.32393057095941,
              21.018218994140625
            ],
            [
              47.330446391855595,
              21.09649658203125
            ],
            [
              47.39741961534644,
              21.111602783203125
            ],
            [
              47.414149636384714,
              21.07177734375
            ],
            [
              47.4355191531953,
              21.082763671875
            ],
            [
              47.431803338643334,
              21.047058105468746
            ],
            [
              47.44852243794931,
              21.045684814453125
            ],
            [
              47.454094290400015,
              21.08001708984375
            ],
            [
              47.44016355242185,
              21.11846923828125
            ],
            [
              47.44294999517949,
              21.134948730468746
            ],
            [
              47.44945112101852,
              21.15829467773437
            ],
            [
              47.45780853075031,
              21.180267333984375
            ],
            [
              47.468949677672484,
              21.167907714843746
            ],
            [
              47.49957565736371,
              21.191253662109375
            ],
            [
              47.52461999690651,
              21.191253662109375
            ],
            [
              47.54038252373696,
              21.229705810546875
            ],
            [
              47.5153457091302,
              21.236572265625
            ],
            [
              47.512563103108036,
              21.26678466796875
            ],
            [
              47.53203824675999,
              21.255798339843746
            ],
            [
              47.53852835471765,
              21.24755859375
            ],
            [
              47.56170075451973,
              21.27777099609375
            ],
            [
              47.55428670127958,
              21.32171630859375
            ],
            [
              47.57281986733871,
              21.32720947265625
            ],
            [
              47.579304926442894,
              21.3409423828125
            ],
            [
              47.5996813120644,
              21.33544921875
            ],
            [
              47.632081940263305,
              21.301116943359375
            ],
            [
              47.633932798340716,
              21.26541137695312
            ],
            [
              47.62467785241324,
              21.276397705078125
            ],
            [
              47.59690318115471,
              21.228332519531246
            ],
            [
              47.56448075401425,
              21.21734619140625
            ],
            [
              47.55984733956309,
              21.155548095703125
            ],
            [
              47.59505101193038,
              21.1431884765625
            ],
            [
              47.61356975397398,
              21.20635986328125
            ],
            [
              47.62004976487241,
              21.20086669921875
            ],
            [
              47.646886969413,
              21.235198974609375
            ],
            [
              47.699595792693444,
              21.26129150390625
            ],
            [
              47.733781798258256,
              21.255798339843746
            ],
            [
              47.74117041801028,
              21.23382568359375
            ]
  ]
  
  var polygon2 = [
			[
              48.15326053170717,
              20.471649169921875
            ],
            [
              48.07440873478364,
              20.3631591796875
            ],
            [
              48.04136507445029,
              20.391998291015625
            ],
            [
              48.04320138974932,
              20.34393310546875
            ],
            [
              47.99911175452292,
              20.32608032226562
            ],
            [
              47.98164918953037,
              20.357666015625
            ],
            [
              48.004625021133904,
              20.405731201171875
            ],
            [
              47.983487632528984,
              20.43731689453125
            ],
            [
              47.923704717745686,
              20.411224365234375
            ],
            [
              47.964180715412276,
              20.48675537109375
            ],
            [
              47.921864146583786,
              20.603485107421875
            ],
            [
              47.956823800497475,
              20.589752197265625
            ],
            [
              47.99267886541119,
              20.65704345703125
            ],
            [
              48.018405609823134,
              20.6707763671875
            ],
            [
              48.02575375138845,
              20.73394775390625
            ],
            [
              48.05513584361998,
              20.66802978515625
            ],
            [
              48.060643120324514,
              20.591125488281246
            ],
            [
              48.0771614158644,
              20.60760498046875
            ],
            [
              48.078996454769914,
              20.663909912109375
            ],
            [
              48.127601138297095,
              20.65704345703125
            ],
            [
              48.16058943132621,
              20.565032958984375
            ],
            [
              48.145930585161196,
              20.534820556640625
            ],
            [
              48.15326053170717,
              20.471649169921875
            ]
  ]
  
  var polygon3 = [
			[
              47.75040471827431,
              18.738555908203125
            ],
            [
              47.674635091761616,
              18.863525390625
            ],
            [
              47.679258344995304,
              18.884124755859375
            ],
            [
              47.62930553023398,
              18.947296142578125
            ],
            [
              47.663537612601345,
              18.947296142578125
            ],
            [
              47.67648444221321,
              18.9459228515625
            ],
            [
              47.660762874112834,
              18.969268798828125
            ],
            [
              47.63300737749619,
              18.969268798828125
            ],
            [
              47.633932798340716,
              18.984375
            ],
            [
              47.66261271615866,
              18.99261474609375
            ],
            [
              47.669086647137576,
              19.026947021484375
            ],
            [
              47.703292658431074,
              19.024200439453125
            ],
            [
              47.70976154266637,
              19.073638916015625
            ],
            [
              47.732858147066494,
              19.079132080078125
            ],
            [
              47.80300894980687,
              18.99673461914062
            ],
            [
              47.79286140021344,
              18.9678955078125
            ],
            [
              47.76425309705425,
              18.94866943359375
            ],
            [
              47.777174925180354,
              18.897857666015625
            ],
            [
              47.81223227508317,
              18.826446533203125
            ],
            [
              47.810387741058335,
              18.79486083984375
            ],
            [
              47.787325537803106,
              18.798980712890625
            ],
            [
              47.79286140021344,
              18.771514892578125
            ],
            [
              47.76702233051035,
              18.78662109375
            ],
            [
              47.75502125407674,
              18.777008056640625
            ],
            [
              47.762406859510556,
              18.749542236328125
            ],
            [
              47.75040471827431,
              18.738555908203125
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Hortobagy National Park.</b><hr><i> One of the nature preserves in Hungary.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Bükk National Park.</b><hr><i> One of the nature preserves in Hungary.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Duna-Ipoly Nemzeti Park.</b><hr><i> One of the nature preserves in Hungary.</i>')
  .openPopup();


//monuments
L.marker([47.79894666403113, 18.736386911702017],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Esztergom Basilica</b><hr><i>One of the most popular tourist destinations in Hungary.</i>")
.openPopup();

L.marker([47.4963917084481, 19.039867670075118],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Buda Castle</b><hr><i>One of the most popular tourist destinations in Hungary.</i>")
.openPopup();

L.marker([46.9148279159877, 17.8867929848323],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Tihany</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.6812249955421, 16.584335084791793],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Sopron</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.90412864104972, 20.379536447722977],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Eger Castle</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.79146275616612, 18.974137602542605],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Visegrád Royal Palace</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.692191234658495, 19.045383265448866],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Szentendre Skanzen Village Museum</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();


// cities
L.marker([47.10603,17.90582],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Veszprém.</b><hr><i>Population: 59,738</i><br><i>Area: 126.9 km<sup>2</sup></i><br><i>Elevation: 266 m</i><hr><i>Veszprém is one of the oldest urban areas in Hungary, and a city with county rights.</i>')
.openPopup();

L.marker([47.52701,21.62293],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Debrecen.</b><hr><i>Population: 202,520</i><br><i>Area: 461.2 km<sup>2</sup></i><br><i>Elevation: 121 m</i><hr><i>Debrecen is the capital of Hungary’s Northern Great Plain region. Its 2-towered, 19th-century Reformed Church sits on the expansive main square, Kossuth Tér. Nearby, the Museum of the Reformed College of Debrecen has exhibits on the history of the city and the college..</i>')
.openPopup();

L.marker([46.252107888272675, 20.137633355563022],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Szeged.</b><hr><i>Population: 161,879</i><br><i>Area: 281 km<sup>2</sup></i><br><i>Elevation: 76 m</i><hr><i>Szeged is the third largest city of Hungary, the largest city and regional centre of the Southern Great Plain and the county seat of Csongrád-Csanád county.</i>')
.openPopup();

L.marker([48.100320004248715, 20.78657473975032],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Miskolc.</b><hr><i>Population: 157,639</i><br><i>Area: 236.7 km<sup>2</sup></i><br><i>Elevation: 131 m</i><hr><i>Miskolc is a city in northeastern Hungary, known for its heavy industry. With a population of 161,265 Miskolc is the fourth largest city in Hungary.</i>')
.openPopup();

L.marker([46.07365055447059, 18.228579799784423],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pécs.</b><hr><i>Population: 145,011</i><br><i>Area: 162.6 km<sup>2</sup></i><br><i>Elevation: 153 m</i><hr><i>Pécs is an ancient city in southern Hungary, close to the Croatian border. Founded by the Romans, it`s known for its architectural landmarks such as the Early Christian Mausoleum, which features frescoed tombs.</i>')
.openPopup();

L.marker([47.49174,19.02753],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Budapest.</b><hr><i>Population: 1,756,533</i><br><i>Area: 525.2 km<sup>2</sup></i><br><i>Elevation: 102 m</i><hr><i>Budapest, Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest.</i>')
.openPopup();