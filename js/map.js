/* =====================================================================
   MAP  –  Leaflet map setup, country GeoJSON layer, city markers
   ===================================================================== */

// 1. Ορίζουμε τα όρια όλου του πλανήτη
const worldBounds = [
  [-90, -180], // Νοτιοδυτικό άκρο
  [90, 180]    // Βορειοανατολικό άκρο
];

const map = L.map('map', {
  center: [20, 10],
  zoom: 2,
  minZoom: 2,
  maxZoom: 12,
  zoomControl: true,
  // 2. Εφαρμόζουμε τα όρια για να μην χάνεται ο χρήστης
  maxBounds: worldBounds,
  maxBoundsViscosity: 1.0, // "Σκληρό" στοπ στα όρια
  worldCopyJump: false // Αποτρέπει την πλοήγηση σε "κλώνους" του χάρτη
});

map.createPane('countryLabels');
map.getPane('countryLabels').style.zIndex = 610;
map.getPane('countryLabels').style.pointerEvents = 'none';

map.createPane('cityLabels');
map.getPane('cityLabels').style.zIndex = 620;
map.getPane('cityLabels').style.pointerEvents = 'none';

// Dark tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CartoDB</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  subdomains: 'abcd',
  maxZoom: 19,
  noWrap: true, // 3. Κόβει την ατελείωτη επανάληψη του χάρτη (tiles)
  bounds: worldBounds
}).addTo(map);

/* ── Country GeoJSON ── */

let geoLayer = null;
const GEOJSON_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';
const countryLabelLayer = L.layerGroup().addTo(map);
const cityLabelLayer = L.layerGroup().addTo(map);
let countryLabelData = [];

const cityOrderByCountry = new Map();
const cityLabelData = CITIES.map((city, index) => {
  const rankInCountry = (cityOrderByCountry.get(city.country) || 0) + 1;
  cityOrderByCountry.set(city.country, rankInCountry);
  return { ...city, index, rankInCountry };
});

function hasVisitedCityInCountry(name) {
  for (const city of visitedCities.values()) {
    if (city.country === name) return true;
  }
  return false;
}

function getCountryVisualState(name) {
  if (visitedCountries.has(name)) return 'visited';
  if (hasVisitedCityInCountry(name)) return 'city-visited';
  return 'default';
}

function countryStyle(feature) {
  const name = feature.properties.ADMIN;
  const state = getCountryVisualState(name);
  return {
    fillColor: state === 'visited' ? '#3b82f6' : state === 'city-visited' ? '#34d399' : '#1e3248',
    fillOpacity: state === 'visited' ? 0.65 : state === 'city-visited' ? 0.48 : 0.35,
    color: state === 'visited' ? '#7ec8e3' : state === 'city-visited' ? '#86efac' : '#2a3a50',
    weight: state === 'default' ? 0.5 : 1.3,
  };
}

