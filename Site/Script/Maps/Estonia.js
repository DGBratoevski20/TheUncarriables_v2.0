var map = L.map('map').setView([58.821,25.47271 ], 7);

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
              58.572548994948384,
              25.20057678222656
            ],
            [
              58.54102820380604,
              25.15869140625
            ],
            [
              58.51844475917881,
              25.10101318359375
            ],
            [
              58.51019638536994,
              25.038528442382812
            ],
            [
              58.49405265446298,
              24.9774169921875
            ],
            [
              58.476465481471955,
              24.993209838867188
            ],
            [
              58.437311409392635,
              24.94171142578125
            ],
            [
              58.44485824469768,
              24.901199340820312
            ],
            [
              58.43551430529625,
              24.886093139648438
            ],
            [
              58.38263842901793,
              24.89845275878906
            ],
            [
              58.36499549981006,
              24.945831298828125
            ],
            [
              58.34265914823506,
              24.923171997070312
            ],
            [
              58.32427510498736,
              24.982223510742184
            ],
            [
              58.32860162261882,
              25.0103759765625
            ],
            [
              58.34842472061986,
              25.009689331054684
            ],
            [
              58.35382909009604,
              25.067367553710938
            ],
            [
              58.34337989624819,
              25.075607299804688
            ],
            [
              58.346983415747545,
              25.096893310546875
            ],
            [
              58.35490986475048,
              25.098953247070312
            ],
            [
              58.34337989624819,
              25.157318115234375
            ],
            [
              58.34950566067771,
              25.160064697265625
            ],
            [
              58.34986596667874,
              25.178604125976562
            ],
            [
              58.362114183796976,
              25.184783935546875
            ],
            [
              58.36427519285588,
              25.1971435546875
            ],
            [
              58.394875277873886,
              25.201263427734375
            ],
            [
              58.424729753759124,
              25.166244506835938
            ],
            [
              58.4308414052246,
              25.236282348632812
            ],
            [
              58.4261678848373,
              25.291900634765625
            ],
            [
              58.395235120914045,
              25.29327392578125
            ],
            [
              58.40135189067493,
              25.349578857421875
            ],
            [
              58.42544882663992,
              25.31524658203125
            ],
            [
              58.45060712824176,
              25.30426025390625
            ],
            [
              58.44629555365028,
              25.28228759765625
            ],
            [
              58.48400391942208,
              25.241775512695312
            ],
            [
              58.498717161463496,
              25.242462158203125
            ],
            [
              58.52167185596512,
              25.27473449707031
            ],
            [
              58.55750851875871,
              25.263748168945312
            ],
            [
              58.574697107141226,
              25.240402221679688
            ],
            [
              58.572548994948384,
              25.20057678222656
            ]
  ]


