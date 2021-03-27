/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema, mergeSchemas, loadSchema, GraphQLFileLoader, addResolversToSchema } from 'graphql-tools';
import * as path from 'path';
import * as fs from 'fs';
import { GraphQLSchema } from 'graphql';

export default async ({ app }: { app: express.Application }) => {
  let folders = fs.readdirSync(path.join(__dirname, '../models'));
  /** Import dinamically all  */
  let importedSchemas: GraphQLSchema[] = await Promise.all(
    folders.map(folder => {
      let returnSchema = null;
      try {
        const schema = require(`../models/${folder}/graphql/schema.ts`).default;
        returnSchema = schema;
        return returnSchema;
      } catch (error) {
        folders = folders.filter(item => item !== folder);
      }
      return returnSchema;
    }),
  );

  importedSchemas = importedSchemas.filter(item => item !== null);

  const server = new ApolloServer({ schema: mergeSchemas({ schemas: importedSchemas }) });

  server.applyMiddleware({ app });
};
