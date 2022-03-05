var map = L.map('map').setView([42.05202978939177, 12.702840083976747 ], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([45.48484638001285, 9.178645255184874],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Milan.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([40.8666701753286, 14.265061020864495],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Naples.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([45.07122781404754, 7.68348772490847],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Turin.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([38.143048357320474, 13.35771912637409],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Palermo.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([44.40694381575936, 8.94425899172044],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Genoa.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([43.77555741658469, 11.252341632252282],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Florence.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([44.49439041804245, 11.340800024282567],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Bologna.</b><hr><i> One of the biggest cities in Italy.</i>')
.openPopup();

L.marker([41.92539143426936, 12.484632494412406],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Rome.</b><hr><i> The capital city of Italy.</i>')
.openPopup();