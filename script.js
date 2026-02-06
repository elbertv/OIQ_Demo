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

// ----------------------------------------
// State-level Data Simulation
// ----------------------------------------
const stateDataFactors = {};
function createStateDataFactors(seed) {
    const rand = scatterLcg(seed);
    for (let i = 1; i <= 56; i++) {
        const id = i.toString().padStart(2, '0');
        stateDataFactors[id] = {
            population: 0.5 + rand() * 1.5,
            assets: 0.8 + rand() * 0.4,
            debt: 0.7 + rand() * 0.6,
            dti: 0.9 + rand() * 0.2,
            credit: 0.95 + rand() * 0.1,
        };
    }
}
createStateDataFactors(20260206); // Seed with a fixed date for consistency

function generateStateCharData(baseChars, stateId) {
    const factors = stateDataFactors[stateId] || { population: 1, assets: 1, debt: 1, dti: 1, credit: 1 };

    const cleanAndMultiply = (val, factor) => {
        if (typeof val !== 'string') return '';
        const numericVal = parseFloat(val.replace(/[^0-9.-]+/g,""));
        if (isNaN(numericVal)) return val;
        return (numericVal * factor).toLocaleString('en-US', { maximumFractionDigits: 0 });
    };

    const cleanAndMultiplyRange = (rangeStr, factor) => {
        if (typeof rangeStr !== 'string') return '';
        const parts = rangeStr.split('-').map(s => s.trim());
        if (parts.length !== 2) return rangeStr;
        const low = parseFloat(parts[0].replace(/[^0-9.-]+/g,""));
        const high = parseFloat(parts[1].replace(/[^0-9.-]+/g,""));
        if (isNaN(low) || isNaN(high)) return rangeStr;

        const format = (num) => {
            return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        }
        return `${format(low * factor)} - ${format(high * factor)}`;
    };

    return {
        population: cleanAndMultiply(baseChars.population, factors.population),
        assets: cleanAndMultiplyRange(baseChars.assets, factors.assets),
        debt: cleanAndMultiplyRange(baseChars.debt, factors.debt),
        dti: `${Math.round(parseFloat(baseChars.dti) * factors.dti)}%`,
        credit: baseChars.credit, // Keep credit score and age group same as national
        age: baseChars.age,
        spend: cleanAndMultiplyRange(baseChars.spend, factors.population * factors.dti) // spend is related to pop and dti
    };
}


