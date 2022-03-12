var map = L.map('map').setView([50.620948, 4.528359], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5, 35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/monument.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});


//monuments
L.marker([50.84709578238636, 4.352481425544326],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Grand-Place de Bruxelles</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>')
.openPopup();

L.marker([51.22610210683549, 3.281152709019281],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Belfry of Bruges</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>")
.openPopup();

L.marker([51.05768427970214, 3.721069292465888],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Gravensteen</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>')
.openPopup();

L.marker([51.053216768706605, 3.727584811505701],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Saint Bavo's Cathedral</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>")
.openPopup();

L.marker([51.20835608984874, 3.2271026980168456],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Basilica of the Holy Blood</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>')
.openPopup();

L.marker([50.88541882987309, 4.712136557500243],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Saint Peter's Church of Leuven</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>")
.openPopup();

L.marker([50.722472689331646, 4.378496844247709],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Waterloo</b><hr><i>One of the most popular tourist destiantions in Belgium.</i>')
.openPopup();


//cities
L.marker([51.05966, 3.72912],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ghent.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.22878, 4.40136112],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Antwerpen.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([51.21080, 3.224591],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brugge.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.63255, 5.56805],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liege.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.46641, 4.86376],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Namur.</b><hr><i> One of the biggest cities in Belgium.</i>')
.openPopup();

L.marker([50.85017, 4.36192],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brussels.</b><hr><i> The capital city of Belgium.</i>')
.openPopup();