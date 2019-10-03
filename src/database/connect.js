import mongoose from  'mongoose';
import config from '../config';

export default () => {
    let options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(config.dbHost, options);
}



