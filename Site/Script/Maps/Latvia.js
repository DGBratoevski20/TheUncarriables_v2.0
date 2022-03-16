var map = L.map('map').setView([56.996505006, 24.427360938789217], 7);

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
L.marker([56.95864795575303, 23.71840773037556],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Jūrmala beach</b><hr><i>One of the most popular tourist destinations in Latvia.</i>")
.openPopup();

L.marker([56.569094395018396, 21.0285276586329],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Liepaja beach</b><hr><i>One of the most popular tourist destinations in Latvia.</i>")
.openPopup();

L.marker([56.969553279928455, 21.96325678436013],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Kuldiga</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.75897880672118, 22.604700654587802],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cape Kolka</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.315182506260115, 25.27143806450294],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cēsis Castle</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([56.41362310502395, 24.024801934954773],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rundāle Palace Museum</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();

L.marker([57.183430249049785, 24.85963809994719],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Turaida castle</b><hr><i>One of the most popular tourist destinations in Latvia.</i>')
.openPopup();


// cities
L.marker([57.39884497483879, 21.55014710659771],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ventspils.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.96093619207526, 23.78874018624686],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Jūrmala.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.65153464510933, 23.72320623118176],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Jelgava.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.50627347991781, 21.010744000409918],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liepāja.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([55.8775557008804, 26.53266705226049],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Daugvpils.</b><hr><i> One of the biggest cities in Latvia.</i>')
.openPopup();

L.marker([56.948491643410236, 24.11069035433517],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Riga.</b><hr><i> The capital city of Latvia.</i>')
.openPopup();