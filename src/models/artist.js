import mongoose from 'mongoose';
import populate from 'mongoose-autopopulate';

const { Schema } = mongoose;

const artistSchema = new Schema({
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

artistSchema.plugin(populate);

export default mongoose.model('Artist', artistSchema);
