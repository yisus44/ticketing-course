import mongoose from 'mongoose';
import { Password } from '../services/password';

interface UserAttributes {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set('toJSON', {
  transform(doc: any, ret: any) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
    delete ret.password;
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }

  done();
});

const UserModel = mongoose.model('User', userSchema);

class User extends UserModel {
  constructor(attributes: UserAttributes) {
    super(attributes);
  }
}

export { User };