// ----------------------------------------
// Extended Population Data (for pagination)
// ----------------------------------------
const fullNames = ["Phil Jedrasik", "Stephani Feuell", "Doyle Flack", "Brenden Orrell", "Dru Bathersby", "Papagena Maillard", "Antoine Argontt", "Tabitha Morrilly", "Harriott Liffey", "Lizabeth Ballston", "Saloma Bellon", "Jody Whaley", "Kennith Sherrum", "Rex Dunguy", "Kelly Woodhead", "Leonanie Hebden", "Chantalle Nana", "Walden Delatour", "Rosalia Mobbs", "Darelle Gethouse", "Ingemar Dominik", "Fleur Rosendale", "Jayme Aberdalgy", "Anastassia Bristowe", "Maryrose Riseborough", "Dagny Else", "Terrell Blasl", "Smitty Branchflower", "Allissa Fearnyhough", "Cordi Ghelerdini", "Perry Linfitt", "Guenna Wolfindale", "Jacquetta Kleuer", "Cullie Lias", "Codee McCurtain", "Ginger Edel", "Rebe Schultz", "Auroora Welburn", "Vanny Lewinton", "Akim Lehrer", "Ralina Moreside", "Colan Seldon", "Leopold Uttridge", "Zola Tulley", "Eveline Cornall", "Albie Adamiak", "Prentice Jeckell", "Brigg Covely", "Elsinore Willoughley", "Myrna Volage", "Noreen McVey", "Clevey Coen", "Demetre Abramof", "Fredra Oldfield-Cherry", "Morey Ebbers", "Grace Scardifeild", "Muire Cheeseman", "Annaliese Grayshan", "Goldia Deroche", "Baudoin O'Doran", "Vic Cescot", "Babita Van der Hoeven", "Dell Oxenden", "Jeanie Blampied", "Philly Joliffe", "Marlowe Rowbottam", "Tonya Heinecke", "Iain Local", "Riobard Grabeham", "Sloan Bambra", "Ceil Rispine", "Mollee Varnes", "Jerrilyn Scarre", "Merrick Bouch", "Ramon Fido", "Nico Muddicliffe", "Shepperd Glass", "Darrel Greenley", "Inness Fryer", "Jami Glasard", "Vachel Tunnow", "Bria Graundisson", "Cathyleen Weller", "Garey Edghinn", "Darla Standish", "Elizabet Lanchbery", "Nadeen Scurlock", "Arnuad Geroldo", "Marcelle Osgood", "Helli Masi", "Fletcher Hallford", "Perry Bowell", "Hobart Peile", "Portia Brocklesby", "Giorgio Ferroli", "Cirilo Saunton", "Leonard Usborn", "Wolfie Coxwell", "Rania Onthank", "Kareem Kieran", "Therese Swindlehurst", "Euell Cargen", "Rhodie Maryon", "Georgetta Agastina", "Sky Iddiens", "Wakefield Cocker", "Keslie Caesar", "Darrin Sowden", "Teddy Conew", "Brandice Coot", "Linnell Barstowk", "Karlen Matuschek", "Phyllis Gonoude", "Shantee Sharpus", "Marwin Landrick", "Laird Arkcoll", "Gustave Nuth", "Melisse Glozman", "Thayne Rosenwasser", "Lindsey Tertre", "Sorcha Kaasmann", "Jennine Denson", "Edy Normanvill", "Binky Boodell", "Meg Brokenshaw", "Latisha Streets", "Gerhardine Vine", "Norbie Kennerknecht", "Alys Edgehill", "Karin Teasey", "Maximilian Fugere", "Galina Giottini", "Brendan Bussy", "Erin Nisuis", "Jaymee Janman", "Hasty Ivashnikov", "Rafaelita Doget", "Emlynn Bastick", "Willy Bavidge", "Jojo Pautard", "Ced Luxon", "Janet Facey", "Avivah Hughlock", "Bryant Puig", "Baudoin Janusik", "Dorotea Asher", "Guillemette Coase", "Nadean Drynan", "Jami Worsom", "Jacky Farries", "Farica Bohan", "Onida Crannell", "Feodor Danilov", "Herby Saywood", "Gerianne Solon", "Chantal Lenthall", "Luce Ferraron", "Teri Fellis", "Geoffrey Dahlman", "Dorree Besnard", "Yves Balaisot", "Jeremias O'Cridigan", "Jacquette Upcraft", "Nancy Cheson", "Joni Bigland", "Carson Burril", "Dalis Skryne", "Rosanna Linsey", "Chester Castell", "Alfonso Gronaver", "Anselm Hiddersley", "Marleah Royste", "Jennilee Winchurst", "Zacharie Leile", "Jorry Lack", "Andy Rickardsson", "Byran Bellee", "Karney Immins", "Debbi Zink", "Marley Draycott", "Rey Gokes", "Rusty Ollerearnshaw", "Maggee Derisly", "Franchot Montrose", "Marion Ethridge", "Noelani Sunners", "Cortney Gadie", "Kleon Edison", "Benoite Franken", "Lorianna Blincko", "Mikaela Cuttin", "Thekla Mendonca", "Reggie Thunder", "Teresa Cowton", "Darb Dunk", "Iver Serck", "Codee Ritelli", "Ardra Packman", "Lynett Oguz", "Lori Bardill", "Jordon Lannon", "Libbey Sumnall", "Bronson Corday", "Denney Goulstone", "Adora Petrenko", "Julius Wink", "Bobbee Bellay", "Fabien McCuaig", "Piper Soltan", "Celeste Kerswill", "Elaina Kemball", "Ivar McAlindon", "Esther Getch", "Britteny Kimmings", "Debera Rosekilly", "Joella Keune", "Greta Cash", "Edgardo Stainburn", "Ricoriki Gifkins", "Roseanna Coltherd", "Julianne Brade", "Leonerd Thynne", "John Espinola", "Flori Kidstoun", "Florentia Dulinty", "Quinta Regelous", "Andres Custed", "Winifred Terbeek", "Richmound Hearne", "Ramon Arrington", "Ruperta Stollsteiner", "Isa Josefs", "Clemens Millhouse", "Briny Hearns", "Reinhard Garie", "Jacquetta Bottomore", "Lucretia Hasnney", "Gib Manilo", "Enriqueta Sotworth", "Gustav Lavers", "Roarke Czajka", "Avrit Petrello", "Sayres Gooley", "Hall Shakesby", "Ara Chubb", "Myriam Hubery", "Tracie Cowdrey", "Cecelia Rein", "Moreen Playhill", "Bethina Roloff", "Mahalia Iveans", "Martie Dursley", "Llewellyn Rigby", "Moshe Robrow", "Ilysa Vasiliu", "Erastus Stark", "Nanine Gotliffe", "Neill Wykes", "Betti O'Gleasane", "Georgeanna Gumm", "Yul Mackerel", "Katine Turfus", "Anatola Hamelyn", "Arleta Luetkemeyers", "Suki Winckles", "Karola Espinet", "Benny Comoletti", "Eduino Gatland", "Aldus Stollenhof", "Anya Cadden", "Danyelle Gallaher", "Anna-maria Lucken", "Cristen Gitting", "Adolf Bleakley", "Kin Juden", "Darcy Cobson", "Alie Carles", "Maurise Maybey", "Archie Clissold", "Erma Waggitt", "Meryl Stranieri", "Erek Gulland", "Dottie Grigg", "Claire Hawkwood", "Gusti Heake", "Leeann Corwin", "Wright Dallan", "Tisha Courtliff", "Karon Grigoire", "Donny Cheesworth", "Carine Summerill", "Corrinne Johnstone", "Tildie McMoyer", "Ansell Mitchiner", "Regine Lamas", "Bronson Feaviour", "Theodor Trattles", "Britta Schott", "Cazzie Bennedick", "Dode Hulburd", "Mignon Clymo", "Lodovico Ashford", "Luce Kermannes", "Jolene Taplin", "Olive Soall", "Hedwiga MacConnechie", "Kimball Rupel", "Nels Covert", "Marianne Southcott", "Pail Crampsey", "Thomasine Murkin", "Ashia Bernt", "Dolli Perkins", "Pamella Hedworth", "Reinold Harlick", "Theresina Moodycliffe", "Meryl Harber", "Allie Whorlow", "Fulton Brounsell", "Meryl Elletson", "Fannie Nanetti", "Pall Lucks", "Adele Clearie", "Maryjane Bertwistle", "Arron Tittletross", "Abagail Derrell", "Elayne Axelbey", "Wenda O'Dowling", "Ollie Rives", "Brook Scapens", "Neel Lorenz", "Adi Pickerin", "Gwen Sansam", "Broddie Morgue", "Nicoli Caton", "Trula Wroe", "Baxter Dewdeny", "Chrysler Costock", "Elsworth Bowery", "Reube Boswell", "Theresita Izakof", "Wildon Rosekilly", "Worthy Fritche", "Abba Westoll", "Ronnica Punchard", "Felipa Kernar", "Roley Gergler", "Walliw Caddock", "Nannie Ackers", "Natalee Thornham", "Tomasina Zelley", "Netti Cersey", "Yolanthe Hurdiss", "Kerr Gostall", "Wye Tesmond", "Renato Duddan", "Milissent Bevens", "Rori Rubinow", "Dasha Krates", "Shurwood Messum", "Ezri Fronczak", "Cris Paviour", "Nadean Palfery", "Julissa Mityakov", "Bettina Janik", "Marketa Feron", "Tedda Fisbburne", "Giselbert Yeabsley", "Charissa Zotto", "Frances Beck", "Nance Hazeman", "Odella Aldin", "Gardie Arnefield", "Gilly Primak", "Mariam Shimmings", "Tamra Gercken", "Charlean Price", "Lana Worstall", "Trista Warsap", "Sanderson Dirand", "Van Leadbeater", "Wakefield Rudinger", "Harmonie MacCarlich", "Jase Pogson", "Wynnie Ficken", "Garv Scipsey", "Trescha Knaggs", "Lettie Bugge", "Marys Micah", "Valentine Dauncey", "Tammy Callaby", "Slade Rainsdon", "Kingsly Honisch", "Veronike Preto", "Bern Belsey", "Shadow Tather", "Roselia Robic", "Kizzie Jumont", "Tova Dingwall", "Nike Fessier", "Cornie de Keyser", "Brewer Cornbill", "Corabella Horbath", "Stanislaus Beatty", "Stephen Ullrich", "Pat Caddie", "Ivette Lannin", "Thomasina Gadault", "Harmonie Dranfield", "Stevie Darell", "Callida Hammatt", "Cinda Ambrozik", "Baxie Meachen", "Malcolm MacKeever", "Darby Di Batista", "Stormie Culpin", "Penrod Freire", "Addison McComas", "Haze Oolahan", "Coop Channer", "Ettore Portwaine", "Arda McEwen", "Bradan Yitzhak", "Reed Jenney", "Arley Schoroder", "Vanny Cosens", "Farrel Waterhous", "Callean Gander", "Jillayne Kulic", "Albert Mundall", "Wilton Tarr", "Whittaker Wroughton", "Wylie Pegrum", "Sandi Foxwell", "Kassi Paszek", "Ezekiel Callaway", "Merv Mustoo", "Maureen Dutteridge", "Dar Hoggins", "Gerty Marjoribanks", "Pepi Govinlock", "Perry Frazier", "Ragnar Olliar", "Heda Parlot", "Allina Gilbride", "Olag Frid", "Rosco Kepe", "Roseanne Glencorse", "Emmalee Belfelt", "Tracie Dumphries", "Dollie Cushe", "Imelda Roantree", "Alyse Shingles", "Dom Hallt", "Daveen Deplacido", "Georgina Balding", "Andrew Bezant", "Waylen Jacobsson", "Arlina De Luna", "Osborne Morde", "Denyse Elfleet", "Theda Durston", "Pearle Dowbiggin", "Guthry Giraudeau", "Clara Ballsdon", "Madge Yushmanov", "Devi Molohan", "Josh Garritley", "Jerad Hawker", "Scot Dumberell", "Elita Skeermor", "Bobbye Cotte", "Bird Donaldson", "Julius Kee", "Selma Oade", "Burnard Truin", "Andreas MacLachlan", "Ulrika Matuszkiewicz", "Olly Costen", "Claus Ludewig", "Bent Barthrup", "Hortensia Rainford", "Cort Spatari", "Latrina Grishenkov", "Rebeka Garforth", "Krissy Carmen", "Betteanne Road", "Pierette Reck", "Marice Berzons", "Olia Lante", "Richmound Mirfin", "Lowe Ketts", "Kathleen Bryan", "Booth Dorricott", "Wanda Lambird", "Aime Pembry", "Burl McGray", "Meghann Morriss", "Beverlie Dowson", "Sig Giacopazzi", "Bambi Lloyd-Williams", "Kariotta Jobbins", "Joana Egar", "Morissa Lethlay", "Basile Ege", "Cliff Leebetter", "Vergil Gribbins", "Tami Fattori", "Garik Sidebotton", "Tobias Haslock", "Valentijn Snook", "Angie Milborn", "Obediah Clouston", "Muhammad Sieghart", "Susy Ife", "Ikey Rhodes", "Ingaborg Hanratty", "Arleen Heighton", "Abraham Robard", "Felipe Pumfrett", "Joell Pitceathly", "Riva Discombe", "Efrem Ellsom", "Mareah Gillani", "Mack Slyford", "Zacherie Westwick", "Esme Dukes", "Wendie Sharpe", "Harmonia Yewman", "Dania Pavey", "Farrand O' Neligan", "Aubrey Belfitt", "Wash Maestro", "Teresa Blundel", "Karie Fulks", "Zita Boliver", "Augusta Ganders", "Marshall Silman", "Angus Tilmouth", "Yvonne Edginton", "Evangeline Frank", "Cinderella Huckleby", "Theodoric Adamovitch", "Christin Levicount", "Mirabelle Healeas", "Rachael Roxburgh", "Wilmar De Roeck", "Wait Kipling", "Adrianna Morehall", "Elset Grayshan", "Aubry Perrinchief", "Dagmar Romushkin", "Wilmar Skrzynski", "Edwin Hay", "Basile Moses", "Deloris Gumley", "Ida Carabet", "Cara Mattheissen", "Dickie Sagrott", "Guy Batie", "Dukey Grinnov", "Berthe Scholcroft", "Arvie Greenstreet", "Derron Kubek", "Bride Djorvic", "Bryna McAuliffe", "Roxie Poulston", "Mollie Warham", "Aloisia Seally", "Cele Cumesky", "Ermentrude Harold", "Noni Tarren", "Rene Whitley", "Catlee Cordeau]", "Tim Franzettoini", "Allyn Maunton", "Rhett Abramof", "Natty Jardein", "Constanta Bordman", "Ambrosius Lauks", "Deny Filip", "Bobbe Stoppe", "Vaughan Butland", "Derwin Boulder", "Brod Vaen", "Nikola D'Oyly", "Elspeth Swarbrigg", "Bail Galland", "Philippe Swindlehurst", "Mickie Ive", "Fae Chismon", "Josepha Crighten", "Genvieve Bonehill", "Audry Stanbro", "Jackqueline Dudden", "Lionello Reubens", "Valentina Garlee", "Rozanne Mount", "Constantine Hebdon", "Marlin Clarke", "Arvie Waggitt", "Julius Gobbet", "Pren Pryor", "Fedora Ruter", "Lawton Boyes", "Gaile Piggen", "Carling Phibb", "Galvin Rosendale", "Susy Jemmett", "Trstram Mapam", "Linzy Allberry", "Sayres Farrand", "Jerri MacIlory", "Amity Oxberry", "Myrlene Winterbottom", "Melosa Haddy", "Bartolemo Currier", "Haskel McDugal", "Nicolle Deedes", "Leigh Baack", "Meredeth Gallo", "Harriette MacIver", "Elisabeth Berrisford", "Eli Lightoller", "Chastity Caulcott", "Rosette Liggins", "Raleigh Latchford", "Korrie Maccree", "Asher Willerson", "Franciska Nias", "Jo Crummie", "Paula Spofforth", "Elroy Kunzler", "Klemens Birtles", "Abbe Trahar", "Debee Persse", "Yank Prickett", "Roda Tuckey", "Kaiser Dubbin", "Gillan Polsin", "Jeffry Gossan", "Kaleb Chastang", "Denney Eckford", "Corabella Hoble", "Roderic Armsden", "Ignace Wickwar", "Sigismond Lodwig", "Devondra Cholerton", "Idaline Doni", "Sherwood Tomney", "Asher Blewett", "Henry Haighton", "Sauveur Le Hucquet", "Brandon Clute", "Meryl Diggle", "Elisha Scinelli", "Baryram Cancott", "Jessalyn Hankinson", "Gaelan Cumberlidge", "Inesita Lancetter", "Odey Loveday", "Dee Lyptrit", "Gardiner Cousen", "Niles Rentcome", "Otis Corgenvin", "Rodi Caulcott", "Hertha Belf", "Windham Goney", "Annabell Grunnell", "Codie Yanson", "Sarene Lightning", "Gerladina Affuso", "Christie Archdeacon", "Tracey Joscelyn", "Ethel Domone", "Cahra Duffan", "Thorstein Van Velden", "Rog Twentyman", "Turner Keunemann", "Ketty Hows", "Welbie Schole", "Jillana Penhall", "Delphinia Fardoe", "Crystal Spottiswood", "Krystalle Pettitt", "Charley Filpi", "Liz Dawtry", "Morganne Bonfield", "Conrade Guidotti", "Joyann Keyson", "Stanislaw Johnikin", "Brewer Laurentin", "Twila Brandenburg", "Franz Ganiclef", "Colly Takkos", "Sacha Aristide", "Bobby Watmore", "Wald Ganniclifft", "Catherin Lorain", "Deni Barsby", "Iggy Stranks", "Steven Sabathe", "Leila Pybworth", "Florinda Gorey", "Northrup Waind", "Tobias Vicary", "Terra Hrinishin", "Vally Juckes", "D'arcy Teape", "Rex Bernlin", "Cindi Corsan", "Nicol Hugnin", "Javier Mounch", "Kali Acors", "Rebe Grindley", "Ron Shoosmith", "Cahra Shelborne", "Cassy Beaglehole", "Jeff Spalls", "Morten MacGillavery", "Lefty Grandham", "Lana Strutt", "Nikolaos Derell", "Aeriel Cutbirth", "Philippe McClune", "Beatrix Gallehawk", "Rab Fountaine", "Codee Ongin", "Alfi Brayfield", "Nissa Muzzillo", "Brittany Roller", "Oralia Gentle", "Lelia Peirpoint", "Jephthah Kewish", "Britta Sedgebeer", "Wilhelm Cadney", "Linus Brecknell", "Titus McGaugey", "Igor Duxbury", "Celine Tatersale", "Waverley Bartlam", "Barbara Nannizzi", "Clyve Grebert", "Timothea Eburah", "Augustine Luparti", "Merrile Cristol", "Lisbeth Trusler", "Fonsie Bouldon", "Lynett Lotte", "Jeffry Rosenbloom", "Cristi Maric", "Jackie Faichnie", "Bethina Phette", "Latashia Searles", "Leupold von Hagt", "Agata Paaso", "Sibby Cundict", "Gradey Merrall", "Sherilyn Cato", "Rees Saveall", "Collen Broadbear", "Michelle Tenwick", "Joseito Marzelle", "Anders Denial", "Tuck Preedy", "Karyn Sangster", "Pamella MacSwayde", "Charmian Camplejohn", "Felicia Vinick", "Bernadine Brooksbie", "Konstantine Blair", "Son Noweak", "Lloyd Leven", "Kirsti Sedgmond", "Cesya Simonds", "Randi MacUchadair", "Kitti Amesbury", "Ruby Durrand", "Bobbe Haig", "Aeriel Common", "William Slinger", "Marti Stanion", "Nonie Cuppitt", "Gerardo Bedell", "Halette Kenn", "Mortimer Sponder", "Melli Pearch", "Christophe Linbohm", "Ezekiel Plows", "Sallie Hairsine", "Brenn Shefton", "Ferrel Kivlin", "Gram Dykas", "Dewie Trewman", "Devin Arsnell", "Isahella Assante", "Rosalinda Matussow", "Leanna Ionesco", "Jay Sturror", "Barry Ferres", "Tonia Hiscoke", "Di Berthe", "Annabela Thiem", "Karole Davidsen", "Esme L'oiseau", "Shelly Steer", "Giacinta Rotte", "Ariana Adlem", "Rici Sarsfield", "Hobard Adshed", "Adrienne Hamor", "Ibby Brangan", "Hanna Sukbhans", "Vivyan Ponting", "Benny Emburey", "Solly Willard", "Barry Domegan", "Elena Rodie", "Katey Cron", "Sherri Birchner", "Jacquie Oakwell", "Cesya Slight", "Noel Farman", "Bonni Milby", "Vittoria Aguirrezabala", "Esther Buard", "Dotti Endrici", "Othilia Cropper", "Whitman Abramino", "Venita McTeague", "Diane-marie Rainton", "Anthony Hallede", "Neil Dack", "Fedora Bertlin", "Vivian Buss", "Adlai Szymaniak", "Kasper Costell", "Rossy Kincey", "Clerc Friman", "Ronny McCane", "Jayme Rubrow", "Juliane Alexsandrev", "Ricoriki Lints", "Devi Lace", "Luca Veracruysse", "Paddie Neesam", "Judd Patterson", "Kore Scrooby", "Artemis Felmingham", "Garwood Leveritt", "Vidovic Sirey", "Curt Ajam", "Saw Caven", "Gabrielle Walkley", "Elberta Brucker", "Luz Mathivet", "Christy Catterall", "Konstance Reyson", "Miner Rowatt", "Antoinette Barry", "Sharia Reaper", "Aubert Golbourn", "Karna Elleyne", "Laney Isted", "Odilia Etuck", "Emmalynne Lauchlan", "Niven Sarjeant", "Liza Cliss", "Blair Feetham", "Gerrie Lipprose", "Kikelia Tieman", "Ignacius Hannah", "Reamonn Tilley", "Mathian Carrivick", "Breanne Woolston", "Barrett Stonebanks", "Farrand Skacel", "Marcellina Weatherall", "Trescha Aubry", "Ranna Nosworthy", "Dale Crown", "Helenka de Merida", "Jacky Shefton", "Georgeta Bulpitt", "Carney Tamas", "Dayle Leaf", "Dud Chart", "Cash Odom", "Nana Rodger", "Chauncey Dunstan", "Augustin Bewlay", "Angie Dumberell", "Ardelle Benian", "Morse Grangier", "Joye Preon", "Tonia Lundon", "Dolph Polding", "Krystyna Benstead", "Ira Ferreli", "Scarlett Meharg", "Annissa Jolly", "Batholomew Gosenell", "Audi Kleinmann", "Joey Hazley", "Erina Sheaf", "Cos Swaysland", "Olympia Realff", "Brod Walicki", "Arlee Terren", "Guillaume Ranson", "Sheffie Pideon", "Tabbie Cornelleau", "Celesta McPike", "Izaak Askin", "Tremayne Benninck", "Trudy Lagadu", "Lenore Radden", "Silvia Sidden", "Martha Dewett", "Elita Chinnock", "Jessamyn Jeannin", "Audry Galiford", "Osbourn Lattey", "Gran Puckring", "Tod Jore", "Elizabet Bisco", "Datha Pawling", "Gabby Rallin", "Bari Scinelli", "Prudi Grzesiewicz", "Mel Malkin", "Sylvan Matcham", "Muire Micheau", "Kendre Heaseman", "Merrill Cleobury", "Jenda Bomfield", "Cristi Goom", "Wesley Dominichelli", "Levey Kauble", "Ailene Bemrose", "Guillermo McReath", "Cedric Boaler", "Kelli Vignaux", "Hercules Gipp", "Lilas Strickland", "Carolan Lamond", "Ugo Dehmel", "Rab McKeran", "Wally Brettoner", "Ethyl Borghese", "Mikel Maffucci", "Killy Popham", "Branden Fery", "Kimberley Bittany", "Sisile Bartoszewski", "Collie Ramsby", "Pyotr Bonhill", "Tait Petrasek", "Kesley O'Doherty", "Clio Simunek", "Elva Broad", "Mathias Ramel", "Rhody Kneesha", "Quintus Shorton", "Barnebas Habershon", "Tybie Canas", "Alaine Durn", "Meggi Ponton", "Weider Woodyatt", "Jeremy Dominik", "Fax Andri", "Julieta Sirette", "Hubert Bidewell", "Jessie Dugue", "Tiffani Twopenny", "Ava De Ambrosi", "Berny Berthomieu", "Carlyle Oxlee", "Mehetabel Vevers", "Jackqueline Poplee", "Debera Abad", "Gene Scathard", "Harrie Spelwood", "Paolina Le Prevost", "Niki Czapla", "Cody Colls", "Murielle Sancraft", "Alida Sconce", "Arvin Bevar", "Aeriell Kinze", "Westbrook Aggio", "Carlee Foulis", "Timotheus Tarpey", "Betta Chessel", "Herculie Ivakhin", "Troy Hedin", "Perren Pedrick", "Reinald Cerro", "Kellyann Wallwork", "Joanne Beasleigh"];
const familyStatuses = ['Single', 'Married', 'Married, 1 child', 'Married, 2 kids', 'Married, 3 kids', 'Single, 1 child', 'Divorced', 'Widowed'];
const productCombos = [
    'Mortgage, Home Insurance',
    'Mortgage, Rewards Credit Card',
    'HELOC, Brokerage Account',
    'Mortgage, Term Life Insurance',
    'HELOC, High-Yield Savings',
    'Mortgage, Auto Insurance Bundle',
    'Mortgage, IRA (Roth)',
    'HELOC, ETF Portfolio',
    'Mortgage, Cash-Back Credit Card',
    'Mortgage, College Savings',
    'HELOC, Life Insurance',
    'Mortgage, Investment Account',
    'Checking, Savings, Credit Card',
    'Business Checking, Line of Credit',
    'CD, Investment Account'
];

