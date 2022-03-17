 var map = L.map('map').setView([35.93772903209806, 14.37020907020132], 11);

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



//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b> Natural Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b> National Park.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>.</b><hr><i> One of the nature preserves in Slovakia.</i>')
.openPopup();

//monuments
L.marker([35.88504288744429, 14.4037164997512],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Mdina Gate</b><hr><i>One of the most popular tourist destinations in Malta.</i>")
.openPopup();

L.marker([36.01425614280091, 14.324268363546754],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Blue Lagoon</b><hr><i>One of the most popular tourist destinations in Malta.</i>")
.openPopup();

L.marker([35.82683334768911, 14.437019824612198],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mnajdra Temples of the Maltese Bronze Age</b><hr><i>One of the most popular tourist destinations in Malta.</i>')
.openPopup();


// cities
L.marker([35.910824921615955, 14.50280230389274],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Sliema.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89504007609341, 14.466460745410323],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Birkirkara.</b><hr><i> One of the biggest cities in Malta.</i>')
.openPopup();

L.marker([35.89877173968337, 14.514370904818078],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Valletta</b><hr><i> The capital city of Malta.</i>')
.openPopup();