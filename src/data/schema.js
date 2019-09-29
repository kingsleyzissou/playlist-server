import { gql } from 'apollo-server-express';

export default gql`
    type Query {
        hello: String,
        song(id: Int!): Song,
        artist(id: Int!): Artist
    }

    type Song {
        id: Int!,
        title: String,
        artist: Artist
    }

    type Artist {
        id: Int!,
        name: String,
        songs: [Song]
    }
`;