function onEachCountry(feature, layer) {
  const name = feature.properties.ADMIN;
  layer.on({
    mouseover(e) {
      const state = getCountryVisualState(name);
      e.target.setStyle({
        fillOpacity: state === 'visited' ? 0.78 : state === 'city-visited' ? 0.62 : 0.55,
        fillColor: state === 'visited' ? '#60a5fa' : state === 'city-visited' ? '#6ee7b7' : '#254d75',
      });
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
    countryLabelData = [];
    geoLayer.eachLayer(layer => {
      const feature = layer.feature;
      if (!feature || !feature.properties || !feature.properties.ADMIN) return;
      const bounds = layer.getBounds();
      const center = bounds.getCenter();
      const width = Math.abs(bounds.getEast() - bounds.getWest());
      const height = Math.abs(bounds.getNorth() - bounds.getSouth());
      const area = width * height * Math.max(0.2, Math.cos(center.lat * Math.PI / 180));
      countryLabelData.push({
        name: feature.properties.ADMIN,
        center,
        area,
      });
    });
    renderLabels();
  })
  .catch(() => showToast('⚠️ Could not load country borders', '#ef4444'));


/* ── City markers ── */

const cityMarkers = new Map(); // key → Leaflet marker
const VISIBLE_ZOOM_THRESHOLD = 5; // Από ποιο zoom και πάνω θα εμφανίζονται οι UNVISITED πόλεις

function createCityIcon(visited) {
  return L.divIcon({
    // Αναθέτουμε την κατάλληλη κλάση CSS για να την κρύβουμε μαζικά
    className: visited ? 'city-marker-visited' : 'city-marker-unvisited',
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
    const key    = cityKey(city);
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

    // Προσθέτουμε τα markers στον χάρτη μια και καλή! Το CSS θα τα κρύβει.
    marker.addTo(map);
    cityMarkers.set(key, marker);
  });

  updateCityVisibility();
  renderLabels();
}

// 4. Ελέγχει την εμφάνιση των markers (Ακαριαία, μέσω CSS class)
function updateCityVisibility() {
  const currentZoom = map.getZoom();
  const mapContainer = map.getContainer();
  
  if (currentZoom >= VISIBLE_ZOOM_THRESHOLD) {
    // Zoom in: βγάλε την κλάση της απόκρυψης, δείξε τα όλα!
    mapContainer.classList.remove('hide-unvisited-cities');
  } else {
    // Zoom out: βάλε την κλάση, κρύψε τα unvisited
    mapContainer.classList.add('hide-unvisited-cities');
  }
}

function cityKey(city) { return `${city.name}, ${city.country}`; }

function getCountryLabelLimit(zoom) {
  if (zoom <= 2) return 18;
  if (zoom <= 3) return 28;
  if (zoom <= 4) return 45;
  if (zoom <= 5) return 70;
  return 110;
}

function getCountryLabelSpacing(zoom) {
  if (zoom <= 2) return 88;
  if (zoom <= 4) return 72;
  return 60;
}

function getCityLabelLimit(zoom) {
  if (zoom <= 2) return 10;
  if (zoom <= 3) return 16;
  if (zoom <= 4) return 24;
  if (zoom <= 5) return 36;
  if (zoom <= 6) return 54;
  return 90;
}

function getCityLabelSpacing(zoom) {
  if (zoom <= 2) return 66;
  if (zoom <= 4) return 54;
  return 42;
}

function getMaxCityRank(zoom) {
  if (zoom <= 2) return 1;
  if (zoom <= 4) return 2;
  if (zoom <= 5) return 3;
  if (zoom <= 6) return 4;
  return Number.POSITIVE_INFINITY;
}

function addLabelMarker(layer, latlng, pane, className, text) {
  L.marker(latlng, {
    interactive: false,
    keyboard: false,
    pane,
    icon: L.divIcon({
      className: '',
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      html: `<div class="${className}">${esc(text)}</div>`,
    }),
  }).addTo(layer);
}

function keepSeparatedLabels(candidates, minDistance) {
  const accepted = [];
  const points = [];

  candidates.forEach(candidate => {
    const point = map.latLngToContainerPoint(candidate.latlng);
    const crowded = points.some(existing => point.distanceTo(existing) < minDistance);
    if (crowded) return;
    points.push(point);
    accepted.push(candidate);
  });

  return accepted;
}

function renderCountryLabels(zoom, bounds) {
  countryLabelLayer.clearLayers();
  if (!countryLabelData.length) return;

  const candidates = countryLabelData
    .filter(country => bounds.contains(country.center))
    .sort((a, b) => {
      const stateA = getCountryVisualState(a.name);
      const stateB = getCountryVisualState(b.name);
      const stateScoreA = stateA === 'visited' ? 0 : stateA === 'city-visited' ? 1 : 2;
      const stateScoreB = stateB === 'visited' ? 0 : stateB === 'city-visited' ? 1 : 2;
      return stateScoreA - stateScoreB || b.area - a.area || a.name.localeCompare(b.name);
    })
    .slice(0, getCountryLabelLimit(zoom))
    .map(country => ({ latlng: country.center, data: country }));

  keepSeparatedLabels(candidates, getCountryLabelSpacing(zoom)).forEach(({ data }) => {
    const state = getCountryVisualState(data.name);
    const className = `map-label map-label-country ${state !== 'default' ? 'is-highlighted' : ''}`;
    addLabelMarker(countryLabelLayer, data.center, 'countryLabels', className, data.name);
  });
}

function renderCityLabels(zoom, bounds) {
  cityLabelLayer.clearLayers();

  const candidates = cityLabelData
    .filter(city => city.rankInCountry <= getMaxCityRank(zoom))
    .filter(city => bounds.contains([city.lat, city.lng]))
    .filter(city => visitedCities.has(cityKey(city)) || zoom >= VISIBLE_ZOOM_THRESHOLD)
    .sort((a, b) => {
      const visitedA = visitedCities.has(cityKey(a));
      const visitedB = visitedCities.has(cityKey(b));
      return Number(visitedB) - Number(visitedA) || a.rankInCountry - b.rankInCountry || a.index - b.index;
    })
    .slice(0, getCityLabelLimit(zoom))
    .map(city => ({ latlng: L.latLng(city.lat, city.lng), data: city }));

  keepSeparatedLabels(candidates, getCityLabelSpacing(zoom)).forEach(({ data, latlng }) => {
    const visited = visitedCities.has(cityKey(data));
    const className = `map-label map-label-city ${visited ? 'is-visited' : ''}`;
    addLabelMarker(cityLabelLayer, latlng, 'cityLabels', className, data.name);
  });
}

function renderLabels() {
  const zoom = map.getZoom();
  const bounds = map.getBounds().pad(0.15);
  renderCountryLabels(zoom, bounds);
  renderCityLabels(zoom, bounds);
}

map.on('moveend zoomend resize', () => {
  renderLabels();
  updateCityVisibility(); 
});

/* ── Refresh the whole map view ── */

function refreshMap() {
  if (geoLayer) geoLayer.setStyle(countryStyle);
  renderCityMarkers();
}
