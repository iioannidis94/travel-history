/* =====================================================================
   EXPORT  –  JSON export/import and PNG export
   ===================================================================== */

/* ── JSON ── */

function exportJSON() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    countries: [...visitedCountries],
    cities:    [...visitedCities.values()],
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `travel-history-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📦 JSON exported!');
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.countries) data.countries.forEach(c => visitedCountries.add(c));
      if (data.cities)    data.cities.forEach(c    => visitedCities.set(cityKey(c), c));
      refreshMap();
      saveStorage();
      updateStats();
      renderPanel();
      showToast(`✅ Imported ${data.countries?.length||0} countries & ${data.cities?.length||0} cities`);
    } catch(err) {
      showToast('❌ Invalid JSON file', '#ef4444');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

/* ── PNG ── */

let capturedDataURL = null;

function openExportPNG() {
  capturedDataURL = null;
  document.getElementById('export-preview').style.display = 'none';
  document.getElementById('download-btn').style.display   = 'none';
  document.getElementById('capture-btn').style.display    = '';
  document.getElementById('export-overlay').classList.add('show');
}

function closeExport() {
  document.getElementById('export-overlay').classList.remove('show');
}

function captureMap() {
  showToast('📸 Capturing…', '#3b82f6');
  const mapEl = document.getElementById('map');
  html2canvas(mapEl, {
    useCORS:    true,
    allowTaint: true,
    scale:      window.devicePixelRatio || 1,
    logging:    false,
  }).then(canvas => {
    capturedDataURL = canvas.toDataURL('image/png');
    const preview   = document.getElementById('export-preview');
    preview.src           = capturedDataURL;
    preview.style.display = 'block';
    document.getElementById('download-btn').style.display = '';
    document.getElementById('capture-btn').style.display  = 'none';
    showToast('✅ Ready to download!');
  }).catch(() => {
    showToast('❌ Capture failed. Try scrolling the map first.', '#ef4444');
  });
}

function downloadPNG() {
  if (!capturedDataURL) return;
  const a    = document.createElement('a');
  a.href     = capturedDataURL;
  a.download = `travel-map-${new Date().toISOString().slice(0,10)}.png`;
  a.click();
  showToast('💾 PNG downloaded!');
}
