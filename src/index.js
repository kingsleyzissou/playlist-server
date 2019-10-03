import express from 'express';
import server from './apollo/server';
import connect from './database/connect';
import config from './config';

const app = express();

connect();

server.applyMiddleware({ app });

const port = config.port || 4000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}${server.graphqlPath}`);
});