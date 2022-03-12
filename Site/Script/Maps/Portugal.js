var map = L.map('map').setView([39.777788, -8.107635469314499], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let CitiesMarkerIcon = L.icon ({
    iconUrl: '../Images/marker.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

let TouristDestinationsMarkerIcon = L.icon ({
    iconUrl: '../Images/castle.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([41.159326804937216, -8.630917284788302],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Porto.</b><hr><i> One of the biggest cities in Portugal.</i>')
.openPopup();

L.marker([41.54780059999308, -8.427666639620412],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Braga.</b><hr><i> One of the biggest cities in Portugal.</i>')
.openPopup();

L.marker([40.20182698905252, -8.415120843779475],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Coimbra.</b><hr><i> One of the biggest cities in Portugal.</i>')
.openPopup();

L.marker([40.64437897599664, -8.649745969900799],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aveiro.</b><hr><i> One of the biggest cities in Portugal.</i>')
.openPopup();

L.marker([38.72141158673595, -9.139789655321902],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Lisbon.</b><hr><i> The capital city of Portugal.</i>')
.openPopup();