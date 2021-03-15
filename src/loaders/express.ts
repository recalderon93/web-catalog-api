import { Application, Request, Response } from 'express';
import cors from 'cors';

export default ({ expressApp }: { expressApp: Application }) => {
  /** I shows the real origin IP in the heroku or Cloudwatch logs */
  expressApp.enable('trust proxy');
  expressApp.get('/test', (req: Request, res: Response) => {
    res.status(200).send('hello');
  });
  expressApp.use(cors());
};
