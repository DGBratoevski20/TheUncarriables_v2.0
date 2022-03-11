var map = L.map('map').setView([51.42070, 10.43204], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([53.54030739150022, 10.01953125],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Hamburg.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([48.16608541901253,11.557617187499998],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Munich.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([50.965346321637696,6.954345703125],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Köln.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([50.127621728300475,8.690185546875],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Frankfurt.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([51.46427482966439,7.00927734375],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Essen.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([48.785151998043155,9.184570312499998],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Stuttgard.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([52.53627304145948, 13.38134765625],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Berlin.</b><hr><i> The capital city of Germany.</i>')
.openPopup();