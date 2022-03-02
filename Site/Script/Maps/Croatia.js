var map = L.map('map').setView([44.5, 16.25016], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/Marker.png',
    iconSize: [50,50],
    iconAnchor: [25,20],
});

L.marker([43.51046, 16.44431],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Split.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.32162, 14.43944],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Rijeka.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.55202, 18.70005],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Osijek.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([44.11874, 15.23047],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Zadar.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.81546, 15.973691],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Zagreb.</b><hr><i> The capital city of Croatia.</i>')
.openPopup();