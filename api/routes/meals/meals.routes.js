const express = require('express')

const mealsController = require('../../controllers/meals/meals.controllers')

const  { authenticate } = require('../../services/auth.services')

const mealsRouter =  express.Router()

mealsRouter.get('/', mealsController.getMeals)
mealsRouter.get('/:mealId', mealsController.getMeal)
mealsRouter.post('/:mealId', authenticate, mealsController.saveMeal )

module.exports = mealsRouter;