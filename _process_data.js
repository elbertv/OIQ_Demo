
const fs = require('fs');

try {
    const rawData = fs.readFileSync('pt.json', 'utf8');
    const stateData = JSON.parse(rawData);

    // 1. Calculate National Aggregates
    const nationalPersonas = {};

    stateData.forEach(state => {
        Object.keys(state.personas).forEach(pKey => {
            const pData = state.personas[pKey];
            
            if (!nationalPersonas[pKey]) {
                nationalPersonas[pKey] = {
                    count: 0,
                    population: 0,
                    assetsMin: 0, assetsMax: 0,
                    debtMin: 0, debtMax: 0,
                    spendMin: 0, spendMax: 0,
                    dtiWeighted: 0,
                    creditMin: 0, creditMax: 0,
                    ageMin: 0, ageMax: 0
                };
            }

            const nat = nationalPersonas[pKey];
            const pop = pData.pop_py || 0;

            nat.count += 1;
            nat.population += pop;
            
            // Weighted accumulations for averages
            nat.assetsMin += pData.assets.min * pop;
            nat.assetsMax += pData.assets.max * pop;
            nat.debtMin += pData.debt.min * pop;
            nat.debtMax += pData.debt.max * pop;
            nat.spendMin += pData.monthly_spend.min * pop;
            nat.spendMax += pData.monthly_spend.max * pop;
            nat.dtiWeighted += pData.debt_to_income_ratio * pop; // Will divide by total pop
            
            // For demographics, weighted average of ranges
            nat.creditMin += pData.credit_score.min * pop;
            nat.creditMax += pData.credit_score.max * pop;
            nat.ageMin += pData.age_group.min * pop;
            nat.ageMax += pData.age_group.max * pop;
        });
    });

    // Finalize Averages
    const personasOutput = {};
    Object.keys(nationalPersonas).forEach(key => {
        const nat = nationalPersonas[key];
        const pop = nat.population || 1;
        
        // Slug for ID
        const slug = key.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        // Formatting helpers
        const fmtMoney = (val) => '$' + Math.round(val).toLocaleString('en-US');
        const fmtNum = (val) => Math.round(val).toLocaleString('en-US');

        personasOutput[slug] = {
            name: key,
            // Generic description (placeholder as it's not in pt.json, retaining generic text or leaving blank)
            description: `Aggregated profile for ${key}.`, 
            characteristics: {
                population: fmtNum(nat.population),
                assets: `${fmtMoney(nat.assetsMin / pop)} - ${fmtMoney(nat.assetsMax / pop)}`,
                debt: `${fmtMoney(nat.debtMin / pop)} - ${fmtMoney(nat.debtMax / pop)}`,
                dti: (nat.dtiWeighted / pop).toFixed(2) + '%', // Average
                credit: `${Math.round(nat.creditMin / pop)} - ${Math.round(nat.creditMax / pop)}`,
                age: `${Math.round(nat.ageMin / pop)} - ${Math.round(nat.ageMax / pop)}`,
                spend: `${fmtMoney(nat.spendMin / pop)} - ${fmtMoney(nat.spendMax / pop)}`
            },
            // Placeholder products (pt.json doesn't have products list, will reuse defaults or generic)
            products: ['Checking', 'Savings', 'Credit Card'] 
        };
    });

    // 2. Prepare State Lookup Data
    // We need a map of State Name -> Persona Key -> Data
    const stateLookup = {};
    stateData.forEach(state => {
        const pMap = {};
        Object.keys(state.personas).forEach(pKey => {
            const pData = state.personas[pKey];
            const slug = pKey.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            
            const fmtMoney = (val) => '$' + Math.round(val).toLocaleString('en-US');
            const fmtNum = (val) => Math.round(val).toLocaleString('en-US');

            pMap[slug] = {
                population: fmtNum(pData.pop_py),
                assets: `${fmtMoney(pData.assets.min)} - ${fmtMoney(pData.assets.max)}`,
                debt: `${fmtMoney(pData.debt.min)} - ${fmtMoney(pData.debt.max)}`,
                dti: (pData.debt_to_income_ratio).toFixed(2) + '%',
                credit: `${pData.credit_score.min} - ${pData.credit_score.max}`,
                age: `${pData.age_group.min} - ${pData.age_group.max}`,
                spend: `${fmtMoney(pData.monthly_spend.min)} - ${fmtMoney(pData.monthly_spend.max)}`
            };
        });
        stateLookup[state.state_name] = pMap;
    });

    // Output formatted code block
    console.log('// --- GENERATED DATA START ---');
    console.log('const personas = ' + JSON.stringify(personasOutput, null, 4) + ';');
    console.log('');
    console.log('const statePersonaData = ' + JSON.stringify(stateLookup, null, 4) + ';');
    console.log('// --- GENERATED DATA END ---');

} catch (err) {
    console.error(err);
}