/**
 * Generate extended population data
 */
function generatePopulationData(count = 100) {
    const data = [];
    for (let i = 0; i < count; i++) {
        const hasHome = Math.random() > 0.1;
        const mortgageStatus = Math.random() > 0.3 ? 'Active' : 'Paid-off';
        const income = 50000 + Math.floor(Math.random() * 100000);
        const age = 25 + Math.floor(Math.random() * 45);
        const family = familyStatuses[Math.floor(Math.random() * familyStatuses.length)];
        const spend = 3000 + Math.floor(Math.random() * 6000);
        const credit = 620 + Math.floor(Math.random() * 200);
        const products = productCombos[Math.floor(Math.random() * productCombos.length)];

        data.push({
            name: fullNames[i % fullNames.length],
            home: hasHome,
            mortgage: mortgageStatus,
            income: income,
            age: age,
            family: family,
            spend: spend,
            credit: credit,
            products: products
        });
    }
    return data;
}

const populationData = generatePopulationData(100);

// ----------------------------------------
// Product-specific configuration
// ----------------------------------------
const productConfig = {
    'heloc': {
        propensityScore: 80,
        scatterSeed: 20260204
    },
    'mortgage': {
        propensityScore: 72,
        scatterSeed: 12345678
    },
    'improvement': {
        propensityScore: 65,
        scatterSeed: 87654321
    },
    'insurance': {
        propensityScore: 88,
        scatterSeed: 11223344
    }
};

