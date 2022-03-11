var map = L.map('map').setView([46.03028772748342, 24.987739329528555], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([46.56737476701929, 26.908884041765983],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Bacău.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.1647553660865, 28.63532666928853],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Constanța.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([46.775227446524866, 23.621977661540935],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Cluj-Napoca.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([47.160805029371424, 27.59998516278188],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Iași.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([45.43509050553079, 28.057399670964112],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Galați.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.43145360848081, 26.10121466957515],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Bucharest.</b><hr><i> The capital city of Romania.</i>')
.openPopup();