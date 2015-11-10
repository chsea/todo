'use strict';
const Sequelize = require('sequelize');

// const hashPw = pw => {
//
// };

module.exports = db => {
  const User = db.define('user', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  }, {
    timestamps: false
  });

  // User.beforeCreate(user => {
  //
  // });
  return User;
};
