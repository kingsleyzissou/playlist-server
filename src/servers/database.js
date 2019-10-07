import mongoose from 'mongoose';

const connect = async ({ config }) => {
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(config.dbHost, options);
};

export default connect;
