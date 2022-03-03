var map = L.map('map').setView([47.2, 2.41880], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/M.png',
    iconSize: [35,35],
    iconAnchor: [20,14],
});

L.marker([43.35713822211053,5.361328125],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Marseille.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([45.73685954736049, 4.833984374999999],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Lyon.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([43.60625069174641, 1.4447021484374998],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Toulouse.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([43.70138869210391, 7.269172668457031],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Nice.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();


L.marker([47.22329888685773,  -1.5545654296874998],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Montepellier.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([47.2232988885773,  -1.5545654296874998],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Nantes.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([44.84418558537004,  -0.582275390625],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Bordeaux.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();

L.marker([48.592959181191695,  7.750854492187499],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Strasbourg.</b><hr><i> One of the biggest cities in France.</i>')
.openPopup();


L.marker([48.8641, 2.35336],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Paris.</b><hr><i> The capital city of France.</i>')
.openPopup();