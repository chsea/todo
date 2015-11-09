'use strict';
const Sequelize = require('sequalize');

module.exports = db => {
  return db.define('Task', {
    task: { type: Sequelize.STRING },
    complete: { type: Sequelize.BOOLEAN}
  });
};
