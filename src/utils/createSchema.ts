import { loadSchema, GraphQLFileLoader, addResolversToSchema, IResolvers } from 'graphql-tools';

export default async function createSchema(url: string, resolvers: IResolvers) {
  const typeDefs = await loadSchema(url, {
    assumeValid: true,
    assumeValidSDL: true,
    skipGraphQLImport: true,
    loaders: [new GraphQLFileLoader()],
  });
  const schema = addResolversToSchema({ schema: typeDefs, resolvers });
  return schema;
}
