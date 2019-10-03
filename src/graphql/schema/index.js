import { gql } from 'apollo-server-express';
import playlistSchema from './playlist';
import artistSchema from './artist';
import songSchema from './song';

const schema = gql`

  type Query {
    hello: String
  }

`;

export default [schema, songSchema, artistSchema, playlistSchema];
