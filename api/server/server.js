const express = require('express');
const helmet = require('helmet');

//routes import - nothing for now
const dishesRouters = require('../routes/dish-router');

const server = express();
server.use(helmet());
server.use(express.json());

//server.use(routes)
server.use('/api/dishes', dishesRouters);

module.exports = server;
