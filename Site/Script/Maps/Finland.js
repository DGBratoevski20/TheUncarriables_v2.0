var map = L.map('map').setView([65.27308, 27.28202], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([61.49693,23.76023],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Tampere.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.20530,24.66009],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Espoo.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.30552,25.03812],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Vantaa.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.45194,22.26677],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Turku.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.17003, 24.93626],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Helsinki.</b><hr><i> The capital city of Finland.</i>')
.openPopup();