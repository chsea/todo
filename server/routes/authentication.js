const _ = require('lodash');
const session = require('express-session');
const passport = require('passport');
const User = require('../db/user.js');

const SESSION_SECRET = process.env.SESSION_SECRET || 'kobe24';

module.exports = app => {
  app.use(session({ secret: SESSION_SECRET }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id, done));

  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }).then((user) => {
      if (!user || !user.verifyPassword(password)) done(null, false);
      else done(null, user);
    }).then(null, done);
  }));

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);

      if (!user) {
        let error = new Error('Invalid login credentials.');
        error.status = 401;
        return next(error);
      }

      req.logIn(user, err => {
        if (err) return next(err);
        res.send(_.omit(user.toJSON(), ['password', 'salt']));
      });
    });
  });

  app.get('/session', (req, res) => {
    if (req.user) res.json(_.omit(req.user, ['password', 'salt']));
    else res.status(401).send('No authenticated user.');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).end();
  });
};
