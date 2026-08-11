/* =====================================================================
   ACTIONS  –  add / remove places, stats, side panel
   ===================================================================== */

/* ── Travel data ── */
// Populated here so all modules share the same references.
let visitedCountries = new Set();
let visitedCities    = new Map(); // key = "City, Country"

/* ── Add / remove ── */

function addCountry(name) {
  visitedCountries.add(name);
  map.closePopup();
  refreshMap();
  saveStorage();
  updateStats();
  renderPanel();
  showToast(`✈️ ${name} added!`);
  document.getElementById('action-menu').classList.remove('open');
}

function removeCountry(name) {
  visitedCountries.delete(name);
  map.closePopup();
  refreshMap();
  saveStorage();
  updateStats();
  renderPanel();
  showToast(`🗑 ${name} removed`, '#ef4444');
  document.getElementById('action-menu').classList.remove('open');
}

function addCityByKey(key) {
  const city = CITIES.find(c => cityKey(c) === key);
  if (!city) return;
  visitedCities.set(key, city);
  map.closePopup();
  refreshMap();
  saveStorage();
  updateStats();
  renderPanel();
  showToast(`✈️ ${city.name} added!`);
}

function removeCityByKey(key) {
  visitedCities.delete(key);
  map.closePopup();
  refreshMap();
  saveStorage();
  updateStats();
  renderPanel();
  showToast(`🗑 Removed`, '#ef4444');
}

/* ── Clear all ── */

function clearAll() {
  if (!confirm('Remove all visited countries and cities?')) return;
  visitedCountries.clear();
  visitedCities.clear();
  refreshMap();
  saveStorage();
  updateStats();
  renderPanel();
  showToast('🗑 All cleared', '#ef4444');
  document.getElementById('action-menu').classList.remove('open');
}

/* ── Stats ── */

function updateStats() {
  document.getElementById('stat-countries').textContent = visitedCountries.size;
  document.getElementById('stat-cities').textContent    = visitedCities.size;
}

/* ── Mobile action menu ── */

function toggleMenu() {
  document.getElementById('action-menu').classList.toggle('open');
}

// Close the menu when tapping outside of it
document.addEventListener('click', e => {
  const menu   = document.getElementById('action-menu');
  const toggle = document.getElementById('menu-toggle');
  if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('open');
  }
});

/* ── Side panel ── */

let panelOpen = false;

function togglePanel() {
  panelOpen = !panelOpen;
  document.getElementById('panel').classList.toggle('open', panelOpen);
  document.getElementById('panel-toggle').textContent = panelOpen ? '✕ Close' : '📋 Visited';
}

function renderPanel() {
  const list = document.getElementById('panel-list');
  list.innerHTML = '';

  [...visitedCountries].sort().forEach(name => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <div class="dot" style="background:#3b82f6;"></div>
      <span class="name">${esc(name)}</span>
      <span class="type-badge">country</span>
      <button class="remove-btn" onclick="removeCountry('${esc(name)}')">✕</button>
    `;
    list.appendChild(div);
  });

  [...visitedCities.keys()].sort().forEach(key => {
    const city = visitedCities.get(key);
    const div  = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <div class="dot" style="background:#f59e0b;"></div>
      <span class="name">${esc(city.name)}</span>
      <span class="type-badge">city</span>
      <button class="remove-btn" onclick="removeCityByKey('${esc(key)}')">✕</button>
    `;
    list.appendChild(div);
  });

  if (!list.children.length) {
    list.innerHTML = '<div style="padding:14px;color:#a0b4c8;font-size:.82rem;">No visited places yet. Click on the map or search!</div>';
  }
}
