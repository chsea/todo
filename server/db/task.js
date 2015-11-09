'use strict';
const Sequelize = require('sequalize');

module.exports = db => {
  const Task = db.define('Task', {
    task: { type: Sequelize.STRING },
    complete: { type: Sequelize.BOOLEAN},
    estimatedTime: {type: Sequelize.INTEGER, field: 'estimated_time'},
    timeComplete: {type: Sequelize.DATE, field: 'time_complete'}
  });

  return Task;
};
