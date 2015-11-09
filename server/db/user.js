'use strict';
const Sequelize = require('sequalize');

module.exports = db => {
  return db.define('User', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  });
};
