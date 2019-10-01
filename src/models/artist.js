import mongoose from 'mongoose';
import populate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Song',
            autopopulate: true
        }
    ]
});

artistSchema.plugin(populate);

const Artist = mongoose.model('Artist', artistSchema);

export default Artist;