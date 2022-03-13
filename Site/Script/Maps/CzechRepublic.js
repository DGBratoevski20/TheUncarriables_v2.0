var map = L.map('map').setView([49.8883,15.26448 ],8 );

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
L.marker([50.09129619422601, 14.401595040864906],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Prague Castle</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([48.84581740699147, 14.37374551022646],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Ceský Krumlov Castle</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>")
.openPopup();

L.marker([49.19136195208444, 16.60766116172839],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Cathedral of St. Peter and Paul</b><hr><i>One of the most popular tourist destinations in Czech Republica.</i>')
.openPopup();

L.marker([50.22555749045453, 12.882115443540892],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Mill Colonnade</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([50.086760451190536, 14.389165667851483],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Strahov Monastery</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([49.98379824361703, 15.265126097000048],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Kutná Hora</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();

L.marker([50.586797492487506, 15.157591777110193],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Bohemian Paradise</b><hr><i>One of the most popular tourist destinations in Czech Republic.</i>')
.openPopup();


//cities
L.marker([49.82526,18.25952],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Ostrava.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.74159,13.37169],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pilsen.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.59508,17.24933],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Olomouc.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([50.76614,15.05331],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Liberec.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([49.19458,16.60705],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Brno.</b><hr><i> One of the biggest cities in Czech Republic.</i>')
.openPopup();

L.marker([50.07199, 14.42952],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Prague.</b><hr><i> The capital city of Czech Republic.</i>')
.openPopup();