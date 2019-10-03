import { gql } from 'apollo-server-express';

export default gql`

    extend type Query {
        artists: [Artist]
        artist(_id: String): Artist
    }

    type Artist {
        _id: String,
        name: String,
        songs: [Song]
    }

`;