import playlist from '../../models/playlist';

export default {

    Query: {
        playlist: async (_, { _id }) =>
            await playlist.findById({ _id }),
        playlists: async () => 
            await playlist.find({})
    },

    Playlist: {
        songs: ({ songs }) => songs
    }

};
