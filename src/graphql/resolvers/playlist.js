import { playlist } from '../../models';

export default {

  Query: {
    playlist: async (_, { _id }) => playlist.findById({ _id }),
    playlists: async () => playlist.find({}),
  },

  Playlist: {
    songs: ({ songs }) => songs,
  },

};
