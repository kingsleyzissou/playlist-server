import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        playlists: [Playlist]
        playlist(_id: String): Playlist,
        song(_id: String): Song,
        artist(_id: String): Artist
    }

    type Playlist {
        _id: String,
        name: String,
        songs: [Song]
    }

    type Song {
        _id: String,
        title: String,
        artist: Artist
    }

    type Artist {
        _id: String,
        name: String,
        songs: [Song]
    }
`;

