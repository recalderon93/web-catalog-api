import dotenv from 'dotenv';
import dbCreator from './database';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('⚠️  Could not find .env file  ⚠️');
}
const dbData = {
  database: process.env.POSTGRES_DB ? process.env.POSTGRES_DB : '',
  username: process.env.POSTGRES_USER ? process.env.POSTGRES_USER : '',
  password: process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : '',
};
export default {
  port: process.env.PORT ? parseInt(process.env.PORT!, 10) : 3000,
  db: dbCreator({ ...dbData }),
};
