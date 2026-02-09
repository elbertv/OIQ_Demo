# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**OfferIQ** is a high-fidelity prototype for First Financial's campaign management dashboard. Designed for Microsoft Teams demos.

## Tech Stack Constraints (Non-Negotiable)

- **Vanilla only**: HTML5, CSS3, JavaScript (ES6+)
- **External dependencies**: Only D3.js v7 and TopoJSON v3 (loaded via CDN)
- **No build step**: Must work by opening `index.html` directly in browser
- **No backend**: All data is simulated in JavaScript
- **Font**: Open Sans (Google Fonts)

## Running the Project

Open `index.html` in any modern browser. No server required.

## Agent Git Commit Convention

- For every change made to the project, the agent must perform a git commit.
- **Workflow:** Always run `git add .` before committing to ensure all changes (including new files) are tracked.
- **Commit Message Format:** `GEMINI: {comentario} yyyy_mm_dd_hh_mm`
- The agent acts as a developer in the project and follows these guidelines strictly. Branch management is handled by the user..


## Architecture

```
index.html   - Single page with all sections (3 main views, 2 wizard steps)
style.css    - CSS variables, ~1700 lines, component styles
script.js    - State, DOM, D3 visualizations, ~1040 lines
Muestra/     - Reference designs (PNG) and standalone examples (HTML)
Data_Dummie/ - Reference CSV data
```

### Application State (script.js)

```javascript
currentSelectedProduct   // 'heloc' | 'mortgage' | 'improvement' | 'insurance'
currentSelectedPersona   // 'home-owners' | 'small-business' | 'young-professionals' | 'retirees'
currentPage              // Pagination state (1-10)
currentScatterData       // Array of {id, x, y} for scatter plot
```

### Key Data Structures

```javascript
// Product-specific scatter seeds and propensity scores
productConfig = {
    'heloc': { propensityScore: 80, scatterSeed: 20260204 },
    'mortgage': { propensityScore: 72, scatterSeed: 12345678 },
    'improvement': { propensityScore: 65, scatterSeed: 87654321 },
    'insurance': { propensityScore: 88, scatterSeed: 11223344 }
}

// Persona definitions with characteristics
personas = { 'home-owners': {...}, 'small-business': {...}, ... }

// 100 generated population records for pagination
populationData = generatePopulationData(100)
```

### D3.js Visualizations

1. **USA Map** (`generateUSAMap()`): Choropleth using TopoJSON, renders in `#usa-map`
2. **Scatter Chart** (`generateScatterChart()`): Dynamic plot in `#scatter-svg`, regenerates per product selection using LCG for deterministic randomness

### Deterministic Random (LCG)

The scatter chart uses a Linear Congruential Generator to produce stable patterns:
```javascript
function scatterLcg(seed) {
    let s = seed >>> 0;
    return () => (s = (1664525 * s + 1013904223) >>> 0) / 2 ** 32;
}
```
Each product has a unique seed, so switching products shows different but reproducible patterns.

### Scatter Tooltip Behavior

- Tooltip flips to left side when point is in rightmost 20% of chart
- Controlled by `scatterConfig.flipThreshold` (0.80 = 80% from left)
- CSS class `.flip-left` handles positioning

### Export Functions

- `convertToCSV(data)` - Standard CSV format
- `convertToXLSX(data)` - SpreadsheetML (XML-based Excel format, no library needed)
- `downloadFile(content, filename, mimeType)` - Blob API download

## CSS Organization (style.css)

Key sections with line references:
- CSS variables: lines 1-50
- Header/navigation: lines 100-200
- Wizard steps: lines 400-600
- Persona details grid (Flexbox columns): lines 745-760
- Scatter chart styles: lines 1328-1652 (heavily commented for customization)
- Download dropdown: lines 1654-1688

### Scatter Chart Customization (CSS)

```css
.scatter-tip-inner { font-size: 28px; padding: 14px 18px; }  /* Bubble size/text */
.scatter-tip-dot { width: 64px; height: 64px; }              /* White circle */
.scatter-tip-dot::after { width: 20px; height: 20px; }       /* Orange dot inside */
```

## Reference Files (Muestra/)

- `scatter.html` - Standalone scatter chart example with tooltip
- `map.html` - Standalone USA map example
- `001.png` - `008.png` - Target UI screenshots

## Design Reference Colors

- Header blue: `#1e4db7`
- Accent green: `#28a745` / `var(--accent-green)`
- Accent orange: `#fd7e14` / `var(--accent-orange)`
- Primary blue: `#2563eb` / `var(--primary-blue)`
