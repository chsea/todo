'use strict';
const Sequelize = require('sequalize');

module.exports = db => {
  return db.define('List', {
    name: { type: Sequelize.STRING },
  });
};
