const express = require('express');
const tasksRoutes = require('./routes/tasks_routes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use('/api/tasks', tasksRoutes);

// // error handling middleware
// app.use(errorHandler.errorHandler);

module.exports = app;

