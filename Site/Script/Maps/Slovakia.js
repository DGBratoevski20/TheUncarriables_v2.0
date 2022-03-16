var map = L.map('map').setView([48.85481212770279, 19.805606675974946], 8);

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
L.marker([49.26201232241269, 19.359021509605817],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Orava Castle</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([49.03953430529116, 19.27801123133447],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Vlkolinec</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([49.28677743369211, 21.269835728152714],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bardejov</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>')
.openPopup();

L.marker([48.99968194348498, 20.767940851927445],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Spis Castle</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();

L.marker([48.5173973521273, 18.919174939799593],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Banska Stiavnica</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>')
.openPopup();

L.marker([49.212674124872095, 20.121167276679245],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>High Tatras</b><hr><i>One of the most popular tourist destinations in Slovakia.</i>")
.openPopup();


//cities
L.marker([48.311791651899036, 18.070614006567418],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nitra.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.84204277459344, 19.158964794791576],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Banská Bystrica.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.217418140637655, 18.738528627520484],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Žilina.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([49.002469539522856, 21.23720083735469],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prešov.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.72203788044131, 21.256532952408698],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Košice.</b><hr><i> One of the biggest cities in Slovakia.</i>')
.openPopup();

L.marker([48.15043737772495, 17.100639332663736],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bratislava.</b><hr><i> The capital city of Slovakia.</i>')
.openPopup();