/* =====================================================================
   MAP  –  Leaflet map setup, country GeoJSON layer, city markers
   ===================================================================== */

const map = L.map('map', {
  center: [20, 10],
  zoom: 2,
  minZoom: 2,
  maxZoom: 12,
  zoomControl: true,
});

// Dark tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);

/* ── Country GeoJSON ── */

let geoLayer = null;
const GEOJSON_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

function countryStyle(feature) {
  const name    = feature.properties.ADMIN;
  const visited = visitedCountries.has(name);
  return {
    fillColor:   visited ? '#3b82f6' : '#1e3248',
    fillOpacity: visited ? 0.65      : 0.35,
    color:       visited ? '#7ec8e3' : '#2a3a50',
    weight:      visited ? 1.5       : 0.5,
  };
}

function onEachCountry(feature, layer) {
  const name = feature.properties.ADMIN;
  layer.on({
    mouseover(e) {
      if (!visitedCountries.has(name)) {
        e.target.setStyle({ fillOpacity: 0.55, fillColor: '#254d75' });
      }
    },
    mouseout(e) {
      geoLayer.resetStyle(e.target);
    },
    click(e) {
      const visited = visitedCountries.has(name);
      const html = `
        <div class="popup-title">🌍 ${esc(name)}</div>
        ${visited
          ? `<button class="popup-btn popup-btn-remove" onclick="removeCountry('${esc(name)}')">✕ Remove</button>`
          : `<button class="popup-btn popup-btn-add" onclick="addCountry('${esc(name)}')">✓ Mark as visited</button>`}
      `;
      L.popup().setLatLng(e.latlng).setContent(html).openOn(map);
    },
  });
}

fetch(GEOJSON_URL)
  .then(r => r.json())
  .then(data => {
    geoLayer = L.geoJSON(data, {
      style: countryStyle,
      onEachFeature: onEachCountry,
    }).addTo(map);
  })
  .catch(() => showToast('⚠️ Could not load country borders', '#ef4444'));

/* ── City markers ── */

const cityMarkers = new Map(); // key → Leaflet marker

function createCityIcon(visited) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${visited?12:7}px;height:${visited?12:7}px;
      background:${visited?'#f59e0b':'#2a3a50'};
      border:${visited?'2px solid #fff':'1px solid #3a4a5a'};
      border-radius:50%;
      box-shadow:${visited?'0 0 8px rgba(245,158,11,.8)':'none'};
      transition:all .2s;
    "></div>`,
    iconSize:   [visited?12:7, visited?12:7],
    iconAnchor: [visited?6:3.5, visited?6:3.5],
  });
}

function renderCityMarkers() {
  cityMarkers.forEach(m => map.removeLayer(m));
  cityMarkers.clear();

  CITIES.forEach(city => {
    const key     = cityKey(city);
    const visited = visitedCities.has(key);
    const marker  = L.marker([city.lat, city.lng], {
      icon:  createCityIcon(visited),
      title: city.name,
    });

    marker.on('click', () => {
      const v   = visitedCities.has(key);
      const html = `
        <div class="popup-title">🏙️ ${esc(city.name)}</div>
        <div style="font-size:.8rem;color:#a0b4c8;margin-bottom:4px;">${esc(city.country)}</div>
        ${v
          ? `<button class="popup-btn popup-btn-remove" onclick="removeCityByKey('${esc(key)}')">✕ Remove</button>`
          : `<button class="popup-btn popup-btn-add" onclick="addCityByKey('${esc(key)}')">✓ Mark as visited</button>`}
      `;
      L.popup().setLatLng([city.lat, city.lng]).setContent(html).openOn(map);
    });

    marker.addTo(map);
    cityMarkers.set(key, marker);
  });
}

function cityKey(city) { return `${city.name}, ${city.country}`; }

/* ── Refresh the whole map view ── */

function refreshMap() {
  if (geoLayer) geoLayer.setStyle(countryStyle);
  renderCityMarkers();
}
