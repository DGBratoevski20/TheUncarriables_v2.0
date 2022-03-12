var map = L.map('map').setView([50.620948, 4.528359], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5, 35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/castle.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([51.05966, 3.72912],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ghent.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.22878, 4.40136112],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Antwerpen.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.21080, 3.224591],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brugge.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.63255, 5.56805],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liege.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.46641, 4.86376],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Namur.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.85017, 4.36192],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brussels.</b><hr><i> The capital city of Belgium.</i>')
.openPopup();