import express from 'express';
import passport from 'passport';
import logger from './utilities/logger';
import servers from './servers';
import config from './config';

const app = express();

const server = {
  start: async () => {
    servers(app, passport, config);
    app.listen(config.port, () => {
      logger.info(
        `App started on http://localhost:${config.port}`,
      );
    });
  },
};

server.start();
