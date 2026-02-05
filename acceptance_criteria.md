# User Story: Interactive Scatter Chart & Data Management

## Story

**As a** marketing analyst
**I want** to explore different product recommendations with dynamic data visualization and export population data
**So that** I can analyze propensity scores for targeted campaigns and share data with my team

---

## Acceptance Criteria

### 1. Dynamic Scatter Chart by Product Selection
**Given** the user is on "Review Products" (Step 2)
**When** the user clicks on a Recommended Product (HELOC, Mortgage, Improvement Loans, or Insurance)
**Then** the scatter chart regenerates with a different data pattern unique to that product
**And** the Propensity Score updates to the product-specific value
**And** the slider visual (green fill) updates to reflect the percentage

| Product | Propensity Score |
|---------|-----------------|
| HELOC | 80% |
| Mortgage | 72% |
| Improvement Loans | 65% |
| Insurance | 88% |

### 2. Persona Context Persistence
**Given** the user selected a Persona in Step 1 (e.g., "Young Professionals")
**When** the user advances to Step 2 ("Review Products")
**Then** the "Population Overview" subtitle displays the selected persona name
**And** the scatter chart legend displays the selected persona name

### 3. Functional Pagination
**Given** the user is on "Review Products" (Step 2)
**When** viewing the Population Overview table
**Then** the table displays 10 records per page with 100 total records
**And** the footer shows "Persona Type Segment - 100 People (Page X of 10)"
**And** clicking "Next" advances to the next page (if available)
**And** clicking "Previous" returns to the previous page (if available)

### 4. Data Export
**Given** the user is on "Review Products" (Step 2)
**When** the user clicks the download button
**Then** a dropdown appears with "Download CSV" and "Download Excel" options
**And** selecting CSV downloads a file named `{PersonaName}_Data_{YYYY-MM-DD}.csv`
**And** selecting Excel downloads a file named `{PersonaName}_Data_{YYYY-MM-DD}.xls`
**And** both files contain all 100 population records with headers: Name, Home, Mortgage, Income, Age, Family Status, Monthly Spend, Credit Score, Products Owned

---

## Test Cases

- [ ] Click HELOC -> scatter pattern changes, displays "80%", slider fills to 80%
- [ ] Click Mortgage -> scatter pattern changes, displays "72%", slider fills to 72%
- [ ] Click Improvement Loans -> scatter pattern changes, displays "65%", slider fills to 65%
- [ ] Click Insurance -> scatter pattern changes, displays "88%", slider fills to 88%
- [ ] Switching between products updates chart immediately
- [ ] Select "Home Owners" in Step 1 -> Step 2 shows "Home Owners" in subtitle and legend
- [ ] Select "Small Business" in Step 1 -> Step 2 shows "Small Business Owners" in subtitle
- [ ] Select "Young Professionals" in Step 1 -> Step 2 shows "Young Professionals" in subtitle
- [ ] Select "Retirees" in Step 1 -> Step 2 shows "Retirees" in subtitle
- [ ] Table shows exactly 10 rows per page
- [ ] Click "Next" on Page 1 -> navigates to Page 2
- [ ] Click "Previous" on Page 2 -> returns to Page 1
- [ ] "Previous" button disabled/no effect on Page 1
- [ ] "Next" button disabled/no effect on Page 10
- [ ] Download CSV -> file downloads with correct filename and 101 rows (header + 100 data)
- [ ] Download Excel -> file opens in Microsoft Excel without errors

---

## Definition of Done

- [ ] All acceptance criteria pass testing
- [ ] No console errors in browser
- [ ] Works in Chrome, Edge, and Firefox
- [ ] Responsive layout maintained (>= 768px)
