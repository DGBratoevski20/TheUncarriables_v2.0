var map = L.map('map').setView([58.821,25.47271 ], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([58.38760,26.73551],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Tartu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39331,28.17984],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Narva.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([58.39646,24.49151],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Pärnu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39763,27.28065],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Kohtla-Järve.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.43672, 24.75756],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Tallinn.</b><hr><i> The capital city of Estonia.</i>')
.openPopup();