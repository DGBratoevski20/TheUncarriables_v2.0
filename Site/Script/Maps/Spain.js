var map = L.map('map').setView([40.63710463955615, -3.321829354120931], 6);

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
        39.16124615198509,
        2.9170846939086914
    ],
    [
        39.15845096723175,
      2.916698455810547
    ],
    [
        39.15299338169222,
      2.9210329055786133
    ],
    [
        39.15256075009693,
      2.9172134399414062
    ],
    [
        39.14410726064759,
      2.9144668579101562
    ],
    [
        39.13804941151961,
      2.9155826568603516
    ],
    [
        39.13851541842084,
      2.9262256622314453
    ],
    [
        39.13605220415018,
      2.922964096069336
    ],
    [
        39.128861788550225,
      2.9199600219726562
    ],
    [
        39.12792964388499,
      2.9336929321289062
    ],
    [
        39.1255326438119,
      2.9549789428710938
    ],
    [
        39.13671794623464,
      2.9542922973632812
    ],
    [
        39.13618535307064,
      2.9584121704101562
    ],
    [
        39.14151110342269,
      2.962188720703125
    ],
    [
        39.1433750208681,
      2.955665588378906
    ],
    [
        39.148433976583966,
      2.95806884765625
    ],
    [
        39.15109643880776,
      2.9652786254882812
    ],
    [
        39.14736896349185,
      2.9690551757812496
    ],
    [
        39.15429126051911,
      2.9711151123046875
    ],
    [
        39.1572197196678,
      2.975921630859375
    ],
    [
        39.16014805693377,
      2.9700851440429688
    ],
    [
        39.16440723901233,
      2.959442138671875
    ],
    [
        39.165471994238374,
      2.9515457153320312
    ],
    [
        39.1633424676687,
      2.9474258422851562
    ],
    [
        39.15455748911449,
      2.9494857788085938
    ],
    [
        39.148966477086624,
      2.9494857788085938
    ],
    [
        39.149232725827105,
      2.9419326782226562
    ],
    [
        39.157752153690964,
      2.9367828369140625
    ],
    [
        39.155089943283414,
      2.9299163818359375
    ],
    [
        39.14444009439299,
      2.9357528686523438
    ],
    [
        39.14763521827571,
      2.929229736328125
    ],
    [
        39.16094667321639,
      2.9189300537109375
    ]
  ]

var polygon2 = [
    [
        43.15109780818096,
      -5.516510009765625
    ],
    [
        43.0287452513488,
      -5.387420654296875
    ],
    [
        42.90614831626671,
      -5.3118896484375
    ],
    [
        42.85683979344514,
      -4.97955322265625
    ],
    [
        42.818573401893836,
      -4.5648193359375
    ],
    [
        42.890051907144574,
      -4.2242431640625
    ],
    [
        43.066881271984954,
      -4.44671630859375
    ],
    [
        43.06487470411881,
      -4.7955322265625
    ],
    [
        43.21118152841771,
      -4.6142578125
    ],
    [
        43.271206115959785,
      -4.6417236328125
    ],
    [
        43.31118965238512,
      -5.053710937499999
    ],
    [
        43.281204464332745,
      -5.10589599609375
    ],
    [
        43.18715513581086,
      -5.0152587890625
    ],
    [
        43.279204926082784,
      -5.20751953125
    ],
    [
        43.27520565244535,
      -5.3997802734375
    ],
    [
        43.241201214257885,
      -5.460205078125
    ],
    [
        43.155105229057256,
      -5.4986572265625
    ],
    [
        43.15122304406093,
      -5.5158233642578125
    ],
    [
        43.151105635430966,
      -5.516456365585327
    ],
    [
        43.15109805278253,
      -5.5165086686611176
    ]
  ]

var polygon3 = [
    [
        28.483177058570757,
      -17.8692626953125
    ],
    [
        28.78210367383126,
      -18.0010986328125
    ],
    [
        28.8831596093235,
      -17.9132080078125
    ],
    [
        28.830237784797042,
      -17.764892578124996
    ],
    [
        28.473520105140903,
      -17.8363037109375
    ]
  ]


//polygons
var polygon = L.polygon(polygon, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Cabrera".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Parque Nacional de Los Picos de Europa".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();

var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
.bindPopup('<b>National park "Caldera de Taburiente".</b><hr><i> One of the nature preserves in Spain.</i>')
.openPopup();


//monuments
L.marker([37.17831796727035, -3.585005633029134],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Generalife Gardens</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([37.87921890901532, -4.779065036711082],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>The Great Mosque of Cordoba</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([40.41427997599244, -3.691474308319916],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Museo Nacional del Prado</b><hr><i>One of the most popular tourist destinations in Spain.</i>')
.openPopup();

L.marker([37.38609747142907, -5.992774207886683],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Seville Cathedral</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();

L.marker([43.26885867098342, -2.933378800350127],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup('<b>Guggenheim Museum</b><hr><i>One of the most popular tourist destinations in Spain.</i>')
.openPopup();

L.marker([39.45546033734307, -0.3499114389807377],{icon:TouristDestinationsMarkerIcon}).addTo(map)
.bindPopup("<b>Ciudad de las Artes y las Ciencias</b><hr><i>One of the most popular tourist destinations in Spain.</i>")
.openPopup();


//cities
L.marker([41.39171025016631, 2.1736045997546922],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Barcelona.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([39.46915854721577, -0.376001122242424],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Valencia.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([37.388441675791086, -5.9859197043299],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Seville.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([38.34336173710972, -0.4917942862638563],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Alicante.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([38.00512068634677, -1.130386315917573],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Murcia.</b><hr><i> One of the biggest cities in Spain.</i>')
.openPopup();

L.marker([40.419810088119654, -3.7047615707462103],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Madrid.</b><hr><i> The capital city of Spain.</i>')
.openPopup();