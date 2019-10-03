import song from '../../models/song';

export default {

    Query: {
        songs: async () => 
            await song.find({}),
        song: async (_, { _id }) => 
            await song.findById({ _id })
    },

    Song: {
        artist: ({ artist }) => artist
    }

};
