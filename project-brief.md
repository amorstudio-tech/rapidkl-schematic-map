# Project Brief

## Project Identity

Interactive Schematic Map for RapidKL

## One-Sentence Concept

A browser-based interactive schematic map of the RapidKL transit network where daily commuters can view the overall system and tap a station to discover nearby points of interest and simple station-based navigation.

## Target User

Daily RapidKL commuters who want to learn about local attractions and POIs near stations.

## User Goal

- View the full RapidKL schematic map (MRT, LRT, Monorail lines).
- Tap a station to see nearby POIs and simple navigation info from that station.
- Use on both mobile and desktop.

## Build Shape

Browser-local tool

## Shape Confirmation

Confirmed by learner on 2026-09-21.

## Version-One Success

- Single-page schematic showing RapidKL lines (MRT Kajang, MRT Putrajaya, LRT Kelana Jaya, LRT Ampang/Sri Petaling, KL Monorail).
- Tap any station to see 3-5 sample POIs with a short description.
- Works and looks good on mobile and desktop.
- Station data is static (no real-time tracking).

## Now / Later / Never

### Now

- Static schematic map with RapidKL lines and stations.
- Tap a station to show nearby POIs.
- Responsive mobile-first layout.
- Sample POI data (3-5 per station).

### Later

- Search or filter stations/lines.
- Route planning between stations.
- More detailed POI info (images, links).

### Never

- Real-time train tracking.
- User accounts or authentication.
- Backend or database.
- Paid features.

## Assumptions

- All station coordinates and POI data can be sourced from public/open data (Wikipedia, Google Maps public info, etc.) and included as static sample data.
- The schematic can be drawn using SVG or Canvas — no map tile API needed.
- The app must work fully offline after first load.

## Proof Target

A working HTML file (or simple static site) opened in a browser showing a readable RapidKL schematic with interactive station POI popups.

## Trainer / Learner Notes

- RapidKL lines to include: MRT Kajang Line, MRT Putrajaya Line, LRT Kelana Jaya Line, LRT Ampang/Sri Petaling Line, KL Monorail.
- Sample POIs: 3-5 per selected station (e.g., KLCC station → Suria KLCC, Petronas Towers, KLCC Park).