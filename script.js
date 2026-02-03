/**
 * ========================================
 * OIQ - OfferIQ JavaScript
 * Interactive Dashboard Functionality
 * ========================================
 */

// ----------------------------------------
// Simulated Data (Mock Database)
// ----------------------------------------

const personas = {
    'home-owners': {
        name: 'Home Owners',
        description: 'Established individuals who prioritize stability and long-term financial planning. They focus on managing mortgage obligations while building equity and maintaining lifestyle needs.',
        characteristics: {
            population: '35,000',
            assets: '$200,000 - $800,000',
            debt: '$100,000 - $400,000',
            dti: '32%',
            credit: '700 - 770',
            age: '30 - 55',
            spend: '$5,000 - $8,000'
        },
        products: ['Mortgage', 'Checking', 'Home Insurance', 'Credit Card']
    },
    'small-business': {
        name: 'Small Business Owners',
        description: 'Entrepreneurs and business owners who need financial products to support their business operations. They balance personal and business finances while seeking growth opportunities.',
        characteristics: {
            population: '18,500',
            assets: '$150,000 - $500,000',
            debt: '$50,000 - $250,000',
            dti: '28%',
            credit: '680 - 750',
            age: '35 - 60',
            spend: '$8,000 - $15,000'
        },
        products: ['Business Checking', 'Line of Credit', 'Commercial Insurance', 'Business Credit Card']
    },
    'young-professionals': {
        name: 'Young Professionals',
        description: 'Career-focused individuals in the early stages of wealth building. They prioritize convenience, digital solutions, and building credit history.',
        characteristics: {
            population: '42,000',
            assets: '$25,000 - $150,000',
            debt: '$15,000 - $80,000',
            dti: '22%',
            credit: '650 - 720',
            age: '22 - 35',
            spend: '$3,000 - $6,000'
        },
        products: ['Checking', 'Savings', 'Credit Card', 'Auto Loan']
    },
    'retirees': {
        name: 'Retirees',
        description: 'Individuals transitioning from wealth accumulation to wealth preservation. They focus on income generation, estate planning, and maintaining their lifestyle.',
        characteristics: {
            population: '28,000',
            assets: '$500,000 - $2,000,000',
            debt: '$0 - $100,000',
            dti: '15%',
            credit: '750 - 820',
            age: '60 - 80',
            spend: '$4,000 - $7,000'
        },
        products: ['Checking', 'CD', 'Investment Account', 'Medicare Supplement']
    }
};

const campaignData = [
    { name: 'HELOC Spring Push', persona: 'Home Owners', status: 'active', reach: 8420, conversion: 72, revenue: 542000 },
    { name: 'First-Time Buyer Welcome', persona: 'Young Professionals', status: 'active', reach: 12350, conversion: 65, revenue: 890000 },
    { name: 'Business Growth Q1', persona: 'Small Business', status: 'paused', reach: 3200, conversion: 58, revenue: 234000 },
    { name: 'Retirement Planning', persona: 'Retirees', status: 'active', reach: 6750, conversion: 78, revenue: 456000 },
    { name: 'Credit Builder', persona: 'Young Professionals', status: 'active', reach: 4700, conversion: 62, revenue: 278000 }
];

const populationData = [
    { name: 'Alice Johnson', home: true, mortgage: 'Active', income: 85000, age: 42, family: 'Married, 2 kids', spend: 6200, credit: 720, products: 'Mortgage, Home Insurance' },
    { name: 'Brian Smith', home: true, mortgage: 'Paid-off', income: 120000, age: 52, family: 'Married', spend: 7500, credit: 765, products: 'Mortgage, Rewards Credit Card' },
    { name: 'Carla Gomez', home: true, mortgage: 'Active', income: 75000, age: 38, family: 'Single, 1 child', spend: 5800, credit: 705, products: 'HELOC, Brokerage Account' },
    { name: 'David Lee', home: true, mortgage: 'Active', income: 95000, age: 47, family: 'Married, 3 kids', spend: 6900, credit: 730, products: 'Mortgage, Term Life Insurance' },
    { name: 'Emma Brown', home: true, mortgage: 'Paid-off', income: 110000, age: 54, family: 'Married', spend: 7200, credit: 755, products: 'HELOC, High-Yield Savings' },
    { name: 'Frank Wilson', home: true, mortgage: 'Active', income: 68000, age: 35, family: 'Married', spend: 5400, credit: 710, products: 'Mortgage, Auto Insurance Bundle' },
    { name: 'Grace Miller', home: true, mortgage: 'Active', income: 82000, age: 40, family: 'Married, 1 child', spend: 6000, credit: 725, products: 'Mortgage, IRA (Roth)' },
    { name: 'Henry Davis', home: true, mortgage: 'Paid-off', income: 130000, age: 55, family: 'Married', spend: 7800, credit: 770, products: 'HELOC, ETF Portfolio' },
    { name: 'Isabel Clark', home: true, mortgage: 'Active', income: 72000, age: 36, family: 'Single', spend: 5700, credit: 715, products: 'Mortgage, Cash-Back Credit Card' },
    { name: 'Jack Thompson', home: true, mortgage: 'Active', income: 90000, age: 45, family: 'Married, 2 kids', spend: 6100, credit: 735, products: 'Mortgage, College Savings' }
];

