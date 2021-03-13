import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.listen(8000, () => {
  console.log('Server is running');
});
