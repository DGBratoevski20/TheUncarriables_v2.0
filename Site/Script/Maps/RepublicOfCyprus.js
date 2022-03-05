var map = L.map('map').setView([35.139832609554624, 33.384133301430296 ], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);


let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([34.902839381520735, 33.61975979021524],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Larnaca.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.10647215608584, 33.31571338906268],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Lakatamia.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.03582486080627, 33.986402936213416],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Paralimni.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.186839430423774, 33.37960450539726],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Nicosia.</b><hr><i> The capital city of the Republic of Cyprus.</i>')
.openPopup();