// ----------------------------------------
// DOM Elements
// ----------------------------------------

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const startPersonaBtn = document.getElementById('start-persona-btn');
const cancelWizardBtn = document.getElementById('cancel-wizard');
const nextStepBtn = document.getElementById('next-step');
const backStepBtn = document.getElementById('back-step');
const confirmProductBtn = document.getElementById('confirm-product');
const closeModalBtn = document.getElementById('close-modal');
const successModal = document.getElementById('success-modal');
const personaTags = document.querySelectorAll('.persona-tag');
const productItems = document.querySelectorAll('.product-item');
const stepper = document.querySelector('.stepper');
const steps = document.querySelectorAll('.step');
const wizardSteps = document.querySelectorAll('.wizard-step');
const campaignTableBody = document.getElementById('campaign-table-body');
const populationTableBody = document.getElementById('population-table-body');
const campaignSearch = document.getElementById('campaign-search');
const metricCards = document.querySelectorAll('.metric-card');
const scatterChart = document.getElementById('scatter-chart');
const usaMap = document.getElementById('usa-map');

// ----------------------------------------
// Navigation Functions
// ----------------------------------------

/**
 * Switch between main sections (Home, Campaign Studio)
 */
function navigateToSection(sectionId) {
    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Update sections
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

// Navigation click handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        navigateToSection(sectionId);
    });
});

// ----------------------------------------
// Wizard Functions
// ----------------------------------------

/**
 * Open the persona builder wizard
 */
function openPersonaWizard() {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('persona-builder').classList.add('active');
    resetWizard();
}

/**
 * Close the wizard and return to Campaign Studio
 */
function closePersonaWizard() {
    navigateToSection('campaign-studio');
    resetWizard();
}

/**
 * Reset wizard to initial state
 */
function resetWizard() {
    // Reset stepper
    stepper.dataset.step = '1';
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index === 0) step.classList.add('active');
    });

    // Reset wizard steps
    wizardSteps.forEach((step, index) => {
        step.classList.toggle('hidden', index !== 0);
    });

    // Reset persona selection
    personaTags.forEach((tag, index) => {
        tag.classList.toggle('active', index === 0);
    });
    updatePersonaDetails('home-owners');
}

/**
 * Go to next wizard step
 */
function nextWizardStep() {
    const currentStep = parseInt(stepper.dataset.step);
    if (currentStep < 2) {
        stepper.dataset.step = currentStep + 1;

        // Update stepper UI
        steps[currentStep - 1].classList.remove('active');
        steps[currentStep - 1].classList.add('completed');
        steps[currentStep].classList.add('active');

        // Show next content
        wizardSteps[currentStep - 1].classList.add('hidden');
        wizardSteps[currentStep].classList.remove('hidden');

        // Generate scatter chart
        generateScatterChart();
    }
}

/**
 * Go to previous wizard step
 */
function prevWizardStep() {
    const currentStep = parseInt(stepper.dataset.step);
    if (currentStep > 1) {
        stepper.dataset.step = currentStep - 1;

        // Update stepper UI
        steps[currentStep - 1].classList.remove('active');
        steps[currentStep - 2].classList.remove('completed');
        steps[currentStep - 2].classList.add('active');

        // Show previous content
        wizardSteps[currentStep - 1].classList.add('hidden');
        wizardSteps[currentStep - 2].classList.remove('hidden');
    }
}

