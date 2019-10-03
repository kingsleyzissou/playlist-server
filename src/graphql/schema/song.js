import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    songs: [Song],
    song(_id: String): Song,
  }

  type Song {
    _id: String,
    title: String,
    artist: Artist,
    genre: String,
    playcount: Int,
    favourite: Boolean
  }

`;
