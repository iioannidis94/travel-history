/* =====================================================================
   CITIES – combined dataset
   The actual city data now lives in separate per-continent files
   (data-europe.js, data-asia.js, data-oceania.js, data-north-america.js,
   data-south-america.js, data-africa.js) so each one stays manageable.
   This file just stitches them together into the single CITIES array
   that the rest of the app (map.js, search.js, actions.js …) expects.

   IMPORTANT: in index.html, all data-*.js files must load BEFORE this
   file, which must itself load before toast.js/storage.js/etc.
   ===================================================================== */
 
const CITIES = [
  ...CITIES_EUROPE,
  ...CITIES_ASIA,
  ...CITIES_OCEANIA,
  ...CITIES_NORTH_AMERICA,
  ...CITIES_SOUTH_AMERICA,
  ...CITIES_AFRICA,
];