/**
 * Confirm product and show success modal
 */
function confirmProduct() {
    successModal.classList.add('active');

    // Add campaign to list (simulated)
    addCampaignToList();
}

/**
 * Close success modal
 */
function closeSuccessModal() {
    successModal.classList.remove('active');
    closePersonaWizard();
}

// Wizard event listeners
if (startPersonaBtn) startPersonaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPersonaWizard();
});

if (cancelWizardBtn) cancelWizardBtn.addEventListener('click', closePersonaWizard);
if (nextStepBtn) nextStepBtn.addEventListener('click', nextWizardStep);
if (backStepBtn) backStepBtn.addEventListener('click', closePersonaWizard);
if (confirmProductBtn) confirmProductBtn.addEventListener('click', confirmProduct);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeSuccessModal);

// ----------------------------------------
// Persona Selection Functions
// ----------------------------------------

/**
 * Update persona details based on selection
 */
function updatePersonaDetails(personaKey) {
    const persona = personas[personaKey];
    if (!persona) return;

    // Update name and description
    document.getElementById('persona-name').textContent = persona.name;
    document.getElementById('persona-description').textContent = persona.description;

    // Update characteristics
    document.getElementById('char-population').textContent = persona.characteristics.population;
    document.getElementById('char-assets').textContent = persona.characteristics.assets;
    document.getElementById('char-debt').textContent = persona.characteristics.debt;
    document.getElementById('char-dti').textContent = persona.characteristics.dti;
    document.getElementById('char-credit').textContent = persona.characteristics.credit;
    document.getElementById('char-age').textContent = persona.characteristics.age;
    document.getElementById('char-spend').textContent = persona.characteristics.spend;

    // Update products owned
    const productTagsContainer = document.querySelector('.product-tags');
    if (productTagsContainer) {
        productTagsContainer.innerHTML = persona.products
            .map(product => `<span class="product-tag">${product}</span>`)
            .join('');
    }
}

// Persona tag click handlers
personaTags.forEach(tag => {
    tag.addEventListener('click', () => {
        personaTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        updatePersonaDetails(tag.dataset.persona);
    });
});

// ----------------------------------------
// Product Selection Functions
// ----------------------------------------

productItems.forEach(item => {
    item.addEventListener('click', () => {
        productItems.forEach(p => p.classList.remove('selected'));
        item.classList.add('selected');
    });
});

// ----------------------------------------
// Table Population Functions
// ----------------------------------------

/**
 * Populate campaign performance table
 */
function populateCampaignTable() {
    if (!campaignTableBody) return;

    campaignTableBody.innerHTML = campaignData.map(campaign => `
        <tr>
            <td>${campaign.name}</td>
            <td>${campaign.persona}</td>
            <td><span class="status-badge ${campaign.status}">${campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}</span></td>
            <td>${campaign.reach.toLocaleString()}</td>
            <td>${campaign.conversion}%</td>
            <td>$${(campaign.revenue / 1000).toFixed(0)}K</td>
        </tr>
    `).join('');
}

/**
 * Populate population overview table
 */
function populatePopulationTable() {
    if (!populationTableBody) return;

    populationTableBody.innerHTML = populationData.map(person => `
        <tr>
            <td>${person.name}</td>
            <td><span class="home-indicator"></span></td>
            <td><span class="status-badge ${person.mortgage === 'Active' ? 'active' : 'paid-off'}">${person.mortgage}</span></td>
            <td>$${person.income.toLocaleString()}</td>
            <td>${person.age}</td>
            <td>${person.family}</td>
            <td>$${person.spend.toLocaleString()}</td>
            <td>${person.credit}</td>
            <td>${person.products}</td>
        </tr>
    `).join('');
}

// ----------------------------------------
// Scatter Chart Generation
// ----------------------------------------

/**
 * Generate a scatter plot with random data points
 */