var polygon2 = [
			[
              58.55894122336624,
              25.967559814453125
            ],
            [
              58.48651637269047,
              26.052703857421875
            ],
            [
              58.429043970796265,
              26.169433593749996
            ],
            [
              58.41753821732159,
              26.154327392578125
            ],
            [
              58.42688692835143,
              26.10488891601562
            ],
            [
              58.40890643509699,
              26.109008789062496
            ],
            [
              58.40387025208678,
              26.13922119140625
            ],
            [
              58.38659787420012,
              26.13235473632812
            ],
            [
              58.37507825384993,
              26.155700683593746
            ],
            [
              58.39811373301585,
              26.19415283203125
            ],
            [
              58.34770407553547,
              26.220245361328125
            ],
            [
              58.39163652523205,
              26.247711181640625
            ],
            [
              58.4002725378412,
              26.231231689453125
            ],
            [
              58.402431210456925,
              26.26007080078125
            ],
            [
              58.40099211006947,
              26.34658813476562
            ],
            [
              58.3844382319306,
              26.363067626953125
            ],
            [
              58.37147760096145,
              26.431732177734375
            ],
            [
              58.38947719151809,
              26.445465087890625
            ],
            [
              58.39667445634673,
              26.497650146484375
            ],
            [
              58.42113416909718,
              26.50177001953125
            ],
            [
              58.42832497133073,
              26.475677490234375
            ],
            [
              58.43838962780922,
              26.382293701171875
            ],
            [
              58.418976642086946,
              26.368560791015625
            ],
            [
              58.42041500811191,
              26.34521484375
            ],
            [
              58.429762955579285,
              26.324615478515625
            ],
            [
              58.47861948591618,
              26.336975097656246
            ],
            [
              58.51952049108996,
              26.2847900390625
            ],
            [
              58.56395522807064,
              26.28616333007812
            ],
            [
              58.5496275959733,
              26.264190673828125
            ],
            [
              58.56180645679927,
              26.21063232421875
            ],
            [
              58.5847198880941,
              26.21063232421875
            ],
            [
              58.56610386751617,
              26.148834228515625
            ],
            [
              58.571116846928156,
              26.0980224609375
            ],
            [
              58.55822487838689,
              26.10076904296875
            ],
            [
              58.57040075094998,
              26.05133056640625
            ],
            [
              58.56753622057912,
              26.02386474609375
            ],
            [
              58.57970885637573,
              25.99639892578125
            ],
            [
              58.55894122336624,
              25.967559814453125
            ]
  ]
  
  var polygon3 = [
			[
              59.646928202623386,
              25.499267578125
            ],
            [
              59.60595950118497,
              25.4937744140625
            ],
            [
              59.55032884409698,
              25.547332763671875
            ],
            [
              59.54058401968446,
              25.555572509765625
            ],
            [
              59.51690627993552,
              25.5267333984375
            ],
            [
              59.51690627993552,
              25.462188720703125
            ],
            [
              59.49809151947178,
              25.459442138671875
            ],
            [
              59.49112042682249,
              25.4937744140625
            ],
            [
              59.47787138430637,
              25.49652099609375
            ],
            [
              59.49669741610709,
              25.5596923828125
            ],
            [
              59.51133262987846,
              25.54183959960937
            ],
            [
              59.51620962404412,
              25.555572509765625
            ],
            [
              59.490423238378284,
              25.611877441406246
            ],
            [
              59.48902881829867,
              25.65032958984375
            ],
            [
              59.47089611604663,
              25.63522338867187
            ],
            [
              59.45624336447568,
              25.9661865234375
            ],
            [
              59.49878854956169,
              25.940093994140625
            ],
            [
              59.50784863088567,
              25.9771728515625
            ],
            [
              59.5391916717953,
              26.07330322265625
            ],
            [
              59.53292539429278,
              26.080169677734375
            ],
            [
              59.54824090473033,
              26.124114990234375
            ],
            [
              59.54336854286804,
              26.159820556640625
            ],
            [
              59.54128017205441,
              26.2408447265625
            ],
            [
              59.564245132658975,
              26.2408447265625
            ],
            [
              59.57467857518734,
              26.27105712890625
            ],
            [
              59.58371827604594,
              26.261444091796875
            ],
            [
              59.58580401594082,
              26.10076904296875
            ],
            [
              59.624019665309596,
              26.04446411132812
            ],
            [
              59.62610290569049,
              26.026611328125
            ],
            [
              59.61151750886343,
              25.995025634765625
            ],
            [
              59.63374034814462,
              25.974426269531246
            ],
            [
              59.63096329735387,
              25.96343994140625
            ],
            [
              59.58371827604594,
              25.973052978515625
            ],
            [
              59.57606945649408,
              25.934600830078125
            ],
            [
              59.58371827604594,
              25.9112548828125
            ],
            [
              59.5990106987494,
              25.918121337890625
            ],
            [
              59.61221219518693,
              25.90850830078125
            ],
            [
              59.6212418104322,
              25.865936279296875
            ],
            [
              59.579546408235004,
              25.87005615234375
            ],
            [
              59.56911447500512,
              25.854949951171875
            ],
            [
              59.56702770025383,
              25.808258056640625
            ],
            [
              59.57120112038099,
              25.778045654296875
            ],
            [
              59.64137605340958,
              25.758819580078125
            ],
            [
              59.65664225341022,
              25.731353759765625
            ],
            [
              59.655254704087724,
              25.717620849609375
            ],
            [
              59.66565992490267,
              25.703887939453125
            ],
            [
              59.65386709736167,
              25.673675537109375
            ],
            [
              59.61429616798031,
              25.687408447265625
            ],
            [
              59.60179039211289,
              25.70938110351562
            ],
            [
              59.57606945649408,
              25.69976806640625
            ],
            [
              59.564245132658975,
              25.670928955078125
            ],
            [
              59.57746028030841,
              25.62149047851562
            ],
            [
              59.598315739492335,
              25.60089111328125
            ],
            [
              59.60318015259842,
              25.57342529296875
            ],
            [
              59.61221219518693,
              25.569305419921875
            ],
            [
              59.61429616798031,
              25.522613525390625
            ],
            [
              59.64484625432281,
              25.51437377929687
            ],
            [
              59.646928202623386,
              25.499267578125
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Soomaa National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Lille Vildmose National Park.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Jægersborg Dyrehave.</b><hr><i> One of the nature preserves in Czech Republic.</i>')
  .openPopup();




//monuments
L.marker([59.4366043733835, 24.744334183754145],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Tour Tallinn's Old Town</b><hr><i>One of the most popular tourist destinations in Estonia.</i>")
.openPopup();

L.marker([58.246975350432535, 22.479765708025337],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Kuressaare Episcopal Castle</b><hr><i>One of the most popular tourist destinations in Estonia.</i>")
.openPopup();

L.marker([59.45121198312306, 24.738442509658288],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Lennusadam Seaplane Harbour</b><hr><i>One of the most popular tourist destinations in Estonia.</i>')
.openPopup();

L.marker([59.43891410349899, 24.748325581780417],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Estonian National Museum</b><hr><i>One of the most popular tourist destinations in Estonia.</i>')
.openPopup();

L.marker([58.40507812658212, 27.052423216917877],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Typa</b><hr><i>One of the most popular tourist destinations in Estonia.</i>')
.openPopup();

L.marker([59.37818318309819, 28.203250258339857],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Narva River Promenade</b><hr><i>One of the most popular tourist destinations in Estonia.</i>')
.openPopup();

L.marker([58.37690384303668, 26.73486906754939],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>AHHAA Science Centre</b><hr><i>One of the most popular tourist destinations in Estonia.</i>')
.openPopup();


//cities
L.marker([58.38760,26.73551],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tartu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39331,28.17984],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Narva.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([58.39646,24.49151],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Pärnu.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.39763,27.28065],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Kohtla-Järve.</b><hr><i> One of the biggest cities in Estonia.</i>')
.openPopup();

L.marker([59.43672, 24.75756],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Tallinn.</b><hr><i> The capital city of Estonia.</i>')
.openPopup();