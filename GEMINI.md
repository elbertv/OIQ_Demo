# GEMINI.md

This file provides instructional context for AI agents working on the **OfferIQ** project.

## Project Overview

**OfferIQ** is a high-fidelity, client-facing prototype of a campaign management dashboard for a fictional entity, "First Financial." The entire application is built as a single-page interface intended for demonstrations, particularly within Microsoft Teams.

The project is self-contained and designed to run directly in a web browser with no backend infrastructure. All data is simulated and hardcoded within the JavaScript file.

## Running the Project

- **No server or build step is required.**
- To run the prototype, simply open the `index.html` file in any modern web browser.

## Tech Stack and Development Conventions

This project is built with a focus on modern, vanilla web technologies. While it avoids large frameworks, it selectively uses specialized libraries for data visualization.

- **Core Technology:** Vanilla HTML5, CSS3, and modern JavaScript (ES6+).
- **Dependencies:**
    - **D3.js (v7):** Used for creating dynamic, interactive data visualizations (USA Map and Scatter Plot). Loaded via CDN in `index.html`.
    - **TopoJSON:** A D3.js dependency used to handle the geographic data for the USA map. Loaded via CDN in `index.html`.
- **Styling:** All styles are managed in `style.css`. The design uses CSS variables for theming and a Flexbox/Grid-based layout for responsiveness. No CSS frameworks like Bootstrap or Tailwind are used.
- **Font:** The entire project must use the **Open Sans** font, loaded via Google Fonts in `index.html`.
- **Data:** All data is mock data hardcoded directly into the `script.js` file. There is no backend or database connection.

## Project Structure

The project is organized into three main files and a directory for design assets:

-   `index.html`: Contains the complete HTML structure for all application sections. It includes CDN links for the D3.js and TopoJSON libraries.
-   `style.css`: Defines the entire visual presentation of the application. It includes CSS variables, base styles, component styles (including those for the D3 charts), and responsive design rules.
-   `script.js`: Handles all logic and interactivity. This includes state management, DOM manipulation, event handling, generation of all D3.js visualizations, and the storage of all simulated data.
-   `Muestra/`: This directory contains the reference design images (`001.png` through `008.png`) that serve as the visual target for the UI.
-   `claude.md` & `prompt.md`:Contain the original and refined instructions used for generating and developing the prototype. They are a good reference for understanding the initial goals.

## Key UI Sections

The `index.html` file is divided into several main components that are toggled via JavaScript:

1.  **Header:** Global navigation bar with links to switch between `Home` and `Campaign Studio`, and a user profile section.
2.  **Campaign Studio (`#campaign-studio`):** The primary entry point. Allows users to start a new campaign via the Persona Wizard or view/edit existing (simulated) campaigns in a list.
3.  **Home Dashboard (`#home`):** A view that displays key performance indicators (KPIs) in metric cards and a table of recent campaign performance.
4.  **Persona Wizard (`#persona-builder`):** A multi-step modal for building a new campaign. This is the most feature-rich component.
    *   **Step 1 (Explore Persona):**
        - Users select a pre-defined persona from a list.
        - Persona characteristics and owned products are displayed.
        - **Interactive USA Map:** A D3.js-powered choropleth map shows simulated "Spend by Location." It is fully interactive:
            - **Touch Mode:** Click on a state to zoom in. Click the same state or double-click to reset.
            - **Zoom Mode:** Drag to draw a rectangle and zoom into that specific area.
            - **Control Panel:** A custom UI allows toggling between modes, resetting the view, and hiding/showing the map legend.
    *   **Step 2 (Review Products):**
        - Displays a list of recommended products for the selected persona.
        - **Interactive Scatter Plot:** A D3.js-powered scatter plot visualizes a "Propensity Score" for the selected product.
            - **Dynamic Data:** The plot regenerates with a new data distribution when a different product is selected.
            - **Interactive Tooltip:** Hovering over a point reveals a detailed tooltip with a specific value. Clicking a point "pins" the tooltip, keeping it visible. Clicking elsewhere unpins it.
            - **Smart Positioning:** The tooltip automatically flips to the left side of the point if it's too close to the right edge of the chart, preventing it from being cut off.
        - **Population Table:** A paginated table shows a sample of 100 customers matching the persona.
        - **Download Data:** A download button allows the user to export the full 100-person sample data as either a `.csv` or `.xls` file.
5.  **Success Modal (`#success-modal`):** A confirmation dialog that appears after a campaign is successfully created, guiding the user back to the Campaign Studio.