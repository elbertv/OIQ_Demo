# GEMINI.md

This file provides instructional context for AI agents working on the **OfferIQ** project.

## Project Overview

**OfferIQ** is a high-fidelity, client-facing prototype of a campaign management dashboard for a fictional entity, "First Financial." The entire application is built as a single-page interface intended for demonstrations, particularly within Microsoft Teams.

The project is self-contained and designed to run directly in a web browser with no external dependencies or backend infrastructure. All data is simulated and hardcoded within the JavaScript file.

## Running the Project

- **No server or build step is required.**
- To run the prototype, simply open the `index.html` file in any modern web browser.

## Tech Stack and Development Conventions

This project adheres to a strict set of non-negotiable architectural constraints. **No external libraries, frameworks, or build tools are permitted.**

- **Technology:** Vanilla HTML5, CSS3, and modern JavaScript (ES6+).
- **Dependencies:** **ZERO.** Do not introduce any frameworks (e.g., React, Vue), utility libraries (e.g., Bootstrap, Tailwind CSS), or even small libraries (e.g., jQuery).
- **Styling:** All styles are managed in `style.css`. The design uses CSS variables for theming and a Flexbox/Grid-based layout for responsiveness.
- **Font:** The entire project must use the **Open Sans** font, loaded via Google Fonts in `index.html`.
- **Data:** All data is mock data hardcoded directly into the `script.js` file. There is no backend or database connection.

## Project Structure

The project is organized into three main files and a directory for design assets:

-   `index.html`: Contains the complete HTML structure for all sections of the application, including the Header, Campaign Studio, Home Dashboard, and the multi-step Persona Wizard.
-   `style.css`: Defines the entire visual presentation of the application. It includes CSS variables, base styles, component styles, and responsive design rules.
-   `script.js`: Handles all logic and interactivity. This includes state management, DOM manipulation, event handling, and the storage of all simulated data (personas, campaign metrics, etc.).
-   `Muestra/`: This directory contains the reference design images (`001.png` through `008.png`) that serve as the visual target for the UI.
-   `claude.md` & `prompt.md`:Contain the original and refined instructions used for generating and developing the prototype. They are a good reference for understanding the initial goals.

## Key UI Sections

The `index.html` file is divided into several main components that are toggled by JavaScript:

1.  **Campaign Studio (`#campaign-studio`):** The primary entry point, allowing users to start a new campaign via the Persona Wizard or view/edit existing (simulated) campaigns.
2.  **Home Dashboard (`#home`):** A view that displays key performance indicators (KPIs) in metric cards and a table of recent campaign performance.
3.  **Persona Wizard (`#persona-builder`):** A multi-step modal for building a new campaign.
    *   **Step 1 (Explore Persona):** Users select a pre-defined persona and review its characteristics.
    *   **Step 2 (Review Products):** Users are shown recommended products and a table of sample customer data.