// Current state
let currentSelectedProduct = 'heloc';
let currentSelectedPersona = 'home-owners';

// Map control state
let mapControlsOpen = false;
let mapLegendVisible = true;
let mapActiveStateId = null; // Track currently zoomed state

// ----------------------------------------
// DOM Elements
// ----------------------------------------

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const startPersonaBtn = document.getElementById('start-persona-btn');
const startPersonaIcon = document.getElementById('start-persona-icon');
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
const usaMap = document.getElementById('usa-map');
const comparisonWrapper = document.querySelector('.comparison-wrapper');
const stateCharCard = document.getElementById('state-char-card');

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

        // Generate scatter chart when entering step 2
        if (currentStep + 1 === 2) {
            // Update population subtitle with selected persona
            const subtitleEl = document.querySelector('.population-subtitle');
            if (subtitleEl) {
                subtitleEl.textContent = personas[currentSelectedPersona]?.name || 'Home Owners';
            }

            // Update scatter legend with selected persona
            const legendEl = document.querySelector('.scatter-legend span:last-child');
            if (legendEl) {
                legendEl.textContent = personas[currentSelectedPersona]?.name || 'Home Owners';
            }

            // Reset pagination to page 1
            currentPage = 1;
            populatePopulationTablePaginated();

            // Initialize propensity score for current product
            updatePropensityScore(currentSelectedProduct);

            // Pequeño delay para que el DOM esté listo
            setTimeout(() => {
                generateScatterChart();
            }, 50);
        }
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

