# Build Blueprint

## Source Files

- `project-brief.md` — project identity, user, scope, success target.
- `architecture.md` — stack, structure, data model, file layout.
- `design.md` — Apple-like premium minimal inspiration, layout/color/typography rules.
- `build-status.md` — current phase, completed work, blockers, next instruction.

## Project Identity

Interactive Schematic Map for RapidKL

## Build Shape

Browser-local tool (static data display — not a CRUD tool)

## Version-One Promise

A single-page static HTML/CSS/JS app that renders an SVG schematic map of RapidKL transit lines (MRT Kajang, MRT Putrajaya, LRT Kelana Jaya, LRT Ampang/Sri Petaling, KL Monorail). User taps a station to see 3-5 nearby POIs in a bottom sheet (mobile) or right sidebar (desktop). Works offline, looks calm and minimal.

## Scope Lock

### Now

- Static SVG schematic with all 5 transit lines and sample stations.
- Tap station → POI panel with 3-5 sample POIs per station.
- Bottom sheet on mobile, right sidebar on desktop.
- Responsive, works at 375px width.
- Pure HTML/CSS/JS — no build tools.

### Later

- Search/filter stations.
- Route planning between stations.
- More detailed POI data.

### Never

- Real-time tracking.
- User accounts or auth.
- Backend or database.
- Paid features.
- Live APIs.

## Architecture Summary

- **Stack:** Plain HTML + CSS + JavaScript in a single `index.html` (or minimal separate files).
- **Rendering:** SVG elements drawn from static data.
- **State:** `selectedStationId` — tracked in JS, no persistence needed.
- **Data:** Static JSON bundled in `data.js` — stations, lines, POIs.
- **Layout:** Full-viewport SVG map, bottom sheet (mobile) or right sidebar (desktop).

## Data / State / Storage Rules

- All data is static and bundled in the source — no fetch, no API, no backend.
- Station data: `{ id, name, line, x, y, poiIds[] }`
- Line data: `{ id, name, color, stationIds[] }`
- POI data: `{ id, name, description, stationId }`
- State: only `selectedStationId` (null or string).
- No `localStorage` required in v1.
- No CRUD — read-only display of pre-bundled data.

## Design Direction Summary

- **Borrow from Apple-like premium minimal:** clean spacious layout, generous white space, minimal neutral palette, system font stack, subtle transitions.
- **Do not copy:** Apple brand/logo/text/identity. No heavy glassmorphism, no Apple UI patterns.
- **Visual mood:** Calm and minimal — the map is the hero, UI recedes.
- **Line colors:** Official RapidKL colors (green, red, blue, orange, green for monorail).
- **Mobile:** Bottom sheet at ~40% viewport on station tap.
- **Desktop:** Right sidebar ~320px on station tap.

## Implementation Rules

- Always use system font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- Background `#F5F5F7`, text `#1D1D1F` / `#86868B`.
- Station nodes: 8px filled circles with official line color.
- Selected station: 8px circle + 4px blue `#007AFF` ring.
- Line paths: 3px solid stroke, rounded caps.
- POI panel (mobile): rounded top corners (12px), handle bar, light shadow.
- POI panel (desktop): same style but full-height right sidebar.
- Min tap target: 44px.
- All interactive elements must pass 4.5:1 contrast ratio.
- `aria-label` on every station node.
- Escape key closes POI panel.
- No fake logos, testimonials, stats, or lorem ipsum.

## File and Folder Expectations

```
/
├── index.html          — HTML shell + embedded CSS + JS (or linked files)
├── data.js             — static station, line, and POI data
├── map.js              — SVG rendering and interaction logic
├── poi-panel.js        — bottom sheet / sidebar logic
├── style.css           — all styles
├── project-brief.md
├── architecture.md
├── design.md
├── build-blueprint.md
├── build-status.md
├── work-cards/
│   └── 00-setup-gate.md
└── prompts/
    └── ... (coach prompts)
```

## Work Card Plan

1. **Work Card 01** — Create `data.js` with static station, line, and POI data (sample stations across all 5 lines, 3-5 POIs per station).
2. **Work Card 02** — Create `style.css` with the full design system: colors, typography, layout, responsive rules, bottom sheet styles, sidebar styles.
3. **Work Card 03** — Create `map.js` with SVG schematic rendering: draw line paths, draw station nodes, handle click/tap to select, emit selectedStationId.
4. **Work Card 04** — Create `poi-panel.js` with bottom sheet (mobile) and right sidebar (desktop) logic: open/close, render POI list, close on Escape and X button.
5. **Work Card 05** — Create `index.html` assembling all pieces, add `index.html`, test full flow on mobile and desktop, verify all verification steps.
6. **Work Card 06** — Review pass: run review-mirror, fix the single smallest useful issue.

## Review Mirror

After Build, run the Check phase (prompts/07-review-mirror.md) and fix the single smallest useful issue before Ship.

## Proof Ladder

1. `index.html` opens in browser → schematic renders.
2. Tap a station → bottom sheet (mobile) or sidebar (desktop) shows POIs.
3. Tap another station → POI content changes.
4. Close panel → map is full-screen again.
5. Test at 375px width → schematic readable, tap targets work.
6. Verify line colors match RapidKL scheme.

## 60-Second Explanation Template

"This is a static interactive map of the RapidKL transit network made with plain HTML, CSS, and SVG. Tap any station to see nearby points of interest. No backend, no API — everything runs in the browser from bundled sample data."

## Guardrails for the Coding Agent

- read `build-status.md`, `build-blueprint.md`, and the current work card before editing;
- implement only the current work card;
- do not jump ahead;
- stop after verification;
- update `build-status.md` after each work card;
- do not add backend/auth/database/API unless the blueprint explicitly allows it;
- do not add secrets or keys to code;
- do not invent claims, testimonials, logos, or real numbers.
- apply the guardrails for the confirmed build shape;
- if a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping;