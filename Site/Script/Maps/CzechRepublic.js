var map = L.map('map').setView([49.8883,15.26448 ],8 );

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
              50.775550104554206,
              15.375366210937498
            ],
            [
              50.76295640320208,
              15.384979248046873
            ],
            [
              50.745145729828636,
              15.352706909179688
            ],
            [
              50.73819338460293,
              15.375366210937498
            ],
            [
              50.70906922686333,
              15.38360595703125
            ],
            [
              50.70472078502399,
              15.423431396484375
            ],
            [
              50.6899330659004,
              15.448837280273436
            ],
            [
              50.6712242729033,
              15.455017089843748
            ],
            [
              50.63160664876761,
              15.470123291015625
            ],
            [
              50.62158811330538,
              15.59783935546875
            ],
            [
              50.63247772488185,
              15.611572265625
            ],
            [
              50.597186230587035,
              15.733108520507812
            ],
            [
              50.57887651221436,
              15.742721557617188
            ],
            [
              50.60459528287801,
              15.838165283203125
            ],
            [
              50.599801323409906,
              15.874557495117188
            ],
            [
              50.618538570096796,
              15.904769897460938
            ],
            [
              50.66164944798126,
              15.901336669921873
            ],
            [
              50.67470554332169,
              15.863571166992188
            ],
            [
              50.72472027822819,
              15.829925537109375
            ],
            [
              50.753834709847816,
              15.81550598144531
            ],
            [
              50.7342822367947,
              15.738601684570312
            ],
            [
              50.7438422437243,
              15.678176879882812
            ],
            [
              50.75904732375726,
              15.658950805664062
            ],
            [
              50.77685270774661,
              15.590972900390625
            ],
            [
              50.77772108971944,
              15.529174804687498
            ],
            [
              50.79117894847138,
              15.50788879394531
            ],
            [
              50.79117894847138,
              15.476303100585936
            ],
            [
              50.80983988820981,
              15.440597534179688
            ],
            [
              50.77685270774661,
              15.39115905761719
            ],
            [
              50.775550104554206,
              15.375366210937498
            ]
	
  ]


var polygon2 = [
			[
              50.75470351914962,
              14.037780761718748
            ],
            [
              50.704285918657924,
              14.011688232421875
            ],
            [
              50.673835249921346,
              14.1339111328125
            ],
            [
              50.63204218884234,
              13.99658203125
            ],
            [
              50.60328788781902,
              13.916931152343748
            ],
            [
              50.53088873891836,
              13.872985839843748
            ],
            [
              50.48547354578499,
              13.717803955078125
            ],
            [
              50.39801383084027,
              13.726043701171875
            ],
            [
              50.372620278200905,
              13.782348632812498
            ],
            [
              50.42601852427907,
              13.893585205078123
            ],
            [
              50.463623767993795,
              13.904571533203125
            ],
            [
              50.47498691278631,
              13.9910888671875
            ],
            [
              50.51255324610023,
              14.047393798828125
            ],
            [
              50.590211939351896,
              14.353637695312498
            ],
            [
              50.767733723505344,
              14.534912109374998
            ],
            [
              50.7686022747888,
              14.492340087890623
            ],
            [
              50.79551936692376,
              14.441528320312498
            ],
            [
              50.787706323501475,
              14.235534667968748
            ],
            [
              50.75470351914962,
              14.037780761718748
            ]
  ]
  
  var polygon3 = [
			[
              49.814948620925776,
              13.932037353515625
            ],
            [
              49.797222824651534,
              13.871612548828125
            ],
            [
              49.77949053732968,
              13.879852294921873
            ],
            [
              49.72625472231029,
              13.76312255859375
            ],
            [
              49.72359139756258,
              13.706817626953125
            ],
            [
              49.681846899401286,
              13.673858642578125
            ],
            [
              49.68006974215033,
              13.721923828124998
            ],
            [
              49.62850392384226,
              13.693084716796875
            ],
            [
              49.60626042633693,
              13.65325927734375
            ],
            [
              49.555507284155276,
              13.695831298828125
            ],
            [
              49.54481568504451,
              13.802947998046873
            ],
            [
              49.60893018211529,
              13.809814453125
            ],
            [
              49.64540219209767,
              13.838653564453125
            ],
            [
              49.62761437887251,
              13.888092041015625
            ],
            [
              49.70139134233472,
              13.95263671875
            ],
            [
              49.724479188712984,
              13.941650390625
            ],
            [
              49.74134413610503,
              13.992462158203125
            ],
            [
              49.771508890149846,
              14.006195068359375
            ],
            [
              49.78392421773299,
              13.948516845703125
            ],
            [
              49.79899569636492,
              13.964996337890625
            ],
            [
              49.814948620925776,
              13.932037353515625
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Krkonoke National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Ceske stredohori National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>CHKO Brdy.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();



//monuments
L.marker([50.09129619422601, 14.401595040864906],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Prague Castle</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([48.84581740699147, 14.37374551022646],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Ceský Krumlov Castle</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>")
.openPopup();

L.marker([49.19136195208444, 16.60766116172839],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cathedral of St. Peter and Paul</b><hr><i>One of the most popular tourist destinations in Czech Republica.</i>')
.openPopup();

L.marker([50.22555749045453, 12.882115443540892],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mill Colonnade</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([50.086760451190536, 14.389165667851483],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Strahov Monastery</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([49.98379824361703, 15.265126097000048],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Kutná Hora</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([50.586797492487506, 15.157591777110193],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Bohemian Paradise</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();


//cities
L.marker([49.82526,18.25952],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ostrava.</b><hr><i>Population: 289,629</i><br><i>Area: 214.2 km<sup>2</sup></i><br><i>Elevation: 260 m</i><hr><i>Ostrava is a city in the north-east of the Czech Republic, and the capital of the Moravian-Silesian Region.</i>')
.openPopup();

L.marker([49.74159,13.37169],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pilsen.</b><hr><i>Population: 171,707</i><br><i>Area: 7.252 km<sup>2</sup></i><br><i>Elevation: 181 m</i><hr><i>Bordering the Chicago River, the Lower West Side neighborhood offers a combination of diverse areas including the Chicago Arts District in East Pilsen.</i>')
.openPopup();

L.marker([49.59508,17.24933],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Olomouc.</b><hr><i>Population: 100,408</i><br><i>Area: 103.3 km<sup>2</sup></i><br><i>Elevation: 219 m</i><hr><i>Olomouc is a city in the eastern province of Moravia in the Czech Republic.</i>')
.openPopup();

L.marker([50.76614,15.05331],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liberec.</b><hr><i>Population: 104,163</i><br><i>Area: 3.163 km<sup>2</sup></i><br><i>Elevation: 374 m</i><hr><i>Liberec is a city in the Czech Republic.</i>')
.openPopup();

L.marker([49.19458,16.60705],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brno.</b><hr><i>Population: 379,526</i><br><i>Area: 230.2 km<sup>2</sup></i><br><i>Elevation: 237 m</i><hr><i>Brno is a city in the Czech Republic. It’s known for its modernist buildings, like the restored Villa Tugendhat, completed in 1930 by architect Mies van der Rohe.</i>')
.openPopup();

L.marker([50.07199, 14.42952],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prague.</b><hr><i>Population: 1,309,372</i><br><i>Area: 496 km<sup>2</sup></i><br><i>Elevation: 272 m</i><hr><i>Prague, capital city of the Czech Republic, is bisected by the Vltava River.</i>')
.openPopup();