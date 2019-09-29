import express  from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './data/schema';
import resolvers from './data/resolvers';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port  = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on http:localhost:${port}`)
})