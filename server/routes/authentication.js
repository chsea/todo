const _ = require('lodash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db').User;

const SESSION_SECRET = process.env.SESSION_SECRET || 'kobe24';

module.exports = app => {
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id).then(user => {
    done(null, user.get({ plain: true }));
  }));

  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ where: { username: username } }).then(user => {
      if (!user || !user.verifyPassword(password)) done(null, false);
      else done(null, user.get({ plain: true }));
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
        res.send({user: _.omit(user, 'salt', 'password')});
      });
    })(req, res, next);
  });

  app.get('/session', (req, res) => {
    if (req.user) res.send({user: _.omit(req.user, 'salt', 'password')});
    else res.status(401).send('No authenticated user.');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).end();
  });
};
