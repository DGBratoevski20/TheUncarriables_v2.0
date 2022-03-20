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

var polygon1 = [
			[
              54.322931143263474,
              -6.107025146484375
            ],
            [
              54.2379454042067,
              -6.03973388671875
            ],
            [
              54.19779692488548,
              -6.148223876953125
            ],
            [
              54.198600277023715,
              -6.210021972656249
            ],
            [
              54.180922922268515,
              -6.205902099609375
            ],
            [
              54.14393674917483,
              -6.26220703125
            ],
            [
              54.09725487769442,
              -6.236114501953125
            ],
            [
              54.098865472796994,
              -6.192169189453125
            ],
            [
              54.06664168685226,
              -6.1578369140625
            ],
            [
              54.06502984073274,
              -6.09466552734375
            ],
            [
              54.048907938384694,
              -6.079559326171875
            ],
            [
              54.02471335178857,
              -6.068572998046875
            ],
            [
              54.10450206317112,
              -5.898284912109375
            ],
            [
              54.18895902062141,
              -5.877685546874999
            ],
            [
              54.20743611987478,
              -5.89141845703125
            ],
            [
              54.250784674876684,
              -5.833740234375
            ],
            [
              54.289278516618545,
              -5.824127197265624
            ],
            [
              54.2572028118826,
              -5.879058837890625
            ],
            [
              54.27965842645384,
              -5.9161376953125
            ],
            [
              54.339747140472475,
              -5.91339111328125
            ],
            [
              54.374958365047036,
              -5.965576171875
            ],
            [
              54.37255855831926,
              -6.016387939453125
            ],
            [
              54.32853723970533,
              -6.064453125
            ],
            [
              54.322931143263474,
              -6.107025146484375
            ]
  ]


var polygon2 = [
			[
              52.046578650666554,
              -9.605827331542969
            ],
            [
              51.98424580948622,
              -9.620590209960938
            ],
            [
              51.98022817480167,
              -9.602737426757812
            ],
            [
              51.99566238276494,
              -9.557075500488281
            ],
            [
              51.99460541491793,
              -9.553298950195312
            ],
            [
              51.986148773826365,
              -9.579734802246094
            ],
            [
              51.984457253961224,
              -9.575271606445312
            ],
            [
              51.98720594130118,
              -9.557762145996092
            ],
            [
              51.97642166216334,
              -9.585914611816406
            ],
            [
              51.973460817611695,
              -9.608230590820312
            ],
            [
              51.981496940474585,
              -9.621620178222656
            ],
            [
              51.97959377848912,
              -9.635009765625
            ],
            [
              51.97599869634955,
              -9.63672637939453
            ],
            [
              51.973460817611695,
              -9.627456665039062
            ],
            [
              51.94638116576159,
              -9.597244262695312
            ],
            [
              51.95167144574336,
              -9.579391479492188
            ],
            [
              51.94278341890263,
              -9.585914611816406
            ],
            [
              51.941513556993755,
              -9.542999267578125
            ],
            [
              51.96246168188569,
              -9.488754272460938
            ],
            [
              51.9730378238461,
              -9.486007690429688
            ],
            [
              52.00369452297293,
              -9.491844177246094
            ],
            [
              52.019543202230835,
              -9.477424621582031
            ],
            [
              52.036442273206845,
              -9.488754272460938
            ],
            [
              52.04129957424476,
              -9.526176452636719
            ],
            [
              52.05713493293754,
              -9.506263732910156
            ],
            [
              52.067266617649565,
              -9.530296325683594
            ],
            [
              52.061356747539776,
              -9.538536071777344
            ],
            [
              52.046578650666554,
              -9.605827331542969
            ]
  ]
  
  var polygon3 = [
			[
              53.03151023201106,
              -9.054450988769531
            ],
            [
              53.00362831830147,
              -9.086036682128906
            ],
            [
              52.98875059661575,
              -9.042778015136719
            ],
            [
              52.99639673273294,
              -8.989219665527344
            ],
            [
              53.0034217183798,
              -8.975486755371094
            ],
            [
              52.98296343157188,
              -8.987503051757812
            ],
            [
              52.98461698641162,
              -8.966560363769531
            ],
            [
              52.993503759350965,
              -8.9593505859375
            ],
            [
              53.00197549124342,
              -8.966903686523438
            ],
            [
              53.01333739936637,
              -8.95660400390625
            ],
            [
              53.010238993755976,
              -8.953857421875
            ],
            [
              53.01230462221248,
              -8.939781188964844
            ],
            [
              53.023457307549805,
              -8.930854797363281
            ],
            [
              53.02490281496038,
              -8.922615051269531
            ],
            [
              53.03006494602335,
              -8.925018310546875
            ],
            [
              53.030890829661395,
              -8.934288024902344
            ],
            [
              53.02758720021572,
              -8.943557739257812
            ],
            [
              53.03151023201106,
              -9.054450988769531
            ]
  ]

//polygons
var polygon = L.polygon(polygon1, {color: 'red'}).addTo(map)
  .bindPopup('<b>Mourne & Slieve Croob AONB.</b><hr><i> One of the nature preserves in Ireland.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon2, {color: 'red'}).addTo(map)
  .bindPopup('<b>Killarney National Park.</b><hr><i> One of the nature preserves in Ireland.</i>')
  .openPopup();
  
var polygon = L.polygon(polygon3, {color: 'red'}).addTo(map)
  .bindPopup('<b>Burren National Park.</b><hr><i> One of the nature preserves in Ireland.</i>')
  .openPopup();


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
.bindPopup('<b>Belfast.</b><hr><i>Population: 638,717</i><br><i>Area: 115 km<sup>2</sup></i><br><i>Elevation: 3 m</i><hr><i>Belfast is Northern Ireland’s capital.</i>')
.openPopup();

L.marker([51.901296981677376, -8.47583173180281],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Cork.</b><hr><i>Population: 124,391</i><br><i>Area: 104.91 km<sup>2</sup></i><br><i>Elevation: 574 m</i><hr><i>Cork is the second largest city in Ireland, located in the south-west of Ireland, in the province of Munster.</i>')
.openPopup();

L.marker([54.99671920087083, -7.3090607459210535],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Londonderry.</b><hr><i>Population: 90,736</i><br><i>Area: 2.118 km<sup>2</sup></i><br><i>Elevation: 584 m</i><hr><i>Londonderry is a town in Windham County, Vermont, United States. It is bounded on the north by Landgrove and Weston, on the east by Windham, on the south by Jamaica and on the west by Winhall and Landgrove.</i>')
.openPopup();

L.marker([52.670690944573046, -8.63190699846907],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Limerick.</b><hr><i>Population: 94,192</i><br><i>Area: 59.2 km<sup>2</sup></i><br><i>Elevation: 10 m</i><hr><i>Limerick is a major city in the Republic of Ireland, set in Munster province in the south of the country.</i>')
.openPopup();

L.marker([53.27008926170458, -9.056208901010477],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Galway.</b><hr><i>Population: 544,107</i><br><i>Area: 117.8 km<sup>2</sup></i><br><i>Elevation: 25 m</i><hr><i>Galway, a harbour city on Ireland’s west coast, sits where the River Corrib meets the Atlantic Ocean.</i>')
.openPopup();

L.marker([53.366767227817896, -6.267659982425188],{icon:CitiesMarkerIcon}).addTo(map)
.bindPopup('<b>Dublin.</b><hr><i>Population: 638,717</i><br><i>Area: 115 km<sup>2</sup></i><br><i>Elevation: 20 m</i><hr><i>Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey.</i>')
.openPopup();