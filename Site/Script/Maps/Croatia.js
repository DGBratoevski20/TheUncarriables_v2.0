var map = L.map('map').setView([44.5, 16.25016], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/castle.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([43.51046, 16.44431],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Split.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.32162, 14.43944],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rijeka.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.55202, 18.70005],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Osijek.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([44.11874, 15.23047],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zadar.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.81546, 15.973691],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zagreb.</b><hr><i> The capital city of Croatia.</i>')
.openPopup();