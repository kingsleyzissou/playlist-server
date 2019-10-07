import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 4000,
  root: path.resolve(__dirname, '../', '../'),
  dbHost: process.env.DB_HOST,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
