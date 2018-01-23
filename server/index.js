const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();

//Mongo Setup
mongoose.connect('mongodb://localhost/auth');

//App SetUp
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server SetUp
const port = process.env.PORT || 3333;
const server = http.createServer(app);
server.listen(port);

/* eslint-disable */
console.log(
  `==> 🌎 Listening on port ${port}. \n` +
    `Open up http://localhost:${port}/ in your browser.`
);
