var map = L.map('map').setView([46.03028772748342, 24.987739329528555], 7);

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
L.marker([47.722855534161866, 24.152100507081002],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Wooden church Paraschiva</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([45.18070318849824, 28.795357965389815],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Danube Delta</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([45.60165364485322, 25.551763203008946],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Poiana Brașov</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([45.74966572896988, 22.888765380674364],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Corvin Castle</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();

L.marker([47.77832135351248, 25.7115885347026],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Sucevita Monastery</b><hr><i>One of the most popular tourist destinations in Poland.</i>')
.openPopup();

L.marker([45.50267064877976, 24.249661852567126],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Transylvanian Alps</b><hr><i>One of the most popular tourist destinations in Poland.</i>")
.openPopup();


//cities
L.marker([46.56737476701929, 26.908884041765983],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bacău.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.1647553660865, 28.63532666928853],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Constanța.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([46.775227446524866, 23.621977661540935],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Cluj-Napoca.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([47.160805029371424, 27.59998516278188],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Iași.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([45.43509050553079, 28.057399670964112],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Galați.</b><hr><i> One of the biggest cities in Romania.</i>')
.openPopup();

L.marker([44.43145360848081, 26.10121466957515],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Bucharest.</b><hr><i> The capital city of Romania.</i>')
.openPopup();