const express = require('express')
const cors = require('cors')


const app = express()


const mealsRouter = require('./routes/meals.routes.js')

// Middleware
app.use(cors())

app.use('/meals', mealsRouter)



module.exports = app;