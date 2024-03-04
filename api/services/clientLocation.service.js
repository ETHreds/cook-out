const axios = require('axios');
const countryToNationalityMapping = {
    "United States": "American",
    "United Kingdom": "British",
    "Canada": "Canadian",
    "China": "Chinese",
    "Croatia": "Croatian",
    "Netherlands": "Dutch",
    "Egypt": "Egyptian",
    "Philippines": "Filipino",
    "France": "French",
    "Greece": "Greek",
    "India": "Indian",
    "Ireland": "Irish",
    "Italy": "Italian",
    "Jamaica": "Jamaican",
    "Japan": "Japanese",
    "Kenya": "Kenyan",
    "Malaysia": "Malaysian",
    "Mexico": "Mexican",
    "Morocco": "Moroccan",
    "Poland": "Polish",
    "Portugal": "Portuguese",
    "Russia": "Russian",
    "Spain": "Spanish",
    "Thailand": "Thai",
    "Tunisia": "Tunisian",
    "Turkey": "Turkish",
    "Vietnam": "Vietnamese"
};


async function getCountryByIP (clientIP) {
    try {
        const url = `http://ip-api.com/json/${clientIP}`;
        const response = await fetch(url);
        const data = await response.json();
        const country = data.country;

        const nationality = countryToNationalityMapping[country];

        if (!nationality) {
            // If nationality not found, return a message
            const countries = Object.keys(countryToNationalityMapping);
            const randomCountryIndex = Math.floor(Math.random() * countries.length);
            const randomCountry = countries[randomCountryIndex];
            return {
                "message": "Recipe not "
            }
        }


        return nationality;
    } catch (error) {
        console.error('Error retriving the country:', error);
        throw error;
    }
};

module.exports = {
    getCountryByIP
};