if (startPersonaIcon) startPersonaIcon.addEventListener('click', (e) => {
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
        currentSelectedPersona = tag.dataset.persona;
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

        // Update current selected product
        currentSelectedProduct = item.dataset.product;

        // Update propensity score
        updatePropensityScore(currentSelectedProduct);

        // Regenerate scatter chart with new data
        regenerateScatterForProduct(currentSelectedProduct);
    });
});

/**
 * Update propensity score display and slider
 */
function updatePropensityScore(productKey) {
    const config = productConfig[productKey];
    if (!config) return;

    const score = config.propensityScore;
    const valueEl = document.getElementById('propensity-value');
    const sliderEl = document.getElementById('propensity-slider');

    if (valueEl) {
        valueEl.textContent = `${score}%`;
    }

    if (sliderEl) {
        sliderEl.value = score;
        // Update slider background
        sliderEl.style.background = `linear-gradient(to right, var(--accent-green) 0%, var(--accent-green) ${score}%, var(--gray-300) ${score}%, var(--gray-300) 100%)`;
    }
}

/**
 * Regenerate scatter chart with product-specific seed
 */
function regenerateScatterForProduct(productKey) {
    const config = productConfig[productKey];
    if (!config) return;

    // Generate new scatter data with product-specific seed
    const rand = scatterLcg(config.scatterSeed);
    currentScatterData = [];

    for (let i = 0; i < scatterConfig.n; i++) {
        const x = scatterConfig.xDomain[0] + (scatterConfig.xDomain[1] - scatterConfig.xDomain[0]) * rand();
        const trend = (x - scatterConfig.xDomain[0]) / (scatterConfig.xDomain[1] - scatterConfig.xDomain[0]);
        let y = -1.2 + 2.6 * trend + (rand() - 0.5) * 0.9;
        y = Math.max(scatterConfig.yDomain[0], Math.min(scatterConfig.yDomain[1], y));

        const value = String(1000 + Math.floor(rand() * 9000));
        currentScatterData.push({ id: value, x: +x.toFixed(2), y: +y.toFixed(2) });
    }

    // Redraw the chart
    generateScatterChart();
}

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
// USA Map Generation (D3.js)
// ----------------------------------------

/**
 * Hides the state comparison panel and restores the USA panel to full width.
 */
function hideStateComparison() {
    if (comparisonWrapper) {
        comparisonWrapper.classList.remove('active');
        // Wait for the transition to finish before hiding it completely
        setTimeout(() => {
            if (!comparisonWrapper.classList.contains('active')) { // Ensure it's still inactive before hiding
                 stateCharCard.classList.add('hidden');
            }
        }, 300); // 300ms matches the CSS transition duration
    }
}

/**
 * Shows the state comparison panel, populates it with data, and shrinks the USA panel.
 * @param {object} stateGeoData - The properties object from the D3 geo data.
 */
function showStateComparison(stateGeoData) {
    if (!comparisonWrapper || !stateCharCard) return;

    const baseChars = personas[currentSelectedPersona].characteristics;
    const stateData = generateStateCharData(baseChars, stateGeoData.id);
    
    // Populate the state card
    document.getElementById('state-char-title').textContent = `Persona Characteristics ${stateGeoData.properties.name}`;
    document.getElementById('state-char-population').textContent = stateData.population;
    document.getElementById('state-char-assets').textContent = stateData.assets;
    document.getElementById('state-char-debt').textContent = stateData.debt;
    document.getElementById('state-char-dti').textContent = stateData.dti;
    document.getElementById('state-char-credit').textContent = stateData.credit;
    document.getElementById('state-char-age').textContent = stateData.age;
    document.getElementById('state-char-spend').textContent = stateData.spend;

    // Show the card
    stateCharCard.classList.remove('hidden');
    comparisonWrapper.classList.add('active');
}


