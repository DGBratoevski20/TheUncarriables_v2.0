var map = L.map('map').setView([49.8883,15.26448 ],8 );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([49.82526,18.25952],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Ostrava.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.74159,13.37169],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Pilsen.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.59508,17.24933],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Olomouc.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([50.76614,15.05331],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Liberec.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.19458,16.60705],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Brno.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([50.07199, 14.42952],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Prague.</b><hr><i> The capital city of Czech Republic.</i>')
.openPopup();