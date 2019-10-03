import mongoose from 'mongoose';
import populate from 'mongoose-autopopulate';

const { Schema } = mongoose;

const playlistSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Song',
      autopopulate: true,
    },
  ],
});

playlistSchema.plugin(populate);

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
