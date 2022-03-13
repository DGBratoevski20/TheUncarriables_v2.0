var map = L.map('map').setView([65.27308, 27.28202], 5);

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
L.marker([60.14538123309489, 24.988111646825423],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Suomenlinna Fortress</b><hr><i>One of the most popular tourist destinations in Finland.</i>")
.openPopup();

L.marker([60.220627657500735, 20.688853444513597],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Åland Archipelago</b><hr><i>One of the most popular tourist destinations in Finland.</i>")
.openPopup();

L.marker([60.39319387989489, 25.665129055817733],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Porvoo</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([61.86796110124743, 28.886257984387868],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Savonlinna</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([63.09514987914709, 21.616621571998774],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Vaasa</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([65.0121581086502, 25.465299354233675],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Oulu</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

L.marker([60.99279125880206, 24.458782906648725],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hameenlinna</b><hr><i>One of the most popular tourist destinations in Finland.</i>')
.openPopup();

// cities
L.marker([61.49693,23.76023],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tampere.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.20530,24.66009],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Espoo.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.30552,25.03812],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vantaa.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.45194,22.26677],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Turku.</b><hr><i> One of the biggest cities in Finland.</i>')
.openPopup();

L.marker([60.17003, 24.93626],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Helsinki.</b><hr><i> The capital city of Finland.</i>')
.openPopup();