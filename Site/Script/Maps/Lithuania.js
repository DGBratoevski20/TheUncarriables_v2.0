var map = L.map('map').setView([55.40952692116255, 24.16784582576052 ], 7);

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

L.marker([55.7457984437633, 24.35109526451854],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Panevėžys.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([55.94981948011651, 23.317505540676695],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Šiauliai.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([55.70819598338497, 21.143975513138106],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Klaipėda.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([54.90676677054016, 23.90542723575055],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kaunas.</b><hr><i> One of the biggest cities in Lithuania.</i>')
.openPopup();

L.marker([54.693044937555925, 25.286213984496587],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vilnius.</b><hr><i> The capital city of Lithuania.</i>')
.openPopup();