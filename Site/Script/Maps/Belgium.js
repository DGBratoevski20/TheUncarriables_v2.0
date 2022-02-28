var map = L.map('map').setView([50.620948, 4.528359], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.05966, 3.72912]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([51.22878, 4.40136112]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([51.21080, 3.224591]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([50.85017, 4.36192]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([50.63255, 5.56805]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([50.63255, 5.56805]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();

L.marker([50.46641, 4.86376]).addTo(map)
.bindPopup('<b>Wien.</b><hr><i> The capital city of Austria.</i>')
.openPopup();