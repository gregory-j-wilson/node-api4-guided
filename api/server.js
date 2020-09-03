const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.use('/greet/:name', (req, res) => {

    const greeting = process.env.GREETING || 'Hello';
    res.status(200).send(`<h1>${greeting} ${req.params.name}</h1>`);
    
})

module.exports = server;
