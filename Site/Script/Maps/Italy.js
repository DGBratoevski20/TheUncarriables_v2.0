var map = L.map('map').setView([42.05202978939177, 12.702840083976747 ], 6);

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

//monuments
L.marker([41.89044179649501, 12.49225235598876],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Colosseum</b><hr><i>One of the most popular tourist destinations in Italy.</i>")
.openPopup();

L.marker([43.773377392365276, 11.256035300213906],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Cathedral of Santa Maria del Fiore</b><hr><i>One of the most popular tourist destinations in Italy.</i>")
.openPopup();

L.marker([45.435960352256124, 12.327906288926002],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Grand Canal in Venice</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([43.72313806574941, 10.396607727199354],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Leaning Tower of Pisa</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([40.63381525647895, 14.604048505482611],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Amalfi Coast</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([44.12779144691539, 9.71098823711514],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cinque Terre</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();

L.marker([43.768041256560736, 11.255439544391535],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Uffizi Gallery in Florence</b><hr><i>One of the most popular tourist destinations in Italy.</i>')
.openPopup();


// cities
L.marker([45.48484638001285, 9.178645255184874],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Milan.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([40.8666701753286, 14.265061020864495],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Naples.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([45.07122781404754, 7.68348772490847],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Turin.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([38.143048357320474, 13.35771912637409],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Palermo.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([44.40694381575936, 8.94425899172044],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Genoa.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([43.77555741658469, 11.252341632252282],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Florence.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([44.49439041804245, 11.340800024282567],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bologna.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([41.92539143426936, 12.484632494412406],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rome.</b><hr><i> The capital city of Italy.</i>')
.openPopup();