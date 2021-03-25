import * as path from 'path';
import createSchema from '../../../utils/createSchema';
import resolvers from './resolvers';

const schema = createSchema(path.join(__dirname, './schema.graphql'), resolvers);

export default schema;
