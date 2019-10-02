import express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './data/schema';
import resolvers from './data/resolvers';

// import Artist from './models/artist';
// import Song from './models/song';

const app = express();

const host = 'mongodb://localhost:27017/playlist';

mongoose.connect(host, { 
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

mongoose.connection.once('open', () => console.log(`Connected to mongo at ${host}`));

app.use(bodyParser.json({ type: 'application/json' }));

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}${server.graphqlPath}`);
});