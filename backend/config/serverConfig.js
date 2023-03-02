const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ssr = require('../middleware/ssr');
const sessionConfig = require('./sessionConfig');
const getUser = require('../middleware/getUser');

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);

  app.use(getUser);
};
module.exports = config;
