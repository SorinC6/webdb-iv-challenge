const express = require('express');
const helmet = require('helmet');

//routes import - nothing for now

const server = express();
server.use(helmet());
server.use(express.json());

//server.use(routes)

module.exports = server;
