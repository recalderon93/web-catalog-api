import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('⚠️  Could not find .env file  ⚠️');
}

export default {
  port: process.env.PORT ? parseInt(process.env.PORT!, 10) : 3000,
};
