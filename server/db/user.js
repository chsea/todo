'use strict';
const Sequelize = require('sequelize');
const crypto = require('crypto');

const generateSalt = () => crypto.randomBytes(16).toString('base64');
const hashPassword = (plainText, salt) => {
    let hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

module.exports = db => {
  const User = db.define('user', {
    name: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    salt: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  }, {
    timestamps: false
  });

  User.beforeCreate(user => {
    user.salt = generateSalt();
    user.password = hashPassword(user.password, user.salt);
  });

  return User;
};
