var map = L.map('map').setView([44.5, 16.25016], 7);

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
L.marker([44.88366084161831, 13.859690013394374],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Pula</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();

L.marker([43.50864171873293, 16.44067360945156],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Diocletian's Palace</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>")
.openPopup();

L.marker([43.17337499601382, 16.44174064219017],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hvar Town</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();

L.marker([45.81903577752728, 15.972643744014121],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Gornji Grad</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();

L.marker([43.25643894759743, 16.633959679108393],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Zlatni Rat Beach</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();

L.marker([42.757073207125394, 17.51478827114701],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mljet</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();

L.marker([45.291527085553604, 13.887037606228398],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Istria</b><hr><i>One of the most popular tourist destiantions in Croatia.</i>')
.openPopup();


//cities
L.marker([43.51046, 16.44431],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Split.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.32162, 14.43944],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rijeka.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.55202, 18.70005],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Osijek.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([44.11874, 15.23047],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zadar.</b><hr><i> One of the biggest cities in Croatia.</i>')
.openPopup();

L.marker([45.81546, 15.973691],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Zagreb.</b><hr><i> The capital city of Croatia.</i>')
.openPopup();