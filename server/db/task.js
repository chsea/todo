'use strict';
const Sequelize = require('sequelize');

module.exports = db => {
  const Task = db.define('task', {
    task: { type: Sequelize.STRING },
    complete: { type: Sequelize.BOOLEAN},
    estimatedTime: {type: Sequelize.INTEGER, field: 'estimated_time'},
    timeComplete: {type: Sequelize.DATE, field: 'time_complete'}
  }, {
    timestamps: false
  });

  return Task;
};
