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