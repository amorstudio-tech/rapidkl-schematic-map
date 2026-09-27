# Work Card 04 — Assembly and Integration Test

## Goal

Create `index.html` that imports all pieces and produces a working interactive schematic map. Test the full flow end-to-end.

## Inputs

- `data.js` — static data
- `map.js` — SVG rendering
- `poi-panel.js` — POI panel
- `style.css` — design system
- `design.md` — layout, mobile rules

## Files likely touched

- `index.html` (create)

## Instructions for the coding agent

1. Create `index.html`:
   - Minimal HTML5 document.
   - Link `style.css`.
   - Script tags loading `data.js`, `map.js`, `poi-panel.js` (order matters — `data.js` first).
   - A `<div id="map-container">` that fills the viewport.
   - An inline `<script>` block that:
     - Calls `initMap(document.getElementById('map-container'))`.
     - Calls `initPanel()`.
     - Dispatches `station-selected` on the map container on click (the map.js already does this — just verify).

2. Ensure:
   - The map fills the viewport with no scrollbars.
   - The POI panel is hidden on page load.
   - A legend or subtle label on the page identifies it as "RapidKL Schematic Map".

3. Open `index.html` in a browser and test the full flow (see Localhost test below).

## What not to do

- Do not add any additional JS files or libraries.
- Do not add zoom/pan in v1.
- Do not add a build step or dev server — must work opened directly in browser.
- Do not add fake content, logos, or testimonials.

## Done when

- `index.html` opens in a browser and shows the full schematic map.
- Clicking/tapping a station opens the POI panel.
- Clicking another station updates the panel content and selection.
- Closing the panel returns to full map view.
- Works at 375px mobile width and desktop width.

## Verification steps

1. Open `index.html` in Chrome/Firefox/Edge directly (file:// protocol).
2. Verify all 5 transit lines are visible with station nodes.
3. Tap any station → POI panel opens with correct station name and POIs.
4. Tap a different station → panel content updates.
5. Close panel via X button → map is full-screen.
6. Close panel via Escape key → works.
7. Tap outside panel → panel closes.
8. Resize to 375px width → schematic readable, bottom sheet works.
9. Resize to 1024px width → right sidebar works.
10. Design check: colors, spacing, typography, and panel behavior match `design.md`.

## Localhost test before continuing

After this card, test in the browser:

- Open `index.html` directly.
- Tap 3 different stations — does the panel show different POIs each time?
- Tap the X button — does the panel close and the selection ring disappear?
- Press Escape — does the panel close?
- Resize to 375px — is the bottom sheet visible and functional?
- Resize to 1024px — is the sidebar visible and functional?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and describe what you see.

## Stop condition

If the full flow doesn't work end-to-end (map renders, station tap shows POIs, panel closes/updates), fix before proceeding. If the schematic layout is unrecognizable, adjust station coordinates in `data.js`.

## Status
Completed