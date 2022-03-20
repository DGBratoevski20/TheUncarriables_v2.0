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
    iconUrl: '../Images/monument.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

var polygon = [
    [
        41.84910468610387,
      -7.871704101562499
    ],
    [
        41.923737951221014,
      -7.881317138671874
    ],
    [
        41.92680320648791,
      -7.906036376953126
    ],
    [
        41.879786443521795,
      -7.915649414062499
    ],
    [
        41.86751550737105,
      -7.98431396484375
    ],
    [
        41.81943165932009,
      -8.054351806640625
    ],
    [
        41.81738473661011,
      -8.166961669921875
    ],
    [
        41.91045347666418,
      -8.2177734375
    ],
    [
        42.0064481470799,
      -8.1298828125
    ],
    [
        42.01665183556825,
      -8.080444335937498
    ],
    [
        42.08497432249349,
      -8.117523193359375
    ],
    [
        42.06560675405716,
      -8.177947998046875
    ],
    [
        41.95336258301847,
      -8.29193115234375
    ],
    [
        41.95540515378059,
      -8.382568359375
    ],
    [
        41.92475971933975,
      -8.394927978515625
    ],
    [
        41.9196507151163,
      -8.33587646484375
    ],
    [
        41.87774145109676,
      -8.3056640625
    ],
    [
        41.86137915587359,
      -8.2672119140625
    ],
    [
        41.81943165932009,
      -8.31939697265625
    ],
    [
        41.77950486590359,
      -8.282318115234375
    ],
    [
        41.801006999656636,
      -8.2122802734375
    ],
    [
        41.78257704086764,
      -8.19854736328125
    ],
    [
        41.72110557838152,
      -8.216400146484375
    ],
    [
        41.6872711837914,
      -8.180694580078125
    ],
    [
        41.70675376722692,
      -8.002166748046875
    ],
    [
        41.766190406938684,
      -7.976074218749999
    ],
    [
        41.80919639152055,
      -7.875823974609376
    ],
    [
        41.84910568509862,
      -7.871695384383202
    ]
  ]
var polygon2 =
[
    [
        38.93163900447185,
      -9.420089721679688
    ],
    [
        38.92522904714054,
      -9.4097900390625
    ],
    [
        38.92042119903319,
      -9.416656494140625
    ],
    [
        38.874463110537214,
      -9.380264282226562
    ],
    [
        38.846125291387025,
      -9.391250610351562
    ],
    [
        38.8284752845139,
      -9.414596557617186
    ],
    [
        38.81777618035695,
      -9.408416748046875
    ],
    [
        38.81403111409755,
      -9.376144409179688
    ],
    [
        38.79851374178721,
      -9.383697509765625
    ],
    [
        38.789950986265666,
      -9.371337890625
    ],
    [
        38.76907496033498,
      -9.38507080078125
    ],
    [
        38.739088441876866,
      -9.394683837890625
    ],
    [
        38.73158984401968,
      -9.449615478515623
    ],
    [
        38.72891158257717,
      -9.463348388671875
    ],
    [
        38.70533855257685,
      -9.444122314453125
    ],
    [
        38.694620968912254,
      -9.44000244140625
    ],
    [
        38.70694605159386,
      -9.48394775390625
    ],
    [
        38.7508703622086,
      -9.47296142578125
    ],
    [
        38.78085193143006,
      -9.499053955078125
    ],
    [
        38.931637700421604,
      -9.420089721679688
    ]
  ]
var polygon3 = 
[
    [
        39.35447606884594,
      -8.952484130859375
    ],
    [
        39.41179407178009,
      -8.900299072265625
    ],
    [
        39.43407169253772,
      -8.84674072265625
    ],
    [
        39.44891948347229,
      -8.848114013671875
    ],
    [
        39.44679856427205,
      -8.793182373046875
    ],
    [
        39.464824318306455,
      -8.773956298828125
    ],
    [
        39.44785903194701,
      -8.757476806640625
    ],
    [
        39.46588451142044,
      -8.732757568359375
    ],
    [
        39.44891948347229,
      -8.72589111328125
    ],
    [
        39.43937483836522,
      -8.691558837890625
    ],
    [
        39.4669446883827,
      -8.688812255859375
    ],
    [
        39.480725519034394,
      -8.664093017578125
    ],
    [
        39.499802162332884,
      -8.65997314453125
    ],
    [
        39.54535295443352,
      -8.57757568359375
    ],
    [
        39.56758783088905,
      -8.59130859375
    ],
    [
        39.57605638518604,
      -8.6297607421875
    ],
    [
        39.523110951240696,
      -8.680572509765625
    ],
    [
        39.561235736324825,
      -8.75335693359375
    ],
    [
        39.594048628201314,
      -8.74786376953125
    ],
    [
        39.61838363831915,
      -8.78631591796875
    ],
    [
        39.59510684995191,
      -8.8165283203125
    ],
    [
        39.59828141820854,
      -8.852233886718748
    ],
    [
        39.505100301007545,
      -8.927764892578125
    ],
    [
        39.41815983288686,
      -8.96484375
    ],
    [
        39.35447503185344,
      -8.9524844661355
    ]
  ]

//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>Peneda Geres National Park.</b><hr><i> One of the nature preserves in Portugal.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>Sintra Cascasis Nature Park.</b><hr><i> One of the nature preserves in Portugal.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>Serras de Aire e Candeeiros Nature Park.</b><hr><i> One of the nature preserves in Portugal.</i>')
.openPopup();

//monuments
L.marker([38.698142079760466, -9.206103086967863],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Mosteiro dos Jerónimos</b><hr><i>One of the most popular tourist destinations in Portugal.</i>")
.openPopup();

L.marker([39.60375473396095, -8.418440315782238],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Convent of Christ</b><hr><i>One of the most popular tourist destinations in Portugal.</i>")
.openPopup();

L.marker([41.554999623327, -8.376743465459633],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Bom Jesus do Monte</b><hr><i>One of the most popular tourist destinations in Portugal.</i>')
.openPopup();

L.marker([41.73075258426639, -8.107143041242729],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Cascata do Arado</b><hr><i>One of the most popular tourist destinations in Portugal.</i>")
.openPopup();

L.marker([41.44821515375674, -8.289332048822311],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Guimarães Castle</b><hr><i>One of the most popular tourist destinations in Portugal.</i>')
.openPopup();



// cities
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