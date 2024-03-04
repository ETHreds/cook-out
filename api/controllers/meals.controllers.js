const { getMealsByLocation,getMealDetails } = require("../models/meals.models");
const { getCountryByIP } = require('../services/clientLocation.service');

async function getMeals(req, res) {
    try {
        let location = '';
       

        if (req.query.useClientIP=true) {
            const clientIP = "24.48.0.1"; 
            location = await getCountryByIP(clientIP)
            console.log('Loc 1: ', location)
        } else {
            // location = req.query.location || req.body.location ;
            console.log('loc 2', location)
        }
    
        if (!location) {
            throw new Error('Location not provided');
        }
        const meals = await getMealsByLocation(location);
    
        return res.json(meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
        res.status(500).json({ error: 'Internal Server Error afhof ioueaioe ' });
    }
}

async function getMeal(req, res) {
    mealId = req.params.mealId
    const mealDetails = await getMealDetails(mealId)
    res.json(mealDetails)
    
}

module.exports = {
    getMeals,
    getMeal
};
