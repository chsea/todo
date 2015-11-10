'use strict';
const Sequelize = require('sequelize');

module.exports = db => {
  const List = db.define('list', {
    name: { type: Sequelize.STRING },
  }, {
    timestamps: false
  });

  return List;
};
