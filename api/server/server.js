const express = require('express');
const helmet = require('helmet');

//routes import - nothing for now
const dishesRouters = require('../routes/dish-router');
const recipesRoutes = require('../routes/recipe-router');

const server = express();
server.use(helmet());
server.use(express.json());

//server.use(routes)
server.use('/api/dishes', dishesRouters);
server.use('/api/recipes', recipesRoutes);

module.exports = server;
