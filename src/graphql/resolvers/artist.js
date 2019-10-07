import Artist from '../../models/artist';

export default {

  Query: {
    artists: async () => Artist.find({}),
    artist: async (_, { _id }) => Artist.findById({ _id }),
  },

  Artist: {
    songs: ({ songs }) => songs,
  },

};
