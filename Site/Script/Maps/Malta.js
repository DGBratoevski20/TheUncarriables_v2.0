var map = L.map('map').setView([35.93772903209806, 14.37020907020132], 11);

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

L.marker([35.910824921615955, 14.50280230389274],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Sliema.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89504007609341, 14.466460745410323],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Birkirkara.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89877173968337, 14.514370904818078],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Valletta</b><hr><i> The capital city of Malta.</i>')
.openPopup();