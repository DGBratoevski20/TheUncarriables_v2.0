var map = L.map('map').setView([52.19528449694878, 5.4464670376677455], 7);

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
L.marker([52.37261097249224, 4.888577296326658],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Canals of Amsterdam</b><hr><i>One of the most popular tourist destinations in Netherlands.</i>")
.openPopup();

L.marker([52.27000402204836, 4.546915081822388],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Keukenhof</b><hr><i>One of the most popular tourist destinations in Netherlands.</i>")
.openPopup();

L.marker([52.36017448550254, 4.885873257570371],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Rijksmuseum</b><hr><i>One of the most popular tourist destinations in Netherlands.</i>')
.openPopup();


// cities
L.marker([52.072509777275876, 4.298209580307056],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>The Hague.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([51.93585750763058, 4.474379115296331],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Rotterdam.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([52.09859240224668, 5.121858732711509],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Utrecht.</b><hr><i> One of the biggest cities in Netherlands.</i>')
.openPopup();

L.marker([52.37511137109779, 4.902678761742699],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Amsterdam.</b><hr><i> The capital city of Netherlands.</i>')
.openPopup();