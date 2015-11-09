'use strict';
const Sequelize = require('sequalize');

module.exports = db => {
  const List = db.define('List', {
    name: { type: Sequelize.STRING },
  });

  return List;
};
