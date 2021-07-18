import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { app } from './app';

async function start() {
  console.log('starting up...');

  try {
    process.env.JWT_KEY = 'secret';
    if (!process.env.JWT_KEY) {
      throw new Error('JWT KEY INVALID OR NONEXISTENT');
    }
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to mongodb');
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, function () {
      console.log('Server up and running on port 3001!!');
    });
  } catch (error) {
    console.error(error);
  }
}

start();
