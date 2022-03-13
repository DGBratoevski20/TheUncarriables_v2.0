var map = L.map('map').setView([56.00115, 10.05358], 7);

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
L.marker([55.67384138138522, 12.568200742878684],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Tivoli Gardens</b><hr><i>One of the most popular tourist destinations in Denmark.</i>')
.openPopup();

L.marker([55.73344656043942, 9.119701623628925],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>LEGO House</b><hr><i>One of the most popular tourist destinations in Denmark.</i>")
.openPopup();

L.marker([56.03917600283102, 12.621112283369962],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Kronborg Slot</b><hr><i>One of the most popular tourist destinations in Denmark.</i>')
.openPopup();

L.marker([55.17638810915072, 10.490441404232339],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Egeskov Castle</b><hr><i>One of the most popular tourist destinations in Denmark.</i>')
.openPopup();

L.marker([55.39958077725475, 10.393312429584304],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Hans Christian Andersen Museum</b><hr><i>One of the most popular tourist destinations in Denmark.</i>')
.openPopup();

L.marker([56.223578192793454, 10.308977122037048],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Den Gamle By</b><hr><i>One of the most popular tourist destinations in Denmark.</i>')
.openPopup();


//cities
L.marker([56.16860,10.20409],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aarhus.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.40736,10.39792],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Odense.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([57.05163,9.91785],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aalborg.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.47755,8.45970],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Esbjerg.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.71052,9.53283],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vejle.</b><hr><i> One of the biggest cities in Denmark.</i>')
.openPopup();

L.marker([55.67763, 12.57018],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Copenhagen.</b><hr><i> The capital city of Denmark.</i>')
.openPopup();