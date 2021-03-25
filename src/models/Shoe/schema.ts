import { loadSchema, GraphQLFileLoader, addResolversToSchema } from 'graphql-tools';
import resolvers from './resolvers';

export default async function createSchema() {
  const typeDefs = await loadSchema('./schema.graphql', {
    cwd: __dirname, // without ``
    assumeValid: true,
    assumeValidSDL: true,
    skipGraphQLImport: true,
    loaders: [new GraphQLFileLoader()],
  });

  const schema = await addResolversToSchema({ schema: typeDefs, resolvers });

  return schema;
}
export const schema = createSchema();
