import jwt from 'jsonwebtoken';
import config from '../../config';

export default ((app, passport) => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello world' });
  });

  app.get('/login', (req, res) => {
    res.send({ message: 'Cool beans' });
  });

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return next(err);
      if (!user) res.send({ message: 'Failed to sign in' });
      const token = jwt.sign(user.toJSON(), config.jwtSecret);
      return res.status(201)
        .send({ message: 'Success', user, token });
    })(req, res, next);
  });

  app.get('/paywall', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) return next(err);
      return res.status(201)
        .send({ message: 'Success', user });
    })(req, res, next);
  });
});
