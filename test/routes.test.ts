import startServer from '../src/utils/startServer';
import testModules from './testModules';

const server = startServer('testing');

beforeAll(() => server.start());

testModules.expressServerTest();
testModules.userCrud();

afterAll(() => server.close());
