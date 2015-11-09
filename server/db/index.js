'use strict';
const Sequelize = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

let sequelize = new Sequelize(connectionString);

sequelize.authenticate()
  .then(() => console.log('Successfully connected to database'))
  .catch(err => console.log('Unable to connect to the database:', err));

const User = require('./user')(sequelize);
const List = require('./list')(sequelize);
const Task = require('./task')(sequelize);

User.hasMany(List);
List.belongsTo(User);
List.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  User: User,
  List: List,
  Task: Task
};
