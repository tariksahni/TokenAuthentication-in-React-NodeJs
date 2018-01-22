const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//App SetUp

//Server SetUp

const port = process.env.PORT || 3333;
const server = http.createServer(app);
server.listen(port);
/* eslint-disable */
console.log('Server is listening on', port);
