import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../../models/user';
import config from '../index';
import logger from '../../utilities/logger';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const strategy = new Strategy(
  options,
  async (payload, done) => {
    const user = await User.findById(payload._id)
      .catch((err) => logger.error(err));
    if (!user) return done(null, false);
    return done(null, user);
  },
);

export default strategy;
