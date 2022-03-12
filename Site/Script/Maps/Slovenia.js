var map = L.map('map').setView([48.85481212770279, 19.805606675974946], 8);

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

L.marker([48.311791651899036, 18.070614006567418],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nitra.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.74167045870027, 19.1424918664681],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.217418140637655, 18.738528627520484],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Žilina.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.002469539522856, 21.23720083735469],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prešov.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.72203788044131, 21.256532952408698],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Košice.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.15043737772495, 17.100639332663736],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bratislava.</b><hr><i> The capital city of Slovakia.</i>')
.openPopup();