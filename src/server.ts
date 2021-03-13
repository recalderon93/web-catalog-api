import express, { Application, Request, Response } from 'express';
import config from './config';
import loaders from './loaders/express';

async function startServer() {
  const app: Application = express();
  await loaders({ expressApp: app });
  app.listen(config.port, () => {
    console.log(`Message ${config.port}`);
  });
}

startServer();
