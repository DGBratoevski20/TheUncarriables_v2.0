var map = L.map('map').setView([40.63710463955615, -3.321829354120931], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([41.39171025016631, 2.1736045997546922],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Barcelona.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([39.46915854721577, -0.376001122242424],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Valencia.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([37.388441675791086, -5.9859197043299],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Seville.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([38.34336173710972, -0.4917942862638563],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Alicante.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([38.00512068634677, -1.130386315917573],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Murcia.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([40.419810088119654, -3.7047615707462103],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Madrid.</b><hr><i> The capital city of Spain.</i>')
.openPopup();