var map = L.map('map').setView([39, 24.73613], 7);

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
L.marker([37.96841458381345, 23.728447971298007],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Acropolis Museum</b><hr><i>One of the most popular tourist destinations in Greece.</i>")
.openPopup();

L.marker([36.39165833841528, 25.46319990392785],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Santorini</b><hr><i>One of the most popular tourist destinations in Greece.</i>")
.openPopup();

L.marker([37.44742030080499, 25.332221138396317],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mykonos</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([38.48233893970499, 22.500886952405395],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Delphi</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([39.72171502374944, 21.630470602872855],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Metéora Monasteries</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([36.434960008584845, 28.220903097024717],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rhodes Town</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

L.marker([37.569591210557086, 22.8037182515751],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Nafplio</b><hr><i>One of the most popular tourist destinations in Greece.</i>')
.openPopup();

// cities
L.marker([40.64487,22.94075],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Thessaloniki.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([38.25069,21.73445],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Patra.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([39.63809,22.41986],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Piraeus.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([35.34213,25.14550],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Herakleion.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([37.98700, 23.72932],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Athens.</b><hr><i> The capital city of Greece.</i>')
.openPopup();