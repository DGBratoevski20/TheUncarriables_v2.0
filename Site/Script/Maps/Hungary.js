var map = L.map('map').setView([47.16157, 19.49207], 6);

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

L.marker([47.10603,17.90582],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Veszprém.</b><hr><i> One of the biggest cities in Hungary.</i>')
.openPopup();

L.marker([47.52701,21.62293],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Debrecen.</b><hr><i> One of the biggest cities in Hungary.</i>')
.openPopup();

L.marker([46.252107888272675, 20.137633355563022],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Szeged.</b><hr><i> One of the biggest cities in Hungary.</i>')
.openPopup();

L.marker([48.100320004248715, 20.78657473975032],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Miskolc.</b><hr><i> One of the biggest cities in Hungary.</i>')
.openPopup();

L.marker([46.07365055447059, 18.228579799784423],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pécs.</b><hr><i> One of the biggest cities in Hungary.</i>')
.openPopup();

L.marker([47.49174,19.02753],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Budapest.</b><hr><i> The capital city of Hungary.</i>')
.openPopup();