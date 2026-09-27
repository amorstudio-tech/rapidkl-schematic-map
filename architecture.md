# Architecture

## Build Shape

Browser-local tool (static schematic map — read-only data display)

## Stack Decision

- Plain HTML + CSS + JavaScript (no framework, no build step).
- Single `index.html` file (or minimal multi-file static site).
- No Vite, no React, no npm packages — pure browser-side code.
- SVG for the schematic map rendering.
- `localStorage` only if needed for user preferences (e.g., last-viewed station).

## Structure Overview

A single-page application that:
1. Loads static station, line, and POI data from inline JS/JSON.
2. Renders an SVG schematic of RapidKL lines and station nodes.
3. Shows a POI panel when a station is tapped/clicked.
4. Adapts layout responsively for mobile and desktop.

## Component Map

- **Map Canvas** — SVG element containing lines (paths) and station nodes (circles/rectangles with labels).
- **Station Marker** — individual clickable station node on the SVG.
- **POI Panel** — side panel or bottom sheet showing nearby POIs for the selected station.
- **Line Legend / Toggle** — optional visual legend showing line colors and names (no filtering in v1).

## Data / State Model

```js
// Station
{
  id: "kj1",
  name: "Kajang",
  line: "mrt-kajang",
  x: 100,
  y: 200,
  poiIds: ["poi-01", "poi-02"]
}

// Line
{
  id: "mrt-kajang",
  name: "MRT Kajang Line",
  color: "#006747",
  stationIds: ["kj1", "kj2", ...]
}

// POI
{
  id: "poi-01",
  name: "Kajang Town",
  description: "Historic town center with famous satay.",
  stationId: "kj1"
}
```

State in v1: `selectedStationId` (null or a station id).

## Storage Logic

No user data to persist. `localStorage` is optional for remembering the last viewed station across page refreshes. All station/line/POI data is static and bundled in the source.

## User Flow

1. User opens the page → sees the full RapidKL schematic.
2. User taps/clicks a station marker → POI panel opens showing station name + 3-5 POIs.
3. User taps another station or closes the panel → POI panel updates or closes.
4. On mobile: the panel appears as a bottom drawer. On desktop: a side panel.

## File Expectations

```
index.html          — HTML shell with embedded CSS and JS
style.css           — all styles (or inlined in index.html)
data.js             — static station, line, and POI data
map.js              — SVG schematic rendering and interaction logic
poi-panel.js        — POI panel open/close/update logic
```

All could be combined into a single `index.html` for simplicity.

## Constraints

- Must work fully offline after first load.
- No backend, no database, no API calls, no real-time data.
- No external map tiles or map API — use hand-drawn or coordinate-based SVG.
- SVGs must scale and pan on mobile without breaking touch interaction.

## Technical Non-Goals

- Real-time transit data.
- User accounts, auth, or payments.
- Route planning / pathfinding between stations.
- Animated train movement.
- Search or filter in v1.

## Verification Notes

- Open `index.html` directly in a browser — no dev server needed.
- Test on a phone viewport (Chrome DevTools responsive mode).
- Tap at least 3 different stations and verify POI panel content changes.
- Verify the schematic is readable at 375px width.