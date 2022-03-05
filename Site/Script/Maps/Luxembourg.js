var map = L.map('map').setView([49.755294246029315, 6.1273152860427365], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([49.49989929115584, 5.968235148549869],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Esch-sur-Alzette.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.47949008227143, 6.079707133699428],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Dudelange.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.61235929163547, 6.1313963902380415],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Luxembourg.</b><hr><i> The capital city of Luxembourg.</i>')
.openPopup();