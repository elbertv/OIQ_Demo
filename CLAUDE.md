# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**OfferIQ** is a high-fidelity prototype for First Financial's campaign management dashboard. It's designed for Microsoft Teams demos.

## Tech Stack Constraints (ADR-001)

These constraints are non-negotiable:
- **Vanilla only**: HTML5, CSS3, JavaScript (ES6+)
- **Zero dependencies**: No React, Vue, Bootstrap, Tailwind, jQuery, or any external libraries
- **No build step**: Must work by opening `index.html` directly in browser
- **No backend**: All data is hardcoded/simulated in JavaScript
- **Font**: Always use **Open Sans** (loaded from Google Fonts)

## Running the Project

Open `index.html` in any modern browser. No server required.

## Architecture

```
index.html   - Single page with all sections (Campaign Studio, Home, Persona Wizard)
style.css    - CSS variables, component styles, responsive design
script.js    - State management, DOM manipulation, simulated data
Muestra/     - Reference design images (001.png through 008.png)
```

### Key UI Sections

1. **Header**: Blue gradient with diagonal geometric overlay, navigation tabs
2. **Campaign Studio**: Entry point with "New Campaign" and "Edit Active Campaigns" cards
3. **Home Dashboard**: Metric cards and campaign performance table
4. **Persona Wizard**: Two-step flow (Explore Persona → Review Products)

### Data Layer

All mock data lives in `script.js`:
- `personas` object: Home Owners, Small Business, Young Professionals, Retirees
- `campaignData` array: Campaign performance metrics
- `populationData` array: Sample customer records for tables

## Design Reference

The `Muestra/` folder contains the target UI screenshots. When modifying styles, match:
- Color palette (blue header #1e4db7, green accents #28a745, orange data points #fd7e14)
- Card styling with subtle shadows and rounded corners
- Stepper component with progress indicators
