import { artist } from '../../models';

export default {

  Query: {
    artists: async () => artist.find({}),
    artist: async (_, { _id }) => artist.findById({ _id }),
  },

  Artist: {
    songs: ({ songs }) => songs,
  },

};
