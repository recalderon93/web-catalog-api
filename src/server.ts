import express, { application, Application, Request, Response } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import config from './config';
import loaders from './loaders';

export default async function startServer() {
  const app = express();
  await loaders({ expressApp: app });
  app.listen({ port: 4000 }, () => console.log('🚀 Server ready at http://localhost:4000'));
}
startServer();
