# Repository Guidelines

## Project Structure & Module Organization
OfferIQ is a single-page, static prototype. Key paths:
- `index.html`: All UI sections and markup.
- `style.css`: Styling, CSS variables, component layout.
- `script.js`: State, DOM behavior, D3 visualizations, mock data.
- `data.js`, `pt.json`: Data sources used by the prototype.
- `Muestra/`: Reference designs and standalone examples.
- `images/`, `evidencia/`, `_pre/`: Assets and supporting materials.

There is no backend or build pipeline. The app must run by opening `index.html` directly in a browser.

## Build, Test, and Development Commands
- `start`: Open `index.html` in a modern browser (no server required).
- `lint/format`: Not configured in this repo.
- `tests`: No automated tests present.

If you add tooling, document the exact commands and keep them optional.

## Coding Style & Naming Conventions
- Technologies: Vanilla HTML5/CSS3/ES6+ only. External libs limited to D3 v7 and TopoJSON v3 via CDN.
- Indentation: 2 spaces in HTML/CSS, 2 spaces in JS (match existing files).
- Naming: `kebab-case` for CSS classes/ids, `camelCase` for JS variables/functions.
- Font: Open Sans (Google Fonts) must remain the global font.

## Testing Guidelines
There is no testing framework in the repository. If you introduce tests, prefer lightweight, browser-based checks and clearly document how to run them.

## Agent Git Commit Convention

- For every change made to the project, the agent must perform a git commit.
- **Workflow:** Always run `git add .` before committing to ensure all changes (including new files) are tracked.
- **Commit Message Format:** `AGENT: {comentario} yyyy_mm_dd_hh_mm`
- The agent acts as a developer in the project and follows these guidelines strictly. Branch management is handled by the user.
- Never do a pull, or push, or fetch, never. 


If you are acting as an agent, follow the relevant prefix format and include timestamp suffixes. Otherwise keep commits short and descriptive.

PRs should include:
- Summary of UI changes and impacted files.
- Screenshots for visual changes (before/after if helpful).
- Notes on any new data sources or behavior changes.

## Security & Configuration Tips
Do not introduce secrets or backend endpoints. All data must remain simulated and local.
