import mongoose from 'mongoose';
import populate from 'mongoose-autopopulate';

const { Schema } = mongoose;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    autopopulate: true,
  },
  genre: String,
  playcount: Number,
  favourite: Boolean,
});

songSchema.plugin(populate);

export default mongoose.model('Song', songSchema);
