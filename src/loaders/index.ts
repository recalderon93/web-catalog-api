import { Application, Request, Response } from 'express';
import cors from 'cors';
import graphqlLoader from './graphql';
import expressLoader from './express';

export default async ({ expressApp }: { expressApp: Application }) => {
  await expressLoader({ expressApp });
  await graphqlLoader({ app: expressApp });
};
