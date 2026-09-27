# Design Direction

## Design Inspiration URL

Fallback choice: Apple-like premium minimal style.

## What We Borrow

- Clean, spacious layout with generous white space.
- Minimal color palette — mostly neutrals with subtle accents.
- Simple, elegant typography (system font stack).
- Smooth but subtle transitions (no heavy animations).
- Bottom sheet pattern on mobile (inspired by Apple Maps POI cards).

## What We Do Not Copy

- No Apple brand, logo, text, or identity.
- No skeuomorphic gradients or heavy glassmorphism.
- No tab bars, toolbars, or navigation patterns from Apple products.

## Visual Mood

Calm and minimal. The map is the hero — UI is secondary, light, and recedes. Soft grays, clean lines, and plenty of breathing room.

## Layout Rules

- Full-page SVG schematic fills the viewport.
- Mobile: bottom sheet slides up on station tap, overlays ~40% of viewport height.
- Desktop: right sidebar (~320px wide) opens beside the map when a station is selected.
- No persistent header or navigation bar — the map is the interface.
- Minimal top bar only if needed for project name / tagline.

## Color / Contrast Rules

- Background: off-white `#F5F5F7` (Apple-like light gray).
- Map surface: white `#FFFFFF`.
- Text: dark gray `#1D1D1F` (primary), `#86868B` (secondary).
- Line colors per RapidKL official scheme:
  - MRT Kajang: `#006747`
  - MRT Putrajaya: `#D32F2F` (or official red)
  - LRT Kelana Jaya: `#0089C7`
  - LRT Ampang/Sri Petaling: `#E57200`
  - KL Monorail: `#00985F`
- Accent/interactive: blue tint `#007AFF` for selected/hover states.
- POI panel background: white with subtle shadow.
- All interactive elements must pass 4.5:1 contrast ratio against their background.

## Typography Feel

- System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- Station labels: 11-13px medium weight, monochrome.
- POI panel headings: 16-18px semibold.
- POI descriptions: 13-14px regular, light gray.

## Component Style

- **Station nodes:** small filled circles (8px radius). Selected station gets a ring/halo (blue).
- **Station labels:** text next to node, 12px, centered, no background box.
- **Line paths:** 3px solid stroke with official line color, rounded caps.
- **POI panel (mobile):** rounded top corners (12px), handle bar at top, light shadow, scrollable content.
- **POI panel (desktop):** same style but as a right sidebar with full height.
- **POI cards:** minimal — icon/emoji + name + one-line description, separated by thin dividers.
- **Close button:** subtle X icon, top-right corner of panel.

## Mobile Rules

- Schematic must be readable at 375px width.
- Bottom sheet height: ~40% viewport by default, draggable up to ~80%.
- Bottom sheet slides up smoothly (300ms ease-out).
- Station nodes must be large enough to tap on mobile (min 44px tap target).
- No horizontal scrolling for the map — use pan and pinch-to-zoom if needed (v1: manual SVG viewBox scaling).

## Accessibility Basics

- All interactive stations are focusable and keyboard-accessible.
- `aria-label` on each station node (e.g., "Kajang station, MRT Kajang Line").
- POI panel content uses semantic HTML.
- Close panel via Escape key.
- Minimum 4.5:1 text contrast ratio.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked sample.
- No "lorem ipsum" in final proof.
- One clear primary action: tap a station.
- Readable on phone width.
- All data is static — clearly sample/illustrative.

## Design Verification Checklist

- [ ] Map is readable at 375px width.
- [ ] Station tap target is at least 44px on mobile.
- [ ] Bottom sheet opens smoothly on mobile.
- [ ] Side panel opens on desktop.
- [ ] Line colors match RapidKL official scheme.
- [ ] POI content changes per station selection.
- [ ] Close panel works (X button, Escape key, tap outside).
- [ ] Minimum 4.5:1 contrast ratio on all text.