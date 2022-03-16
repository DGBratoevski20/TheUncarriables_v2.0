var map = L.map('map').setView([49.755294246029315, 6.1273152860427365], 10);

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
L.marker([49.611808724863465, 6.1342556654379345],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>National Museum of History and Art</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>")
.openPopup();

L.marker([49.61728870610536, 6.140952542149191],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Grand Duke Jean Museum of Modern Art (MUDAM)</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>")
.openPopup();

L.marker([49.90606469430512, 6.080400659348498],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bourscheid Castle</b><hr><i>One of the most popular tourist destinations in Luxembourg.</i>')
.openPopup();


// cities
L.marker([49.49989929115584, 5.968235148549869],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Esch-sur-Alzette.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.47949008227143, 6.079707133699428],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Dudelange.</b><hr><i> One of the biggest cities in Luxembourg.</i>')
.openPopup();

L.marker([49.61235929163547, 6.1313963902380415],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Luxembourg.</b><hr><i> The capital city of Luxembourg.</i>')
.openPopup();