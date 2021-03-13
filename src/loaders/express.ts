import { Application } from 'express';
import cors from 'cors';
import config from '../config';

export default ({ expressApp }: { expressApp: Application }) => {
  /** I shows the real origin IP in the heroku or Cloudwatch logs */
  expressApp.enable('trust proxy');

  expressApp.use(cors());
};
