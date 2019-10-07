import Song from '../../models/song';

export default {

  Query: {
    songs: async () => Song.find({}).populate(),
    song: async (_, { _id }) => Song.findById({ _id }).populate(),
  },

  Song: {
    artist: ({ artist }) => artist,
  },

};
