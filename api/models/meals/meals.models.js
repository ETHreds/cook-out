const axios = require('axios');

const getMealsByLocation = async (location) => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${location}`;

        const response = await axios.get(url);

        return response.data.meals;
    } catch (error) {
        console.error('Error fetching meals by location:', error);
        throw error;
    }
};
const getMealDetails = async (mealId) => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const response = await axios.get(url);
        return response.data.meals[0]
    } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching meal details:', error);
        throw error; // Re-throw the error to be handled further up the call stack if necessary
    }
};

module.exports = {
    getMealsByLocation,
    getMealDetails
};
