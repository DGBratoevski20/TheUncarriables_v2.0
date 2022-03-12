var map = L.map('map').setView([52.19528449694878, 5.4464670376677455], 7);

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

L.marker([52.072509777275876, 4.298209580307056],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>The Hague.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([51.93585750763058, 4.474379115296331],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rotterdam.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([52.09859240224668, 5.121858732711509],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Utrecht.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([52.37511137109779, 4.902678761742699],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Amsterdam.</b><hr><i> The capital city of Netherlands.</i>')
.openPopup();