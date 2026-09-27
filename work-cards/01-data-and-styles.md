# Work Card 01 — Data and Styles

## Goal

Create the static data file with station, line, and POI data, and the CSS stylesheet with the full design system.

## Inputs

- `architecture.md` — data model, line colors
- `design.md` — color/contrast/typography/layout rules
- `build-blueprint.md` — file expectations

## Files likely touched

- `data.js` (create)
- `style.css` (create)

## Instructions for the coding agent

1. Create `data.js` with:
   - An array of **lines** (id, name, color, stationIds[]). Use official RapidKL colors:
     - MRT Kajang Line: `#006747`
     - MRT Putrajaya Line: `#D32F2F`
     - LRT Kelana Jaya Line: `#0089C7`
     - LRT Ampang/Sri Petaling Line: `#E57200`
     - KL Monorail: `#00985F`
   - An array of **stations** (id, name, line, x, y, poiIds[]). Include at least 3-5 stations per line with approximate schematic x,y coordinates.
   - An array of **POIs** (id, name, description, stationId). At least 3-5 real POIs per station (use real RapidKL station names and real nearby attractions from public knowledge).
   - All data exported as a global `const RAPIDKL_DATA = { lines, stations, pois }`.

2. Create `style.css` with:
   - Reset / box-sizing.
   - Body: `#F5F5F7` background, system font stack.
   - SVG map container: full viewport.
   - Station node circle styles.
   - Selected station ring (blue `#007AFF` halo).
   - Line path styles (3px solid stroke, rounded caps).
   - Bottom sheet styles (mobile): fixed bottom, rounded top corners 12px, handle bar, light shadow, ~40vh default height, smooth transition.
   - Right sidebar styles (desktop, `@media (min-width: 768px)`): fixed right, 320px wide, full height, same visual style.
   - POI card: icon + name + description, thin dividers.
   - Close button style.
   - Text styles: `#1D1D1F` primary, `#86868B` secondary.
   - All interactive elements: 44px min tap target.
   - No lorem ipsum — use real content only.

## What not to do

- Do not create index.html yet.
- Do not create map.js or poi-panel.js yet.
- Do not invent fake stations or POIs — use real RapidKL station names and real nearby attractions.
- Do not add any interactivity or JS logic in this card.

## Done when

- `data.js` exists with valid static data for all 5 lines, stations, and POIs.
- `style.css` exists with the full design system.
- Both files are syntactically valid.

## Verification steps

1. Open `data.js` and confirm it defines `RAPIDKL_DATA` with `lines`, `stations`, and `pois`.
2. Confirm at least 3 stations per line and at least 3 POIs per station.
3. Confirm line colors match the RapidKL official scheme listed above.
4. Open `style.css` and confirm bottom sheet and sidebar classes exist.
5. Confirm responsive breakpoint at 768px.
6. Design check: colors, typography, spacing, and panel styles follow `design.md`.

## Localhost test before continuing

No meaningful browser preview yet. Continue after the file checks pass.

## Stop condition

If the data model or styles deviate from architecture.md or design.md, fix before proceeding.

## Status
Completed