/**
 * Generate USA map with D3.js and TopoJSON
 * Enhanced with zoom and state comparison panel
 */
async function generateUSAMap() {
    if (!usaMap) return;

    // Clear existing content
    usaMap.innerHTML = '';

    try {
        // Load US topology data
        const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json");
        const statesGeo = topojson.feature(us, us.objects.states).features;

        // Dummy spend data per state (simulated)
        const spendData = new Map();
        statesGeo.forEach(s => {
            const randomSpend = (Math.random() * (7 - 2) + 2).toFixed(1);
            spendData.set(s.id, +randomSpend);
        });

        // Color scale - green shades for spend
        const color = d3.scaleQuantize()
            .domain([2, 10])
            .range(d3.schemeGreens[7]);

        // Projection and path
        const mapWidth = 320;
        const mapHeight = 200;
        const projection = d3.geoAlbersUsa().fitSize([mapWidth, mapHeight], topojson.feature(us, us.objects.states));
        const path = d3.geoPath(projection);

        // Create SVG
        const svg = d3.select("#usa-map")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", [0, 0, mapWidth, mapHeight])
            .style("max-width", "100%")
            .style("height", "auto");

        // Map layer for zoom/pan
        const mapG = svg.append('g').attr('id', 'map-layer');

        // Zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on('zoom', (event) => {
                mapG.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Draw states
        const states = mapG.selectAll('path.usa-state')
            .data(statesGeo)
            .join('path')
            .attr('class', 'usa-state')
            .attr('fill', d => color(spendData.get(d.id)))
            .attr('d', path)
            .on('click', function(event, d) {
                // If clicking the same state that's already active, reset view
                if (mapActiveStateId === d.id) {
                    resetMapZoom();
                } else {
                    zoomToState(d, this);
                }
            });

        // Add tooltips
        states.append('title')
            .text(d => `${d.properties.name}\nSpend: $${spendData.get(d.id)}K`);

        // Draw state borders
        mapG.append("path")
            .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", "0.5")
            .attr("stroke-linejoin", "round")
            .attr("d", path);

        // Zoom to specific state
        function zoomToState(d, element) {
            mapActiveStateId = d.id;
            states.classed('active', false);
            d3.select(element).classed('active', true);
            
            showStateComparison(d);

            const [[x0, y0], [x1, y1]] = path.bounds(d);
            const dx = x1 - x0;
            const dy = y1 - y0;
            const x = (x0 + x1) / 2;
            const y = (y0 + y1) / 2;
            const scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / mapWidth, dy / mapHeight)));
            const translate = [mapWidth / 2 - scale * x, mapHeight / 2 - scale * y];

            svg.transition().duration(750).call(
                zoom.transform,
                d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
            );
        }

        // Reset zoom function
        function resetMapZoom() {
            mapActiveStateId = null;
            states.classed('active', false);
            svg.transition().duration(600).call(zoom.transform, d3.zoomIdentity);
            hideStateComparison();
        }

        // Double-click to reset
        svg.on('dblclick.zoom', () => {
            resetMapZoom();
        });

        // Legend (simple color bar)
        const legend = svg.append("g")
            .attr("id", "map-legend")
            .attr("transform", "translate(10, 165)");

        const legendWidth = 100;
        const legendHeight = 6;
        const legendScale = d3.scaleLinear().domain([2, 10]).range([0, legendWidth]);

        legend.selectAll("rect")
            .data(color.range().map(c => color.invertExtent(c)))
            .join("rect")
            .attr("height", legendHeight)
            .attr("x", d => legendScale(d[0]))
            .attr("width", d => legendScale(d[1]) - legendScale(d[0]))
            .attr("fill", d => color(d[0]));

        legend.append("text")
            .attr("y", -2)
            .attr("font-size", "8px")
            .attr("fill", "#666")
            .text("Spend ($K)");

        legend.append("text")
            .attr("y", legendHeight + 8)
            .attr("font-size", "7px")
            .attr("fill", "#999")
            .text("2");

        legend.append("text")
            .attr("x", legendWidth)
            .attr("y", legendHeight + 8)
            .attr("font-size", "7px")
            .attr("fill", "#999")
            .attr("text-anchor", "end")
            .text("10");

        // ===== Control Panel Logic =====
        const mapCard = usaMap.closest('.map-card');
        const ctrlToggle = document.getElementById('map-ctrl-toggle');
        const ctrlHome = document.getElementById('map-ctrl-home');
        const ctrlLegend = document.getElementById('map-ctrl-legend');
        const subButtons = document.querySelectorAll('.map-control-sub');

        if (ctrlToggle) {
            // Toggle controls open/close
            ctrlToggle.addEventListener('click', () => {
                mapControlsOpen = !mapControlsOpen;
                ctrlToggle.classList.toggle('open', mapControlsOpen);
                subButtons.forEach((btn, index) => {
                    setTimeout(() => {
                        btn.classList.toggle('visible', mapControlsOpen);
                    }, index * 50);
                });
            });

            // Home button - reset zoom
            ctrlHome.addEventListener('click', () => {
                resetMapZoom();
            });

            // Legend toggle button
            ctrlLegend.addEventListener('click', () => {
                mapLegendVisible = !mapLegendVisible;
                ctrlLegend.classList.toggle('active', mapLegendVisible);
                legend.style('opacity', mapLegendVisible ? 1 : 0);
                legend.style('pointer-events', mapLegendVisible ? 'auto' : 'none');
            });
        }

    } catch (error) {
        console.error('Error loading map:', error);
        // Fallback to simple placeholder
        usaMap.innerHTML = '<p style="text-align: center; color: #999;">Map loading...</p>';
    }
}

// ----------------------------------------
// Scatter Chart (Explore Persona)
// ----------------------------------------

/**
 * ========================================
 * CONFIGURACIÓN DEL SCATTER CHART
 * ========================================
 *
 * Aquí puedes ajustar los parámetros principales del gráfico.
 * Cada opción tiene un comentario explicativo.
 */
const scatterConfig = {
    // Número de puntos a generar
    n: 40,

    // Rango del eje X (horizontal)
    xDomain: [-6, 7],

    // Rango del eje Y (vertical)
    yDomain: [-2, 2],

    // Posición Y de la línea punteada (threshold)
    thresholdY: -0.4,

    // ============================================
    // AJUSTE: TAMAÑO DEL PUNTO NARANJA
    // Cambia este valor para puntos más grandes/pequeños
    // ============================================
    pointRadius: 6,

    // Corrimiento del label de la línea punteada hacia la izquierda
    thresholdLabelShiftX: -32,

    // ============================================
    // AJUSTE: DISTANCIA DE LA BURBUJA AL PUNTO
    // Más grande = burbuja más lejos del punto
    // ============================================
    tooltipOffsetX: 18,

    // ============================================
    // UMBRAL PARA VOLTEAR LA BURBUJA (20%)
    // Si el punto está en el último 20% del ancho del gráfico,
    // la burbuja aparecerá a la IZQUIERDA del punto.
    // Cambia este valor (0.20 = 20%) para ajustar.
    // ============================================
    flipThreshold: 0.20,

    // Márgenes del gráfico
    margin: { top: 18, right: 24, bottom: 42, left: 54 }
};

