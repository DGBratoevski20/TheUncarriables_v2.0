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

//monuments
L.marker([47.79894666403113, 18.736386911702017],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Esztergom Basilica</b><hr><i>One of the most popular tourist destinations in Hungary.</i>")
.openPopup();

L.marker([47.4963917084481, 19.039867670075118],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Buda Castle</b><hr><i>One of the most popular tourist destinations in Hungary.</i>")
.openPopup();

L.marker([46.9148279159877, 17.8867929848323],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Tihany</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.6812249955421, 16.584335084791793],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Sopron</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.90412864104972, 20.379536447722977],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Eger Castle</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.79146275616612, 18.974137602542605],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Visegrád Royal Palace</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

L.marker([47.692191234658495, 19.045383265448866],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Szentendre Skanzen Village Museum</b><hr><i>One of the most popular tourist destinations in Hungary.</i>')
.openPopup();

// cities
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