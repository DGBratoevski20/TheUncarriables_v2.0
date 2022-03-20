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

var polygon1 = [
			[
              56.29749114761643,
              10.458297729492186
            ],
            [
              56.2864403632266,
              10.454177856445312
            ],
            [
              56.28148552616123,
              10.457611083984375
            ],
            [
              56.27881727100801,
              10.4754638671875
            ],
            [
              56.28262900709065,
              10.482330322265625
            ],
            [
              56.275386383661846,
              10.504989624023438
            ],
            [
              56.266617162057166,
              10.531082153320312
            ],
            [
              56.27614882967063,
              10.570907592773438
            ],
            [
              56.250217137468134,
              10.560607910156248
            ],
            [
              56.245257606920404,
              10.525588989257812
            ],
            [
              56.21968676038894,
              10.504989624023438
            ],
            [
              56.21090477288337,
              10.493316650390623
            ],
            [
              56.18492886719585,
              10.524215698242188
            ],
            [
              56.177667749138514,
              10.491943359375
            ],
            [
              56.17116979490286,
              10.496749877929688
            ],
            [
              56.171934317188786,
              10.520095825195312
            ],
            [
              56.16658234151263,
              10.530395507812498
            ],
            [
              56.22006854029571,
              10.586013793945312
            ],
            [
              56.22808503989871,
              10.616226196289062
            ],
            [
              56.22197738278634,
              10.668411254882812
            ],
            [
              56.19180655413441,
              10.67047119140625
            ],
            [
              56.18225387824831,
              10.654678344726562
            ],
            [
              56.1887499565693,
              10.640945434570312
            ],
            [
              56.173463316094335,
              10.640945434570312
            ],
            [
              56.15931775281314,
              10.671157836914062
            ],
            [
              56.139811272843204,
              10.688323974609373
            ],
            [
              56.14440192363974,
              10.715789794921875
            ],
            [
              56.15931775281314,
              10.724029541015625
            ],
            [
              56.18683945944164,
              10.696563720703125
            ],
            [
              56.20250272823803,
              10.711669921874998
            ],
            [
              56.205558230204865,
              10.70343017578125
            ],
            [
              56.24220526879677,
              10.717849731445312
            ],
            [
              56.24487607796049,
              10.787887573242188
            ],
            [
              56.29634811118036,
              10.844879150390625
            ],
            [
              56.299396132370525,
              10.835952758789062
            ],
            [
              56.2913945582176,
              10.807113647460936
            ],
            [
              56.248691196493475,
              10.7830810546875
            ],
            [
              56.25593887445578,
              10.735015869140623
            ],
            [
              56.26928626839682,
              10.742568969726562
            ],
            [
              56.285296996278966,
              10.6622314453125
            ],
            [
              56.294442974479125,
              10.566787719726562
            ],
            [
              56.28148552616123,
              10.525588989257812
            ],
            [
              56.29253774280747,
              10.507736206054688
            ],
            [
              56.307776937156945,
              10.498809814453125
            ],
            [
              56.30244391045401,
              10.479583740234375
            ],
            [
              56.29749114761643,
              10.458297729492186
            ]
  ]


var polygon2 = [
			[
              56.943288772032595,
              10.146045684814453
            ],
            [
              56.938793976067046,
              10.167846679687498
            ],
            [
              56.922495798836955,
              10.1788330078125
            ],
            [
              56.88894036757325,
              10.167846679687498
            ],
            [
              56.88650220638941,
              10.163383483886719
            ],
            [
              56.875622318197465,
              10.171279907226562
            ],
            [
              56.84934746898674,
              10.153083801269531
            ],
            [
              56.81027645967079,
              10.198402404785156
            ],
            [
              56.81234373588657,
              10.224151611328125
            ],
            [
              56.82079958755797,
              10.234107971191404
            ],
            [
              56.82023592347987,
              10.272903442382812
            ],
            [
              56.875247093152524,
              10.258140563964844
            ],
            [
              56.888190181075764,
              10.259170532226562
            ],
            [
              56.90075381840631,
              10.23651123046875
            ],
            [
              56.91406291306079,
              10.243034362792969
            ],
            [
              56.913313231005866,
              10.249214172363281
            ],
            [
              56.92399477907075,
              10.258140563964844
            ],
            [
              56.928304011855204,
              10.246810913085936
            ],
            [
              56.94197784583814,
              10.235481262207031
            ],
            [
              56.95190228344066,
              10.219688415527344
            ],
            [
              56.9324254210307,
              10.198402404785156
            ],
            [
              56.92867870423079,
              10.188102722167969
            ],
            [
              56.94834476995304,
              10.1788330078125
            ],
            [
              56.949280990627514,
              10.159950256347656
            ],
            [
              56.943288772032595,
              10.146045684814453
            ]
  ]
  
  var polygon3 = [
			[
              55.80658727534378,
              12.551536560058592
            ],
            [
              55.79877228472536,
              12.54415512084961
            ],
            [
              55.77348342260549,
              12.545013427734375
            ],
            [
              55.77135918323877,
              12.56509780883789
            ],
            [
              55.77155230069221,
              12.575740814208984
            ],
            [
              55.774352396252965,
              12.577285766601562
            ],
            [
              55.77695920095483,
              12.585868835449219
            ],
            [
              55.78902546921169,
              12.59084701538086
            ],
            [
              55.811314100800935,
              12.575912475585936
            ],
            [
              55.81006010100849,
              12.561664581298828
            ],
            [
              55.803982452763975,
              12.561664581298828
            ],
            [
              55.803210620009835,
              12.558059692382812
            ],
            [
              55.80523664835478,
              12.557716369628906
            ],
            [
              55.80658727534378,
              12.551536560058592
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Mols Bjerge National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Lille Vildmose National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Jægersborg Dyrehave.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();



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
.bindPopup('<b>Aarhus.</b><hr><i>Population: 336,411</i><br><i>Area: 91 km<sup>2</sup></i><br><i>Elevation: 0 m</i><hr><i>Aarhus is a city in Denmark on the Jutland peninsula’s east coast.</i>')
.openPopup();

L.marker([55.40736,10.39792],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Odense.</b><hr><i>Population: 200,703</i><br><i>Area: 304.3 km<sup>2</sup></i><br><i>Elevation: 13 m</i><hr><i>Odense is the third-largest city in Denmark.</i>')
.openPopup();

L.marker([57.05163,9.91785],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Aalborg.</b><i>Population: 211,684</i><br><i>Area: 6.05 km<sup>2</sup></i><br><i>Elevation: 55 m</i><hr><i>Aalborg is a city in the Jutland region of Denmark.</i>')
.openPopup();

L.marker([55.47755,8.45970],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Esbjerg.</b><i>Population: 115,932</i><br><i>Area: 742.5 km<sup>2</sup></i><br><i>Elevation: 11 m</i><hr><i>Esbjerg is a seaport town and seat of Esbjerg Municipality on the west coast of the Jutland peninsula in southwest Denmark.</i>')
.openPopup();

L.marker([55.71052,9.53283],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Vejle.</b><i>Population: 113,720</i><br><i>Area: 144 km<sup>2</sup></i><br><i>Elevation: 8 m</i><hr><i>Vejle is a town in Denmark, in the southeast of the Jutland Peninsula at the head of Vejle Fjord, where the Vejle River and Grejs River and their valleys converge.</i>')
.openPopup();

L.marker([55.67763, 12.57018],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Copenhagen.</b><hr><i>Population: 602,481</i><br><i>Area: 179.8 km<sup>2</sup></i><br><i>Elevation: 91 m</i><hr><i>Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager.</i>')
.openPopup();