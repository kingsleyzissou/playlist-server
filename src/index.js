import express from 'express';
import mongoose from 'mongoose';
import server from './config/apollo';
// import connect from './config/connection';
import config from './config/config';
import logger from './config/logger';
import bootstrap from './config/express';

const app = express();
const port = config.port || 4000;

const connect = () => {
  mongoose.connect(config.dbHost, config.mongo.options);
  return mongoose.connection;
};

const listen = () => {
  if (app.get('env') === 'test') return;
  app.listen(port);
  logger.info(
    `App started on http://localhost:${port}`,
  );
};

const connection = connect();

bootstrap(app);

server.applyMiddleware({ app, path: '/graphql' });

connection
  .on('error', (err) => logger.error(err))
  .on('disconnected', connect)
  .on('open', listen);
