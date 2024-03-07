const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 

const app = express();

const mealsRouter = require('./routes/meals/meals.routes.js');
const usersRouter = require('./routes/users/users.routes.js');
const groupsRouter = require('./routes/groups/groups.routes.js');
  

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/meals', mealsRouter);
app.use(usersRouter);
app.use('/groups', groupsRouter);

module.exports = app;