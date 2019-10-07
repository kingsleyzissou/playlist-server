import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import logger from '../utilities/logger';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: Date,
  updated_at: Date,
});

userSchema.pre('save', (next) => {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 10);
  return next();
});

userSchema.methods.verifyPassword = (async (plain, cipher) => {
  const comparison = await bcrypt.compare(plain, cipher)
    .catch((err) => logger.error(err));
  return comparison;
});

export default mongoose.model('User', userSchema);
