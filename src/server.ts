import express, { application, Application, Request, Response } from 'express';
import config from './config';
import loaders from './loaders/express';

export default async function startServer() {
  const app: Application = express();
  loaders({ expressApp: app });
  app.listen(config.port, () => {
    console.log(`📡📡 Express server is Running on PORT: ${config.port}`);
  });
}
startServer();
