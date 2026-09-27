# Work Card 05 — Review and Fix

## Goal

Run the review mirror pass over the completed app, find the single smallest useful fix, apply it, and confirm.

## Inputs

- All source files
- `design.md` — design verification checklist
- `build-blueprint.md` — review mirror section

## Files likely touched

- Any source file that needs a fix

## Instructions for the coding agent

1. Review the entire app against:
   - `project-brief.md` — does v1 deliver what was promised?
   - `design.md` — does it match the design rules?
   - `build-blueprint.md` — are all guardrails respected?
   - Accessibility basics from design.md.
   - Anti-slop rules from design.md.

2. Identify the single smallest useful issue (not a nitpick, not a style preference — something that actually affects usability, correctness, or readability).

3. Fix it.

4. Update `build-status.md` with the issue and fix applied.

## What not to do

- Do not add new features.
- Do not redesign.
- Do not fix multiple things — one smallest useful fix only.
- Do not add zoom/pan, search, animations, or any v2 features.
- Do not add backend, auth, APIs, or databases.

## Done when

- One issue is identified and fixed.
- The fix is documented in `build-status.md`.
- All verification steps from Work Card 04 still pass.

## Verification steps

1. Re-run all verification steps from Work Card 04.
2. Confirm the fix addresses a real usability or correctness issue.
3. Design check: the fix aligns with `design.md` rules.
4. Confirm no new issues were introduced.

## Localhost test before continuing

Open `index.html` and repeat the full flow test from Work Card 04. Confirm the fix works and nothing regressed.

## Stop condition

If multiple large issues are discovered, fix the single smallest one and note the others in `build-status.md` as later items.

## Status
Not started