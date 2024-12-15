/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
De initiële grootte is 16 met een maximale zoom van 19.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('bdbMap').setView([51.317, 4.433], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// bepaal de rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [[51.2857, 4.4060], [51.3593, 4.4935]];

// kleur de rechthoek in met de rode AP-kleur (#e60005)
var circle = L.circle([51.317, 4.433], {
    color: 'green',
    fillColor: '#bbffaa',
    fillOpacity: 0.3,
    radius: 1000
}).addTo(map);
// L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
L.marker([51.317, 4.433]).addTo(map)
    .bindPopup('mijn locatie:<br> <b>Kapellen<br>2950</b>')
    .openPopup();