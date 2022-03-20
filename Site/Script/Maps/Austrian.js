var map = L.map('map').setView([47.58186, 13.26485], 7.5);
	
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
        47.00047075601558,
		12.540633688417216   
    ],
    [
        47.00034014818812,
		12.54089373758485
    ],
    [
        47.00046359959342,
		12.541030097340748
    ],
    [
        47.00058056032372,
		12.54080232314146
    ],
    [
        47.00055312168311,
		12.540768795530356
    ],
    [
        47.00047034836524,
		12.540633343981487
    ]
  ]


var polygon2 = [
    [
        47.58454234525594,
		14.550040565339206   
    ],
    [
        47.57035800589734, 14.545549465072336
    ],
    [
        47.55920063209638, 14.534934137168824
    ],
    [
        47.550245465254996, 14.530443036901955
    ],
    [
        47.54473383267228, 14.56086003416394
    ],
    [
        47.54473383267228, 14.583723817340731
    ],
    [
        47.54197779903981, 14.58515280378928
    ],
    [
        47.541702187707315, 14.5882149176076
    ],
    [
        47.54183999355469, 14.591685313268362
    ],
    [
        47.539221620511604, 14.592297736032029
    ],
    [
        47.53798129290133, 14.596584695377677
    ],
    [
        47.54583620512111, 14.6080165876204
    ],
    [
		47.545147224786355, 14.616182224469254
    ],
    [
        47.53756784341051, 14.637617021197496
    ],
    [
        47.52778193076653, 14.641699839621923
    ],
    [
        47.53729220889453, 14.70498352520055
    ],
    [
        47.55548628968014, 14.725217337179211
    ],
    [
        47.56001739580022, 14.72168350858525
    ],
    [
        47.563117400533514, 14.722920348593139
    ],
    [
        47.586957458300034, 14.713379011389451
    ],
    [
        47.59196249148105, 14.704367748474859
    ],
    [
        47.600177726628964, 14.725669079735564
    ],
    [
        47.60712870327899, 14.73107881414793
    ],
    [
        47.621234281426375, 14.745470749094034
    ],
    [
		47.6316218103982, 14.728118770790218
    ],
    [
        47.62907671278144, 14.71199163801373
    ],
    [
        47.62281662109511, 14.71046058110457
    ],
    [
        47.622541435027905, 14.68157464075175
    ],
    [
        47.62900792456331, 14.640338171888956
    ],
    [
        47.633135052923606, 14.623496544719067
    ],
    [
        47.628939136286604, 14.604613508120458
    ],
    [
        47.61511086337436, 14.579708314812505
    ],
    [
        47.597233495046964, 14.57282981381037
    ],
    [
        47.592860047248, 14.57810713919462
    ],
    [
        47.58582915181145, 14.550896659021143
    ]
  ]
  
  var polygon3 = [
    [
        47.54007465934255, 12.893497815212406  
    ],
    [
        47.543352256827745, 12.89628962232617
    ],
    [
        47.54851405734331, 12.91037004081299
    ],
    [
        47.55826273813831, 12.921173120514085
    ],
    [
        47.56686300927066, 12.930276839363323
    ],
    [
        47.56809150417664, 12.935132156082917
    ],
    [
        47.56571638802872, 12.937438431524722
    ],
    [
        47.56178492464315, 12.93816672903266
    ],
    [
        47.55539566733819, 12.942536514080295
    ],
    [
        47.55161346054789, 12.942073950898155
    ],
    [
        47.53235767556737, 12.920346408577977
    ],
    [
        47.531758637330796, 12.914882520043568
    ],
    [
        47.53462700121657, 12.906992630374228
    ],
    [
        47.5360201499238, 12.89934550654087
    ],
    [
        47.54019937396696, 12.893154977723388
    ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Hohe Tauern National Park.</b><hr><i> One of the nature preserves in Austria.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Gesäuse National Park.</b><hr><i> One of the nature preserves in Austria.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Nationalpark Berchtesgaden.</b><hr><i> One of the nature preserves in Austria.</i>')
  .openPopup();


//monuments
L.marker([48.18590830273777, 16.312726798011717],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Schönbrunn Palace</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();

L.marker([47.57502065180503, 14.463938790519144],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Admont Abbey Library</b><hr><i>One of the most popular tourist destinations in Austria.</i>")
.openPopup();

L.marker([48.205822236398724, 16.365123621220913],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Hofburg</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();

L.marker([48.22972291760557, 15.333901765399311],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Melk Abbey</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();

L.marker([48.20768733249617, 16.39507730347872],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hundertwasser House</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();

L.marker([47.79560640939358, 13.01559186693563],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hangar-7</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();

L.marker([46.56257167074994, 13.27861449471774],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Nassfeld-Pressegger</b><hr><i>One of the most popular tourist destinations in Austria.</i>')
.openPopup();


//cities
L.marker([48.30563, 14.28476],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Linz.</b><hr><i>Population: 204,846</i><br><i>Area: 95.99 km<sup>2</sup></i><br><i>Elevation: 266 m</i><hr><i>Linz is the capital of Upper Austria and third-largest city in Austria.</i>')
.openPopup();

L.marker([47.06861, 15.44151],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Graz.</b><hr><i>Population: 331,562</i><br><i>Area: 127.57 km<sup>2</sup></i><br><i>Elevation: 353 m</i><hr><i>Graz is the capital city of the Austrian state of Styria and second-largest city in Austria after Vienna.</i>')
.openPopup();

L.marker([47.81063, 13.05597],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Salzburg.</b><hr><i>Population: 156,872</i><br><i>Area: 65.65 km<sup>2</sup></i><br><i>Elevation: 424 m</i><hr><i>Salzburg is the fourth-largest city in Austria.</i>')
.openPopup();

L.marker([47.27341, 11.40167],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Innsbruck.</b><hr><i>Population: 132,493</i><br><i>Area: 104.91 km<sup>2</sup></i><br><i>Elevation: 574 m</i><hr><i>Innsbruck is the capital of Tyrol and the fifth-largest city in Austria.</i>')
.openPopup();

L.marker([48.20967, 16.37328],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Wien.</b><hr><i>Population: 1,897,000</i><br><i>Area: 414.78 km<sup>2</sup></i><br><i>Elevation: 542 m</i><hr><i>Wien (Vienna) is the national capital, largest city, and one of nine states of Austria.</i>')
.openPopup();