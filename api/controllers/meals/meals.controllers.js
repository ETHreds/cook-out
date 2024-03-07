const { User } = require("../../models/users/users.mongo");
const { mapMeal } = require('../../services/meals.services');
const Meal = require('../../models/meals/meals.mongo');
const { getMealsByLocation, getMealDetails } = require("../../models/meals/meals.models");
const { getCountryByIP } = require('../../services/client.services');

async function getMeals(req, res) {
    try {
        let location = '';
        if (req.query.useClientIP =true) {
            const clientIP = "24.48.0.1";
            location = await getCountryByIP(clientIP);
            console.log('Loc 1: ', location);
        } else {
            // location = req.query.location || req.body.location ;
            console.log('loc 2', location);
        }

        if (!location) {
            throw new Error('Location not provided');
        }
        const meals = await getMealsByLocation(location);

        return res.json(meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getMeal(req, res) {
    try {
        const mealId = req.params.mealId;
        const mealDetails = await getMealDetails(mealId);
        res.json(mealDetails);
    } catch (error) {
        console.error('Error fetching meal details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function saveMeal(req, res, next) {
    try {
        // Authenticate the request
        authenticate(req, res, next);
        // Assuming mapMeal and Meal model are correctly imported
        const mealObject = await getMeal(req.params.mealId)
        console.log(mealObject)
        const mappedMeal = await mapMeal(mealObject);
        const existingMeal = await Meal.findOne({ idMeal: mappedMeal.idMeal });

        if (!existingMeal) {
            const newMeal = new Meal({
                idMeal: mappedMeal.idMeal,
                name: mappedMeal.name,
                category: mappedMeal.category,
                area: mappedMeal.area,
                instructions: mappedMeal.instructions,
                imageUrl: mappedMeal.imageUrl,
                tags: mappedMeal.tags,
                youtubeUrl: mappedMeal.youtubeUrl,
                ingredients: mappedMeal.ingredients
            });

            const savedMeal = await newMeal.save();
            console.log('Meal saved successfully:', savedMeal);

            // Get the username from the authenticated user
        //     const username = req.user.username;
        //     const user = await User.findById(username);

        //     if (!user) {
        //         return res.status(404).json({ message: 'User not found' });
        //     }

        //     // Add the saved meal to the user's savedMeals array
        //     user.savedMeals.push(savedMeal._id);
        //     await user.save();

        //     return res.status(201).json({ message: 'Meal saved successfully' });
        // } else {
            // Get the username from the authenticated user
            // const username = req.user.username;
            // const user = await User.findById(username);

            // if (!user) {
            //     return res.status(404).json({ message: 'User not found' });
            // }

            // // Add the saved meal to the user's savedMeals array
            // user.savedMeals.push(existingMeal._id);
            // await user.save();

            return res.status(201).json({ message: 'Meal saved successfully' });
        }
    } catch (error) {
        console.error('Error saving meal:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getMeals,
    getMeal,
    saveMeal
};
