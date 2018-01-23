const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./router');

//App SetUp
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server SetUp

const port = process.env.PORT || 3333;
const server = http.createServer(app);
server.listen(port);
/* eslint-disable */
console.log('Server is listening on', port);
