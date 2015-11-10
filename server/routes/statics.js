'use strict';
const express = require('express');
const path = require('path');

module.exports = app => {
  const browserPath = path.join(__dirname, '../../browser');
  const publicPath = path.join(__dirname, '../../public');
  const npmPath = path.join(__dirname, '../../node_modules');

  app.use(express.static(browserPath));
  app.use(express.static(publicPath));
  app.use(express.static(npmPath));
};
