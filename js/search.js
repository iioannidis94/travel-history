/* =====================================================================
   SEARCH  –  autocomplete for cities
   ===================================================================== */

const searchInput = document.getElementById('search-input');
const acList      = document.getElementById('autocomplete-list');
let acIndex = -1;

function buildSearchData() {
  return CITIES.map(c => ({ label: `${c.name}, ${c.country}`, type: 'city', data: c }));
}
const SEARCH_DATA = buildSearchData();

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  acIndex = -1;
  if (!q) { hideAC(); return; }

  const matches = SEARCH_DATA.filter(item =>
    item.label.toLowerCase().includes(q)
  ).slice(0, 12);

  if (!matches.length) { hideAC(); return; }

  acList.innerHTML = '';
  matches.forEach(item => {
    const div     = document.createElement('div');
    const visited = visitedCities.has(cityKey(item.data)) || visitedCountries.has(item.data.country);
    if (visited) {
      const dot = document.createElement('div');
      dot.className = 'visited-dot';
      div.appendChild(dot);
    }
    const labelSpan = document.createElement('span');
    labelSpan.textContent = item.label;
    div.appendChild(labelSpan);
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item.type;
    div.appendChild(tag);
    div.addEventListener('click', () => selectSearchItem(item));
    acList.appendChild(div);
  });
  acList.style.display = 'block';
});

searchInput.addEventListener('keydown', e => {
  const divs = acList.querySelectorAll('div');
  if      (e.key === 'ArrowDown')               { acIndex = Math.min(acIndex+1, divs.length-1); highlight(divs); e.preventDefault(); }
  else if (e.key === 'ArrowUp')                  { acIndex = Math.max(acIndex-1, 0); highlight(divs); e.preventDefault(); }
  else if (e.key === 'Enter' && acIndex >= 0)    { divs[acIndex].click(); }
  else if (e.key === 'Escape')                   { hideAC(); }
});

document.addEventListener('click', e => {
  if (!e.target.closest('#search-wrapper')) hideAC();
});

function highlight(divs) {
  divs.forEach((d, i) => d.classList.toggle('active', i === acIndex));
}

function hideAC() {
  acList.style.display = 'none';
  acList.innerHTML = '';
}

function selectSearchItem(item) {
  hideAC();
  searchInput.value = '';
  if (item.type === 'city') {
    const c       = item.data;
    const key     = cityKey(c);
    const visited = visitedCities.has(key);
    map.setView([c.lat, c.lng], 8, { animate: true });
    const html = `
      <div class="popup-title">🏙️ ${esc(c.name)}</div>
      <div style="font-size:.8rem;color:#a0b4c8;margin-bottom:4px;">${esc(c.country)}</div>
      ${visited
        ? `<button class="popup-btn popup-btn-remove" onclick="removeCityByKey('${esc(key)}')">✕ Remove</button>`
        : `<button class="popup-btn popup-btn-add" onclick="addCityByKey('${esc(key)}')">✓ Mark as visited</button>`}
    `;
    setTimeout(() => L.popup().setLatLng([c.lat, c.lng]).setContent(html).openOn(map), 400);
  }
}
