const express = require('express')

const groupsController = require('../../controllers/groups/groups.controllers')

const groupsRouter =  express.Router()

groupsRouter.get('/', groupsController.listGroups)
groupsRouter.post('/', groupsController.createGroup)
groupsRouter.post('/join', groupsController.joinGroup)


module.exports = groupsRouter;