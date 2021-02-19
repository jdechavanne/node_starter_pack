const express = require('express');
const morgan = require('morgan');

const app = express();

// MIDDLEWARES
//console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

module.exports = app;
