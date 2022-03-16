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


//monuments
L.marker([54.67823470344015, 25.288082087841325],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Vilnius Old Town</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>")
.openPopup();

L.marker([54.63778506178523, 24.934693706930023],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Trakai</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>")
.openPopup();

L.marker([54.900997536129125, 23.91109612141516],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Devil’s Museum</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.88337593128866, 25.60836669266662],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>St. Anne’s Church</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([56.01540980247236, 23.41590631350237],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Siauliai Hill of Crosses</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.686729840825656, 25.2828403772309],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Money Museum</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();

L.marker([54.68812011935642, 25.270831533053123],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Museum of Genocide Victims</b><hr><i>One of the most popular tourist destinations in Lithuania.</i>')
.openPopup();


// cities
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