var map = L.map('map').setView([56.00115, 10.05358], 7);

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



L.marker([56.16860,10.20409],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aarhus.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.40736,10.39792],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Odense.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([57.05163,9.91785],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aalborg.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.47755,8.45970],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Esbjerg.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.71052,9.53283],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vejle.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.67763, 12.57018],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Copenhagen.</b><hr><i> The capital city of Denmark.</i>')
.openPopup();