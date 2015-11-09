'use strict';
var Sequelize = require('sequelize');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

var sequelize = new Sequelize(connectionString);

sequelize.authenticate().then(function() {
  console.log('Successfully connected to database');
}).catch(function(err) {
  console.log('Unable to connect to the database:', err);
});
