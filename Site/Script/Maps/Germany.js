var map = L.map('map').setView([51.42070, 10.43204], 6);

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
L.marker([50.94130734237991, 6.958154681547038],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Cologne Cathedral</b><hr><i>One of the most popular tourist destinations in Germany.</i>")
.openPopup();

L.marker([48.277356141340874, 8.184714654253856],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>The Black Forest</b><hr><i>One of the most popular tourist destinations in Germany.</i>")
.openPopup();

L.marker([50.161382435248534, 7.701484472380946],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rhine Valley</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([49.900586112762426, 10.89595117424217],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bamberg</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([47.42055455664908, 10.984663387589352],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Zugspitze Massif</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([47.558808875701466, 12.982057517230952],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Königssee</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

L.marker([49.379357652267096, 10.185697975998362],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rothenburg</b><hr><i>One of the most popular tourist destinations in Germany.</i>')
.openPopup();

// cities
L.marker([53.54030739150022, 10.01953125],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Hamburg.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([48.16608541901253,11.557617187499998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Munich.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([50.965346321637696,6.954345703125],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Köln.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([50.127621728300475,8.690185546875],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Frankfurt.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([51.46427482966439,7.00927734375],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Essen.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([48.785151998043155,9.184570312499998],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Stuttgard.</b><hr><i> One of the biggest cities in Germany.</i>')
.openPopup();

L.marker([52.53627304145948, 13.38134765625],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Berlin.</b><hr><i> The capital city of Germany.</i>')
.openPopup();