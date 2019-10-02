import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        playlists: [Playlist]
        playlist(_id: String): Playlist,
        songs: [Song],
        song(_id: String): Song,
        artists: [Artist]
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
        artist: Artist,
        genre: String,
        playcount: Int,
        favourite: Boolean
    }

    type Artist {
        _id: String,
        name: String,
        songs: [Song]
    }
`;