// Variables para el estado del tooltip
let scatterPinned = false;
let scatterPinnedDatum = null;

/**
 * Generador de números aleatorios determinístico (LCG)
 * Esto hace que el patrón de puntos sea estable al recargar
 */
function scatterLcg(seed = 1234567) {
    let s = seed >>> 0;
    return () => (s = (1664525 * s + 1013904223) >>> 0) / 2 ** 32;
}
// Current scatter data (changes based on selected product)
let currentScatterData = [];

/**
 * Genera datos dummy para el scatter plot con una semilla específica
 */
function generateScatterData(n, seed) {
    const rand = scatterLcg(seed);
    const data = [];
    for (let i = 0; i < n; i++) {
        const x = scatterConfig.xDomain[0] + (scatterConfig.xDomain[1] - scatterConfig.xDomain[0]) * rand();
        const trend = (x - scatterConfig.xDomain[0]) / (scatterConfig.xDomain[1] - scatterConfig.xDomain[0]);
        let y = -1.2 + 2.6 * trend + (rand() - 0.5) * 0.9;
        y = Math.max(scatterConfig.yDomain[0], Math.min(scatterConfig.yDomain[1], y));

        const value = String(1000 + Math.floor(rand() * 9000));
        data.push({ id: value, x: +x.toFixed(2), y: +y.toFixed(2) });
    }
    return data;
}

// Initialize with default product
currentScatterData = generateScatterData(scatterConfig.n, productConfig['heloc'].scatterSeed);

/**
 * Muestra el tooltip en una posición específica
 * @param {HTMLElement} tipEl - Elemento del tooltip
 * @param {HTMLElement} tipValueEl - Elemento donde va el valor
 * @param {number} x - Posición X en píxeles
 * @param {number} y - Posición Y en píxeles
 * @param {string} value - Valor a mostrar
 * @param {boolean} flipLeft - Si true, muestra el tooltip a la izquierda del punto
 */
function showScatterTip(tipEl, tipValueEl, x, y, value, flipLeft = false) {
    tipValueEl.textContent = value;
    tipEl.style.left = x + "px";
    tipEl.style.top = y + "px";
    tipEl.style.opacity = 1;
    tipEl.setAttribute("aria-hidden", "false");

    // ============================================
    // AJUSTE: VOLTEAR BURBUJA A LA IZQUIERDA
    // Cuando flipLeft es true, la burbuja aparece
    // a la izquierda del punto en lugar de la derecha
    // ============================================
    if (flipLeft) {
        tipEl.classList.add('flip-left');
    } else {
        tipEl.classList.remove('flip-left');
    }
}

/**
 * Oculta el tooltip si no está fijado
 */
function hideScatterTip(tipEl) {
    if (scatterPinned) return;
    tipEl.style.opacity = 0;
    tipEl.setAttribute("aria-hidden", "true");
}

/**
 * Genera el scatter chart con D3.js
 */
function generateScatterChart() {
    const chartEl = document.getElementById('scatter-chart');
    const tipEl = document.getElementById('scatter-tip');
    const tipValueEl = document.getElementById('scatter-tip-value');
    const svg = d3.select('#scatter-svg');

    if (!chartEl || !svg.node()) return;

    // Limpiar contenido previo
    svg.selectAll("*").remove();

    const width = chartEl.clientWidth;
    const height = 400;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const cfg = scatterConfig;
    const innerW = width - cfg.margin.left - cfg.margin.right;
    const innerH = height - cfg.margin.top - cfg.margin.bottom;

    const g = svg.append("g")
        .attr("transform", `translate(${cfg.margin.left},${cfg.margin.top})`);

    const x = d3.scaleLinear().domain(cfg.xDomain).range([0, innerW]);
    const y = d3.scaleLinear().domain(cfg.yDomain).range([innerH, 0]);

    // Grid horizontal
    g.append("g")
        .attr("class", "scatter-grid")
        .call(d3.axisLeft(y).ticks(6).tickSize(-innerW).tickFormat(""))
        .call(s => s.select(".domain").remove());

    // Grid vertical
    g.append("g")
        .attr("class", "scatter-grid")
        .attr("transform", `translate(0,${innerH})`)
        .call(d3.axisBottom(x).ticks(10).tickSize(-innerH).tickFormat(""))
        .call(s => s.select(".domain").remove());

    // Ejes
    g.append("g").attr("class", "scatter-axis").call(d3.axisLeft(y).ticks(6));
    g.append("g").attr("class", "scatter-axis").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(x).ticks(10));

    // Línea punteada (threshold)
    const yT = y(cfg.thresholdY);
    g.append("line")
        .attr("class", "scatter-threshold")
        .attr("x1", 0).attr("x2", innerW)
        .attr("y1", yT).attr("y2", yT);

    // Label del threshold
    g.append("text")
        .attr("class", "scatter-threshold-label")
        .attr("x", cfg.thresholdLabelShiftX)
        .attr("y", yT)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .text(cfg.thresholdY.toFixed(1));

    // Puntos naranjas
    const dots = g.append("g")
        .selectAll("circle")
        .data(currentScatterData, d => d.id)
        .join("circle")
        .attr("class", "scatter-point")
        .attr("r", cfg.pointRadius)
        .attr("cx", d => x(d.x))
        .attr("cy", d => y(d.y));

    // ---------------------------------------------------------
    // EVENTOS: Hover muestra burbuja, Click la fija
    // ---------------------------------------------------------
    dots
        .on("mouseenter", (event, d) => {
            if (scatterPinned) return;

            // Calcular posición del punto dentro del contenedor
            const pointX = cfg.margin.left + x(d.x);
            const pointY = cfg.margin.top + y(d.y);

            // ============================================
            // VERIFICAR SI HAY QUE VOLTEAR LA BURBUJA
            // Si el punto está en el último 20% del ancho,
            // mostramos la burbuja a la izquierda.
            // Ajusta cfg.flipThreshold para cambiar el umbral.
            // ============================================
            const chartWidth = chartEl.clientWidth;
            const flipLeft = pointX > chartWidth * (1 - cfg.flipThreshold);

            // Calcular posición X del tooltip
            // Si flipLeft, restamos el offset; si no, sumamos
            const tipX = flipLeft
                ? pointX - cfg.tooltipOffsetX
                : pointX + cfg.tooltipOffsetX;

            showScatterTip(tipEl, tipValueEl, tipX, pointY, d.id, flipLeft);
        })
        .on("mousemove", (event, d) => {
            if (scatterPinned) return;

            const pointX = cfg.margin.left + x(d.x);
            const pointY = cfg.margin.top + y(d.y);
            const chartWidth = chartEl.clientWidth;
            const flipLeft = pointX > chartWidth * (1 - cfg.flipThreshold);
            const tipX = flipLeft ? pointX - cfg.tooltipOffsetX : pointX + cfg.tooltipOffsetX;

            showScatterTip(tipEl, tipValueEl, tipX, pointY, d.id, flipLeft);
        })
        .on("mouseleave", () => hideScatterTip(tipEl))
        .on("click", (event, d) => {
            event.stopPropagation();
            scatterPinned = true;
            scatterPinnedDatum = d;

            const pointX = cfg.margin.left + x(d.x);
            const pointY = cfg.margin.top + y(d.y);
            const chartWidth = chartEl.clientWidth;
            const flipLeft = pointX > chartWidth * (1 - cfg.flipThreshold);
            const tipX = flipLeft ? pointX - cfg.tooltipOffsetX : pointX + cfg.tooltipOffsetX;

            showScatterTip(tipEl, tipValueEl, tipX, pointY, d.id, flipLeft);
        });

    // Click fuera del punto: desfija la burbuja
    d3.select(chartEl).on("click", () => {
        scatterPinned = false;
        scatterPinnedDatum = null;
        tipEl.style.opacity = 0;
        tipEl.setAttribute("aria-hidden", "true");
    });

    // Si el tooltip estaba fijado y se redimensiona, recolocarlo
    if (scatterPinned && scatterPinnedDatum) {
        const d = scatterPinnedDatum;
        const pointX = cfg.margin.left + x(d.x);
        const pointY = cfg.margin.top + y(d.y);
        const chartWidth = chartEl.clientWidth;
        const flipLeft = pointX > chartWidth * (1 - cfg.flipThreshold);
        const tipX = flipLeft ? pointX - cfg.tooltipOffsetX : pointX + cfg.tooltipOffsetX;

        showScatterTip(tipEl, tipValueEl, tipX, pointY, d.id, flipLeft);
    }
}

