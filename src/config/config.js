import envy from 'envy';
import path from 'path';

const root = path.resolve(__dirname, '../', '../');

const options = {
  root,
  public: path.join(root, '/public'),
  mongo: {
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

const config = { ...options, ...envy() };

export default config;
