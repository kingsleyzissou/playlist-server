import Strategy from 'passport-local';
import User from '../../models/user';

const login = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    session: false,
  },
  async (username, password, done) => {
    const user = await User.findOne({ username })
      .catch((err) => done(err));
    if (!user) return done(null, false);
    const verified = user.verifyPassword(password, user.password);
    if (!verified) return done(null, false);
    return done(null, user);
  },
);

export default login;
