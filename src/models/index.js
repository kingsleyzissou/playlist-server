import Playlist from './playlist';
import Artist from './artist';
import Song from './song';
import User from './user';

const models = [
  { name: 'user', model: User },
  { name: 'playlist', model: Playlist },
  { name: 'artist', model: Artist },
  { name: 'song', model: Song },
];

export default models;
