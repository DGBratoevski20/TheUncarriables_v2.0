var map = L.map('map').setView([63.12440050838607, 15.340211785642705], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([57.71093805967822, 11.965933427643622],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Gothenburg.</b><hr><i> One of the biggest cities in Sweden.</i>')
.openPopup();

L.marker([55.60208195113387, 13.00181526081602],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Malmö.</b><hr><i> One of the biggest cities in Sweden.</i>')
.openPopup();

L.marker([59.859814525400125, 17.635893737002007],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Uppsala.</b><hr><i> One of the biggest cities in Sweden.</i>')
.openPopup();


L.marker([59.27346182938627, 15.21018449483136],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Örebro.</b><hr><i> One of the biggest cities in Sweden.</i>')
.openPopup();

L.marker([58.58623608064828, 16.190535870739346],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Norrköping.</b><hr><i> One of the biggest cities in Sweden.</i>')
.openPopup();

L.marker([59.36693868725194, 18.064821650729527],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Stockholm.</b><hr><i> The capital city of Sweden.</i>')
.openPopup();