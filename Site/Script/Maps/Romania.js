var map = L.map('map').setView([, ], );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [20,14],
});