import { song } from '../../models';

export default {

  Query: {
    songs: async () => song.find({}).populate(),
    song: async (_, { _id }) => song.findById({ _id }).populate(),
  },

  Song: {
    artist: ({ artist }) => artist,
  },

};