// Listener para redimensionar el scatter chart
let scatterResizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(scatterResizeTimeout);
    scatterResizeTimeout = setTimeout(() => {
        if (document.getElementById('scatter-chart')?.offsetParent !== null) {
            generateScatterChart();
        }
    }, 100);
}, { passive: true });

// Propensity slider - update value display when moved
document.getElementById('propensity-slider')?.addEventListener('input', function () {
    // Keep slider at the product's propensity value
    const score = productConfig[currentSelectedProduct]?.propensityScore || 80;
    this.value = score;
});

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
// Pagination (Functional)
// ----------------------------------------

let currentPage = 1;
const itemsPerPage = 10;

/**
 * Get total pages based on data
 */
function getTotalPages() {
    return Math.ceil(populationData.length / itemsPerPage);
}

/**
 * Populate population table with pagination
 */
function populatePopulationTablePaginated() {
    if (!populationTableBody) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = populationData.slice(startIndex, endIndex);

    populationTableBody.innerHTML = pageData.map(person => `
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

    // Update page number display
    const pageNumberEl = document.querySelector('.page-number');
    if (pageNumberEl) {
        pageNumberEl.textContent = currentPage;
    }

    // Update segment info
    const segmentInfo = document.querySelector('.segment-info');
    if (segmentInfo) {
        segmentInfo.textContent = `Persona Type Segment - ${populationData.length} People (Page ${currentPage} of ${getTotalPages()})`;
    }
}

document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        populatePopulationTablePaginated();
    }
});

document.getElementById('next-page')?.addEventListener('click', () => {
    if (currentPage < getTotalPages()) {
        currentPage++;
        populatePopulationTablePaginated();
    }
});

// ----------------------------------------
// Download Functions (CSV & XLSX)
// ----------------------------------------

/**
 * Convert data to CSV format
 */
function convertToCSV(data) {
    const headers = ['Name', 'Home', 'Mortgage', 'Income', 'Age', 'Family Status', 'Monthly Spend', 'Credit Score', 'Products Owned'];
    const rows = data.map(person => [
        person.name,
        person.home ? 'Yes' : 'No',
        person.mortgage,
        person.income,
        person.age,
        person.family,
        person.spend,
        person.credit,
        person.products
    ]);

    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    return csvContent;
}

/**
 * Convert data to XLSX format (simple XML-based)
 */
function convertToXLSX(data) {
    const headers = ['Name', 'Home', 'Mortgage', 'Income', 'Age', 'Family Status', 'Monthly Spend', 'Credit Score', 'Products Owned'];

    let xmlContent = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?>';
    xmlContent += '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
    xmlContent += '<Worksheet ss:Name="Population Data"><Table>';

    // Headers
    xmlContent += '<Row>';
    headers.forEach(header => {
        xmlContent += `<Cell><Data ss:Type="String">${header}</Data></Cell>`;
    });
    xmlContent += '</Row>';

    // Data rows
    data.forEach(person => {
        xmlContent += '<Row>';
        xmlContent += `<Cell><Data ss:Type="String">${person.name}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="String">${person.home ? 'Yes' : 'No'}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="String">${person.mortgage}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="Number">${person.income}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="Number">${person.age}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="String">${person.family}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="Number">${person.spend}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="Number">${person.credit}</Data></Cell>`;
        xmlContent += `<Cell><Data ss:Type="String">${person.products}</Data></Cell>`;
        xmlContent += '</Row>';
    });

    xmlContent += '</Table></Worksheet></Workbook>';
    return xmlContent;
}

/**
 * Trigger file download
 */
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Show download options dropdown
 */
function showDownloadOptions(event) {
    event.stopPropagation();

    // Remove existing dropdown if any
    const existingDropdown = document.querySelector('.download-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }

    const btn = event.currentTarget;
    const dropdown = document.createElement('div');
    dropdown.className = 'download-dropdown';
    dropdown.innerHTML = `
        <button class="download-option" data-format="csv">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            Download CSV
        </button>
        <button class="download-option" data-format="xlsx">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            Download Excel
        </button>
    `;

    // Find the wrapper and append the dropdown
    const wrapper = btn.closest('.download-button-wrapper');
    if (wrapper) {
        wrapper.appendChild(dropdown);
    } else {
        // Fallback if wrapper not found (shouldn't happen with correct HTML)
        document.body.appendChild(dropdown);
    }

    // Handle download clicks
    dropdown.querySelectorAll('.download-option').forEach(option => {
        option.addEventListener('click', () => {
            const format = option.dataset.format;
            const personaName = personas[currentSelectedPersona]?.name || 'Population';
            const timestamp = new Date().toISOString().slice(0, 10);

            if (format === 'csv') {
                const csv = convertToCSV(populationData);
                downloadFile(csv, `${personaName}_Data_${timestamp}.csv`, 'text/csv');
            } else if (format === 'xlsx') {
                const xlsx = convertToXLSX(populationData);
                downloadFile(xlsx, `${personaName}_Data_${timestamp}.xls`, 'application/vnd.ms-excel');
            }

            dropdown.remove();
        });
    });

    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown() {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }, { once: true });
    }, 10);
}

// Attach download handler
document.querySelector('.download-btn')?.addEventListener('click', showDownloadOptions);

// ----------------------------------------
// Initialize Application
// ----------------------------------------

function init() {
    // Populate tables
    populateCampaignTable();
    populatePopulationTablePaginated();

    // Generate USA map
    generateUSAMap();

    // Set initial persona details
    updatePersonaDetails('home-owners');

    // Initialize scatter data for default product
    currentScatterData = generateScatterData(scatterConfig.n, productConfig['heloc'].scatterSeed);

    console.log('OIQ Dashboard initialized successfully!');
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
