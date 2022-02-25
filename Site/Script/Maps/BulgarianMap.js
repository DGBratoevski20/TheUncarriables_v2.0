var map = L.map('map').setView([42.75, 25.09], 7.5);
	
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

L.marker([42.145, 24.75]).addTo(map)
.bindPopup('<b>Plovdiv.</b><hr><i> The oldest city in Europe.</i>')
.openPopup();

L.marker([42.698, 23.32222222]).addTo(map)
.bindPopup('<b>Sofia.</b><hr><i> The capital of Bulgaria.</i>')
.openPopup();

L.marker([43.20645, 27.91536333]).addTo(map)
.bindPopup('<b>Varna.</b><hr><i> The sea capital of Bulgaria.</i>')
.openPopup();

L.marker([42.4923, 27.47136333]).addTo(map)
.bindPopup('<b>Burgas.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.0822, 25.63136333]).addTo(map)
.bindPopup('<b>Veliko Tarnovo.</b><hr><i> The oldest capital in Bulgaria.</i>')
.openPopup();

L.marker([42.423871, 25.6272]).addTo(map)
.bindPopup('<b>Stara Zagora.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.8476, 25.954]).addTo(map)
.bindPopup('<b>Ruse.</b><hr><i> One of the biggest cities in Bulgaria.</i>')
.openPopup();

L.marker([43.409, 24.617999]).addTo(map)
.bindPopup('<b>Pleven.</b><hr><i>  One of the biggest cities in Bulgaria.</i>')
.openPopup();