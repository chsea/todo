'use strict';
const Sequelize = require('sequalize');

// const hashPw = pw => {
//
// };

module.exports = db => {
  const User = db.define('User', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  });

  // User.beforeCreate(user => {
  //
  // });
  return User;
};
