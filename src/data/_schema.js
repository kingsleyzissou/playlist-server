// import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';


// // const PlaylistType = new GraphQLObjectType({
// //     name: 'Playlist',
// //     fields: () => ({
// //         id: { type: GraphQLString },
// //         name: { type: GraphQLString },
// //         genre: { type: GraphQLString }
// //     })
// // });

// // const ArtistType = new GraphQLObjectType({
// //     name: 'Artist',
// //     fields: () => ({
// //         id: { type: GraphQLString },
// //         name: { type: GraphQLString },
// //     })
// // });

// const songs =  [
//     {
//         id: 1,
//         title: 'Piano Sonata No. 3',
//         artist: 'Beethoven'
//     },
//     {
//         id: 2,
//         title: 'Piano Sonata No. 7',
//         artist: 'Beethoven'
//     },
//     {
//         id: 3,
//         title: 'Piano Sonata No. 10',
//         artist: 'Beethoven'
//     }
// ];

// const SongType = new GraphQLObjectType({
//     name: 'Song',
//     fields: () => ({
//         id: { type: GraphQLString },
//         title: { type: GraphQLString },
//     })
// });

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         song: {
//             type: SongType,
//             args: { id: { type: GraphQLString } },
//             resolve: (parent, args) => {
//                 return songs.filter(song => song.id == args.id);
//             }
//         }
//     }
// });

// export default new GraphQLSchema({
//     query: RootQuery
// });

export default {}

const typeDefs = gql`
    type Query {
        hello: String
    }
`;