function generateScatterChart() {
    if (!scatterChart) return;

    // Clear existing dots
    scatterChart.innerHTML = '';

    // Generate random data points
    const numPoints = 40;
    for (let i = 0; i < numPoints; i++) {
        const dot = document.createElement('div');
        dot.className = 'scatter-dot';

        // Random positioning with some clustering in the middle-right
        const x = 20 + Math.random() * 70;
        const y = 10 + Math.random() * 80;

        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;

        // Random size variation
        const size = 8 + Math.random() * 8;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        scatterChart.appendChild(dot);
    }

    // Add hover tooltip indicator
    const tooltip = document.createElement('div');
    tooltip.className = 'scatter-tooltip';
    tooltip.textContent = '6320';
    tooltip.style.left = '45%';
    tooltip.style.top = '60%';
    tooltip.style.opacity = '1';
    scatterChart.appendChild(tooltip);
}

// ----------------------------------------
// USA Map Generation
// ----------------------------------------

/**
 * Generate a simple USA map with location dots
 */
function generateUSAMap() {
    if (!usaMap) return;

    // Simple SVG map placeholder
    usaMap.innerHTML = `
        <svg viewBox="0 0 960 600" style="width: 100%; height: 100%;">
            <!-- Simplified USA outline -->
            <path d="M150,200 Q200,150 300,180 Q400,100 500,120 Q600,100 700,150 Q800,120 850,180
                     L870,300 Q850,400 800,450 Q700,500 600,480 Q500,520 400,500 Q300,520 200,480
                     Q150,450 120,400 L100,300 Q120,250 150,200 Z"
                  fill="#e8e8e8" stroke="#ccc" stroke-width="2"/>

            <!-- Location dots -->
            <circle cx="250" cy="380" r="8" fill="#28a745"/>
            <circle cx="350" cy="320" r="6" fill="#28a745"/>
            <circle cx="480" cy="280" r="10" fill="#28a745"/>
            <circle cx="550" cy="350" r="7" fill="#28a745"/>
            <circle cx="650" cy="300" r="9" fill="#28a745"/>
            <circle cx="720" cy="380" r="6" fill="#28a745"/>
            <circle cx="400" cy="420" r="5" fill="#28a745"/>
        </svg>
    `;
}

// ----------------------------------------
// Metric Card Interactions
// ----------------------------------------

metricCards.forEach(card => {
    card.addEventListener('click', () => {
        const metric = card.dataset.metric;
        const valueEl = card.querySelector('.metric-value');

        // Animate value change (simulation)
        const currentValue = valueEl.textContent;
        valueEl.style.transform = 'scale(1.1)';

        setTimeout(() => {
            valueEl.style.transform = 'scale(1)';
        }, 200);
    });
});

// ----------------------------------------
// Campaign Search
// ----------------------------------------

let savedCampaigns = [];

function addCampaignToList() {
    const selectedPersona = document.querySelector('.persona-tag.active');
    const selectedProduct = document.querySelector('.product-item.selected');

    if (selectedPersona && selectedProduct) {
        savedCampaigns.push({
            name: `${selectedProduct.dataset.product.toUpperCase()} - ${selectedPersona.dataset.persona}`,
            date: new Date().toLocaleDateString()
        });

        updateCampaignsList();
    }
}

function updateCampaignsList() {
    const campaignsList = document.getElementById('campaigns-list');
    if (!campaignsList) return;

    if (savedCampaigns.length === 0) {
        campaignsList.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <p>There is no data to display</p>
            </div>
        `;
    } else {
        campaignsList.innerHTML = savedCampaigns.map(campaign => `
            <div class="campaign-list-item">
                <span class="campaign-name">${campaign.name}</span>
                <span class="campaign-date">${campaign.date}</span>
            </div>
        `).join('');
    }
}

if (campaignSearch) {
    campaignSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.campaign-list-item');

        items.forEach(item => {
            const name = item.querySelector('.campaign-name').textContent.toLowerCase();
            item.style.display = name.includes(searchTerm) ? 'flex' : 'none';
        });
    });
}

// ----------------------------------------
// Pagination (Simulated)
// ----------------------------------------

let currentPage = 1;
const itemsPerPage = 10;

document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        document.querySelector('.page-number').textContent = currentPage;
    }
});

document.getElementById('next-page')?.addEventListener('click', () => {
    currentPage++;
    document.querySelector('.page-number').textContent = currentPage;
});

// ----------------------------------------
// Initialize Application
// ----------------------------------------

function init() {
    // Populate tables
    populateCampaignTable();
    populatePopulationTable();

    // Generate USA map
    generateUSAMap();

    // Set initial persona details
    updatePersonaDetails('home-owners');

    console.log('OIQ Dashboard initialized successfully!');
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
