var map = L.map('map').setView([52.1773188797716, 19.63282019793907], 6);

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
L.marker([50.3095646076892, 18.67856971046181],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Memorial and Museum Auschwitz I</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([52.25568341711586, 21.009310655114284],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Warsaw Old Town</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([54.03999828819079, 19.028624242277974],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Malbork Castle</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([50.04760870746531, 19.962045667299172],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Schindler's Factory</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([53.21430039602068, 14.476746349648879],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Crooked Forest</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([53.21430039602068, 14.476746349648879],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Wolf's Lair</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();


// cities
L.marker([54.36156691700089, 18.61455855745029],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Gdańsk.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([51.24963709545433, 22.56922563861176],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lublin.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([53.126884697234374, 18.007072291466972],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bydgoszcz.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([52.40910888940215, 16.92649488944622],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Poznań.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([51.761687647656515, 19.457853920144267],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Łódź.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([50.07267808451097, 19.93629863608337],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kraków.</b><hr><i> One of the biggest cities in Poland.</i>')
.openPopup();

L.marker([52.23109118169717, 21.004082355745474],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Warsaw.</b><hr><i> The capital city of Poland.</i>')
.openPopup();