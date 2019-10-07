import Playlist from '../../models/playlist';

export default {

  Query: {
    playlist: async (_, { _id }) => Playlist.findById({ _id }),
    playlists: async () => Playlist.find({}),
  },

  Playlist: {
    songs: ({ songs }) => songs,
  },

};
