const express = require('express')

const mealsController = require('../controllers/meals.controllers')

const mealsRouter =  express.Router()

mealsRouter.get('/', mealsController.getMeals)
mealsRouter.get('/:mealId', mealsController.getMeal)

module.exports = mealsRouter;