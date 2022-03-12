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

L.marker([48.30563, 14.28476],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Linz.</b><hr><i> One of the biggest cities in Austria.</i>')
.openPopup();

L.marker([47.06861, 15.44151],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Graz.</b><hr><i> One of the biggest cities in Austria.</i>')
.openPopup();

L.marker([47.81063, 13.05597],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Salzburg.</b><hr><i> One of the biggest cities in Austria.</i>')
.openPopup();

L.marker([47.27341, 11.40167],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Innsbruck.</b><hr><i> One of the biggest cities in Austria.</i>')
.openPopup();

L.marker([48.20967, 16.37328],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();