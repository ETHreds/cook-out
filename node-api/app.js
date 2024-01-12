const express = require('express');
const app = express();
const { createAppMiddleware } = require('./SSRmiddleware');

// Use createAppMiddleware as middleware for the '/' route
app.get('/', createAppMiddleware);

module.exports = app;
