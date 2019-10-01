import mongoose from 'mongoose';
import populate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist:  {
        type: Schema.Types.ObjectId,
        ref:'Artist',
        autopopulate: true
    }
});

songSchema.plugin(populate);

const Song = mongoose.model('Song', songSchema);

export default Song;