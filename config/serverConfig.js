/* eslint-disable import/no-absolute-path */
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const getUser = require('../middlewar/getUser');
const reactSSR = require('../middlewar/reactSSR');

const sessionConfig = require('./sessionConfig');

module.exports = function configApp(app) {
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static('public'));
  app.use(reactSSR);
  app.use(getUser);
};
