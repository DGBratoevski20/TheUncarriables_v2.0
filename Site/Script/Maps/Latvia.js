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
    iconUrl: '../Images/castle.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

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