import song from '../models/song';
import artist from '../models/artist';
import playlist from '../models/playlist';

export default {

    Query: {
        songs: async () => 
            await song.find({}),
        song: async (_, { _id }) => 
            await song.findById({ _id }).populate(),
        artists: async () => 
            await artist.find({}),
        artist: async (_, { _id }) =>
            await artist.findById({ _id }).populate(),
        playlist: async (_, { _id }) =>
            await playlist.findById({ _id }).populate(),
        playlists: async () => 
            await playlist.find({}).exec()
    },

    Playlist: {
        songs: ({ songs }) => songs
    },

    Artist: {
        songs: ({ songs }) => songs
    },

    Song: {
        artist: ({ artist }) => artist
    }

};
