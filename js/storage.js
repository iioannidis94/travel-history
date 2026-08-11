/* =====================================================================
   HELPERS
   ===================================================================== */

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* =====================================================================
   LOCAL STORAGE  –  persist visited countries and cities across sessions
   ===================================================================== */

function saveStorage() {
  localStorage.setItem('travel_countries', JSON.stringify([...visitedCountries]));
  localStorage.setItem('travel_cities',    JSON.stringify([...visitedCities.entries()]));
}

function loadStorage() {
  try {
    const c  = localStorage.getItem('travel_countries');
    const ci = localStorage.getItem('travel_cities');
    if (c)  visitedCountries = new Set(JSON.parse(c));
    if (ci) visitedCities    = new Map(JSON.parse(ci));
  } catch(e) {}
}
