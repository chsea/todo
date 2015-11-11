const session = require('express-session');
const passport = require('passport');

const SESSION_SECRET = process.env.SESSION_SECRET || 'kobe24';

module.exports = app => {
  app.use(session({ secret: SESSION_SECRET }));

  
};
