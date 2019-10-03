import artist from '../../models/artist';

export default {

    Query: {
        artists: async () => 
            await artist.find({}),
        artist: async (_, { _id }) =>
            await artist.findById({ _id })
    },

    Artist: {
        songs: ({ songs }) => songs
    }

};
