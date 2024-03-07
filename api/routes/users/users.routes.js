const express = require('express')

const usersController = require('../../controllers/users/users.controllers')

const usersRouter =  express.Router()

usersRouter.post('/email-signin', usersController.signIn);
usersRouter.post('/email-signup', usersController.signUp)
usersRouter.get('/users', usersController.getAllUsers)

module.exports = usersRouter;