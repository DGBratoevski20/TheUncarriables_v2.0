var map = L.map('map').setView([35.139832609554624, 33.384133301430296 ], 9);

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
L.marker([34.66896002732899, 32.882705955641114],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Ancient Kourion</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();

L.marker([35.31162534866984, 33.281048501312014],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>St. Hilarion Castle</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();

L.marker([34.949327940562455, 33.623408575220004],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Larnaca</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.50101237922233, 34.25034329469294],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Karpas Peninsula</b><hr><i>One of the most popular tourist destinations in the Republic of Cyprus.</i>")
.openPopup();


// cities
L.marker([34.902839381520735, 33.61975979021524],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Larnaca.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.10647215608584, 33.31571338906268],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lakatamia.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.03582486080627, 33.986402936213416],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Paralimni.</b><hr><i> One of the biggest cities in the Republic of Cyprus.</i>')
.openPopup();

L.marker([35.186839430423774, 33.37960450539726],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Nicosia.</b><hr><i> The capital city of the Republic of Cyprus.</i>')
.openPopup();