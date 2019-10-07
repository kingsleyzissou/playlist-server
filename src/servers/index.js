import express from './express';
import apollo from './apollo';
import connect from './database';

const loader = async (app, passport, config) => {
  await connect({ config });
  await express(app, passport);
  apollo.applyMiddleware({ app, path: '/graphql' });
};

export default loader;
