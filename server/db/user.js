'use strict';
module.exports = function(client) {
  var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) UNIQUE, password VARCHAR(20) NOT NULL, complete BOOLEAN)');

  query.on('end', function() {
    console.log('User table created.');
  });
};
