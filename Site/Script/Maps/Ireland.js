var map = L.map('map').setView([53.49450545815423, -7.492800988275937 ], 7);

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
L.marker([52.97169122527151, -9.424720669231037],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>The Cliffs of Moher</b><hr><i>One of the most popular tourist destinations in Ireland.</i>")
.openPopup();

L.marker([53.344187447708755, -6.254591254515059],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Trinity College</b><hr><i>One of the most popular tourist destinations in Ireland.</i>")
.openPopup();

L.marker([51.83884453237279, -9.901277854835847],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Ring of Kerry</b><hr><i>One of the most popular tourist destinations in Ireland.</i>')
.openPopup();

L.marker([52.30274305227008, -7.656430666494791],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Glendalough</b><hr><i>One of the most popular tourist destinations in Ireland.</i>')
.openPopup();

L.marker([52.520259072254284, -7.890141065162641],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Rock of Cashel</b><hr><i>One of the most popular tourist destinations in Ireland.</i>')
.openPopup();

L.marker([51.92927701065057, -8.570339538720928],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Blarney Castle</b><hr><i>One of the most popular tourist destinations in Ireland.</i>')
.openPopup();

L.marker([52.21203111099736, -10.124309341013355],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>The Dingle Peninsula</b><hr><i>One of the most popular tourist destinations in Ireland.</i>')
.openPopup();


// cities
L.marker([54.59198028047157, -5.945591399993577],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Belfast.</b><hr><i> One of the biggest cities in Ireland.</i>')
.openPopup();

L.marker([51.901296981677376, -8.47583173180281],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Cork.</b><hr><i> One of the biggest cities in Ireland.</i>')
.openPopup();

L.marker([54.99671920087083, -7.3090607459210535],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Londonderry.</b><hr><i> One of the biggest cities in Ireland.</i>')
.openPopup();

L.marker([52.670690944573046, -8.63190699846907],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Limerick.</b><hr><i> One of the biggest cities in Ireland.</i>')
.openPopup();

L.marker([53.27008926170458, -9.056208901010477],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Galway.</b><hr><i> One of the biggest cities in Ireland.</i>')
.openPopup();

L.marker([53.366767227817896, -6.267659982425188],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Dublin.</b><hr><i> The capital city of Ireland.</i>')
.openPopup();