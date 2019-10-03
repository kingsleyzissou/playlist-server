import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import config from './config';

export default (app) => {
  app.use(helmet());

  app.use(express.static(config.public));

  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  app.use(bodyParser.json());
};
