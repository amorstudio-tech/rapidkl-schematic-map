# Work Card 03 — POI Panel

## Goal

Create the POI panel component that shows station details and nearby points of interest — works as a bottom sheet on mobile and a right sidebar on desktop.

## Inputs

- `design.md` — bottom sheet, right sidebar, POI card, close behavior
- `architecture.md` — data model, user flow
- `data.js` — `RAPIDKL_DATA` object

## Files likely touched

- `poi-panel.js` (create)

## Instructions for the coding agent

1. Create `poi-panel.js` with:
   - `initPanel()` — creates the panel DOM elements (hidden by default) and appends them to the document body.
   - `openPanel(stationId)` — looks up the station + its POIs from `RAPIDKL_DATA`:
     - On mobile (< 768px): reveals a bottom sheet with the station name, then a list of POI cards (emoji + name + one-line description). Bottom sheet height ~40vh by default, rounded top corners (12px), handle bar at top.
     - On desktop (>= 768px): reveals a right sidebar (320px wide, full height) with the same content.
     - Updates the map selection via a callback or direct call to `updateSelection(stationId)`.
   - `closePanel()` — hides the panel and calls `clearSelection()` on the map.
   - Listen for a global custom event `station-selected` to auto-open the panel.
   - Close button (X icon) in the panel header.
   - Escape key listener to close the panel.
   - Click-outside (on the map area) to close the panel.
   - Smooth open/close transitions via CSS classes.

2. Each POI card layout:
   - Small emoji or icon (use a generic default like `📍`).
   - POI name (semi-bold).
   - One-line description (light gray, smaller).
   - Thin 1px divider between cards.

## What not to do

- Do not create index.html yet (Work Card 04).
- Do not add animation libraries — use CSS transitions only.
- Do not add persistent state or localStorage.
- Do not add search or filtering.

## Done when

- `poi-panel.js` exists with `initPanel`, `openPanel`, `closePanel`.
- Panel shows station name and POI list.
- Bottom sheet on small screens, sidebar on large screens.
- Close via X button, Escape key, and click-outside all work.
- Custom event `station-selected` triggers panel open.

## Verification steps

1. Confirm `poi-panel.js` defines `initPanel`, `openPanel`, `closePanel`.
2. Confirm `openPanel(stationId)` renders the correct station name and its POIs.
3. Confirm the panel shows as bottom sheet at <768px and sidebar at >=768px.
4. Confirm Escape key calls `closePanel`.
5. Design check: panel styles, rounded corners, handle bar, POI card layout, and mobile/desktop layout match `design.md`.

## Localhost test before continuing

No meaningful browser preview yet (no index.html). Continue after the file checks pass.

## Stop condition

If the panel logic doesn't respond to `station-selected` events or doesn't render POI data correctly, fix before proceeding.

## Status
Completed