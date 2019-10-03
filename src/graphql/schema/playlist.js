import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    playlists: [Playlist]
    playlist(_id: String): Playlist
  }

  type Playlist {
    _id: String,
    name: String,
    songs: [Song]
  }

`;
