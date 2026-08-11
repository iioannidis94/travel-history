# ✈️ Travel History Map

An interactive world map to track every country and city you've visited — deployable directly on **GitHub Pages** with zero build steps.

## Features

| Feature | Details |
|---|---|
| 🌍 World map | Interactive dark-themed map (CartoDB Dark tiles via Leaflet.js) |
| 🖱️ Click to mark | Click any country or city dot to mark/unmark as visited |
| 🔍 Search bar | Search for any country or city with autocomplete |
| 🎨 Visual highlights | Visited countries glow blue; visited cities pulse amber |
| 📊 Stats | Live counter of visited countries & cities |
| 📋 Side panel | Scrollable list of all visited places with quick-remove buttons |
| 💾 Local storage | Data persists in the browser automatically |
| ⬇ Export JSON | Download your travel data as a portable `.json` file |
| ⬆ Import JSON | Re-import a previous export to restore or merge data |
| 🖼 Export PNG | Capture the current map view as a PNG image (wallpaper-ready) |

## Live Demo

Enable **GitHub Pages** for this repo (Settings → Pages → Deploy from branch `main`, root `/`) and visit `https://<your-username>.github.io/travel-history/`.

## Usage

1. **Mark a country**: Click on any country on the map → *Mark as visited*
2. **Mark a city**: Click on any city dot → *Mark as visited*
3. **Search**: Type a city or country in the search bar and select from the dropdown
4. **Side panel**: Click the **📋 Visited** button on the right edge to see your full list
5. **Export**: Use **⬇ Export JSON** to back up your data
6. **Import**: Use **⬆ Import JSON** to restore from a backup (merges with existing data)
7. **Export PNG**: Use **🖼 Export PNG** → **📸 Capture** → **💾 Download** to save a wallpaper

## Data Format (JSON)

```json
{
  "version": 1,
  "exportedAt": "2024-01-01T00:00:00.000Z",
  "countries": ["Greece", "France", "Japan"],
  "cities": [
    { "name": "Athens", "country": "Greece", "lat": 37.9838, "lng": 23.7275 },
    { "name": "Paris",  "country": "France",  "lat": 48.8566, "lng": 2.3522  }
  ]
}
```

## Tech Stack

- **[Leaflet.js](https://leafletjs.com/)** — interactive map
- **[CartoDB Dark tiles](https://carto.com/basemaps/)** — dark map theme
- **[Natural Earth / geo-countries](https://github.com/datasets/geo-countries)** — country GeoJSON borders
- **[html2canvas](https://html2canvas.hertzen.com/)** — PNG export
- No framework, no build step — pure HTML/CSS/JS
