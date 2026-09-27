# Work Card 06 — GitHub and Vercel Proof

## Goal

Push the project to GitHub, deploy to Vercel, and confirm the deployed app works.

## Inputs

- All source files
- `build-blueprint.md` — proof ladder

## Files likely touched

- None (GitHub and Vercel operations)

## Instructions for the coding agent

1. Initialize Git in the project folder if not already done:
   ```
   git init
   git add .
   git commit -m "v1 — Interactive Schematic Map for RapidKL"
   ```

2. Create a public repository on GitHub (via `gh` CLI or web UI).

3. Push the repository:
   ```
   git remote add origin <url>
   git branch -M main
   git push -u origin main
   ```

4. Deploy to Vercel:
   - Connect the GitHub repo to Vercel.
   - Framework preset: **Other** (it's a static HTML site).
   - No build command needed.
   - Output directory: default (root).
   - Deploy.

5. Confirm the deployed URL loads and the full flow works.

## What not to do

- Do not add any code changes.
- Do not add a build step.
- Do not add environment variables, secrets, or API keys.
- Do not set up a custom domain unless requested.

## Done when

- The project is on GitHub (public repo).
- The app is live on Vercel (public URL).
- The deployed app passes the same tests as Work Card 04.

## Verification steps

1. Visit the Vercel deployment URL.
2. Confirm the schematic map renders.
3. Tap a station → POI panel opens.
4. Test on mobile viewport at the deployed URL.
5. Confirm the page loads without errors in the browser console.

## Localhost test before continuing

No localhost test needed — use the deployed Vercel URL instead.

## Stop condition

If GitHub or Vercel setup fails, ask the trainer for fallback proof (e.g., demonstrate the app opening from a local file).

## Status
Not started