var map = L.map('map').setView([38.50,-90.324783], 11);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker1 = L.marker([38.61889149138405, -90.19243382606129]).addTo(map);
marker1.bindPopup("<b>Broadway Oyster Bar</b><br>736 S Broadway, St. Louis, MO 63102").openPopup();

var marker2 = L.marker([38.631491109439324, -90.1944409999229]).addTo(map);
marker2.bindPopup("<b>Mizu Sushi Bar</b><br>1013 Washington Ave, St. Louis, MO 63101").openPopup();

var marker3 = L.marker([38.62078137153155, -90.52426366148366]).addTo(map);
marker3.bindPopup("<b>Circle 7 Ranch</b><br>14412 Clayton Rd, Ballwin, MO 63011").openPopup();

var marker4 = L.marker([38.59161824253797, -90.58393704103868]).addTo(map);
marker4.bindPopup("<b>Pizzarelli's Pizzeria</b><br>15858 Manchester Rd, Ellisville, MO 63021").openPopup();

var marker5 = L.marker([38.680365186461174, -90.49820147215402]).addTo(map);
marker5.bindPopup("<b>Kimcheese</b><br>13435 Olive Blvd, Chesterfield, MO 63017").openPopup();
