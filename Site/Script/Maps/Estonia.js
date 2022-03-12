var map = L.map('map').setView([58.821,25.47271 ], 7);

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
L.marker([59.4366043733835, 24.744334183754145],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Tour Tallinn's Old Town</b><hr><i>One of the most popular tourist destiantions in Austria.</i>")
.openPopup();

L.marker([58.246975350432535, 22.479765708025337],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Kuressaare Episcopal Castle</b><hr><i>One of the most popular tourist destiantions in Austria.</i>")
.openPopup();

L.marker([59.45121198312306, 24.738442509658288],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Lennusadam Seaplane Harbour</b><hr><i>One of the most popular tourist destiantions in Austria.</i>')
.openPopup();

L.marker([59.43891410349899, 24.748325581780417],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Estonian National Museum</b><hr><i>One of the most popular tourist destiantions in Austria.</i>')
.openPopup();

L.marker([58.40507812658212, 27.052423216917877],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Typa</b><hr><i>One of the most popular tourist destiantions in Austria.</i>')
.openPopup();

L.marker([59.37818318309819, 28.203250258339857],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Narva River Promenade</b><hr><i>One of the most popular tourist destiantions in Austria.</i>')
.openPopup();

L.marker([58.37690384303668, 26.73486906754939],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>AHHAA Science Centre</b><hr><i>One of the most popular tourist destiantions in Austria.</i>')
.openPopup();


//cities
L.marker([58.38760,26.73551],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tartu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39331,28.17984],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Narva.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([58.39646,24.49151],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pärnu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39763,27.28065],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kohtla-Järve.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.43672, 24.75756],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tallinn.</b><hr><i> The capital city of Estonia.</i>')
.openPopup();