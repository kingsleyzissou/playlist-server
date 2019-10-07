import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import local from '../config/passport/local';
import jwt from '../config/passport/jwt';
import routes from '../api/routes';

export default async (app, passport) => {
  passport.use(local);
  passport.use(jwt);

  app.use(helmet());

  app.use(cors());

  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  app.use(bodyParser.json());

  routes(app, passport);
};
