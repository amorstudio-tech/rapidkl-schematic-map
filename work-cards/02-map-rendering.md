# Work Card 02 — Map Rendering

## Goal

Create the SVG schematic map rendering logic — draw line paths and station nodes from the static data, and handle station selection.

## Inputs

- `architecture.md` — data model, SVG rendering
- `design.md` — station node styles, line colors
- `data.js` — `RAPIDKL_DATA` object

## Files likely touched

- `map.js` (create)

## Instructions for the coding agent

1. Create `map.js` with an `initMap(containerElement)` function that:
   - Creates an SVG element filling the container.
   - Reads `RAPIDKL_DATA` (global from `data.js`).
   - For each **line**: draws an SVG `<path>` connecting its stations in order using the station `x,y` coordinates. Stroke color from the line's color property, stroke-width 3, stroke-linecap round.
   - For each **station**: draws an SVG `<circle>` at the station's `x,y`, radius 8px, filled with the line color, with a transparent invisible tap area of 44px for touch targets. Adds `aria-label` like `"Kajang station, MRT Kajang Line"`.
   - Adds a `click` / `touch` event listener on each station circle.
   - Emits a custom event `station-selected` on the container with `detail: { stationId }` when a station is clicked.
   - Has an `updateSelection(stationId)` function that:
     - Removes the blue ring from the previously selected station.
     - Adds a blue `#007AFF` ring (stroke) to the newly selected station circle.
   - Stores the current selection state internally.

2. Add a `clearSelection()` function that removes the selection ring.

## What not to do

- Do not create POI panel logic yet (Work Card 03).
- Do not create index.html yet (Work Card 04).
- Do not hardcode station positions — read them from `RAPIDKL_DATA`.
- Do not add zoom/pan in v1.

## Done when

- `map.js` exists with `initMap()` and `updateSelection()` functions.
- Station coordinates from data.js produce a recognizable schematic layout.

## Verification steps

1. Confirm `map.js` defines `initMap` and `updateSelection`.
2. Confirm custom event `station-selected` is dispatched on click.
3. Confirm each station circle has `aria-label`.
4. Confirm the invisible 44px tap area is present.
5. Design check: station node styles (8px circles, line colors, selected ring) match `design.md`.

## Localhost test before continuing

No meaningful browser preview yet (no index.html). Continue after the file checks pass.

## Stop condition

If the SVG rendering logic doesn't draw all lines and stations from the data, fix before proceeding.

## Status
Completed