# Nomio Website Playground

Static homepage prototype for Nomio — built with React 18 loaded from CDN via Babel standalone. No build step required.

## Running locally

You need to serve the files over HTTP (not `file://`) because the browser blocks cross-origin module loads from the filesystem.

**Option 1 — Python (built into macOS):**
```bash
cd /path/to/nomio-website
python3 -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080).

**Option 2 — Node `serve`:**
```bash
npx serve .
```

**Stop the server:** press `Ctrl+C` in the terminal.

## File structure

```
index.html                        # Entry point — loads React/Babel from CDN, mounts the app
tweaks-panel.jsx                  # Floating design-tool panel (color pickers, copy toggles)
components/
  Logo.jsx                        # NomioWordmark and NomioMark SVG components
  ContractTable.jsx               # Schematic product table used in animations
  copy.jsx                        # Shared copy constants
variations/
  V14_4_Ledger_v9.jsx             # Main page component (all sections)
  V14_4_LedgerAnims_v9.jsx        # CSS keyframe animations and animated section components
assets/
  logos/                          # SVG logo files for the trust band
```

## Making changes

All JSX files are loaded directly by the browser via Babel standalone — edit them and refresh. No compilation step.

**Page copy and layout** → `variations/V14_4_Ledger_v9.jsx`

**Animations** → `variations/V14_4_LedgerAnims_v9.jsx`

**Logo** → `components/Logo.jsx` — `NomioWordmark` is a single unified SVG; update the `viewBox` and paths there if the mark changes.

**Trust band logos** → add an SVG to `assets/logos/`, then add an entry to the `svgLogos` array near the top of `V14_4_Ledger_v9.jsx`.

**Design tokens** (colors, spacing) → defined as `const` variables at the top of `V14_4_Ledger_v9.jsx`, and can be overridden live via the tweaks panel in the bottom-right corner of the page.

## Fonts

Loaded from Google Fonts in `index.html`:
- **Fraunces** — display serif (headings)
- **Inter** — sans-serif (body, UI)
- **Newsreader** — alternate serif
- **JetBrains Mono** — monospace (used in product UI animations)
