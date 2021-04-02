/* eslint-disable import/no-unresolved */
import Express from 'express';
import { Server } from 'node:http';
import loader from '../loaders';
import User from '../models/User/user.model';
import config from '../config/index';

const app = Express();
const env = process.env.NODE_ENV;
const port = process.env.PORT || 4000;
type StartServer = () => void;
type CloseServer = () => void;
type ServerInstance = Server | undefined;

interface customServer {
  start: StartServer;
  close: CloseServer;
}
type ServerFactory = (type?: string) => customServer;

const serverFactory: ServerFactory = (type?) => {
  let server: ServerInstance;

  const start = async () => {
    if (type === 'testing' || type === undefined) {
      if (type === 'testing' && type !== env) {
        throw new Error('Node Enviroment are not configured for a Test Server');
      }
      await config.db.sync();
      await loader({ expressApp: app });
      server = await app.listen(port, () => {
        console.log(`🚀 Server is running at http://localhost:${port}`);
      });
    } else {
      throw new Error('Invalid Server Type');
    }
  };
  const close = async () => {
    if (server) {
      try {
        await User.drop();
      } catch (error) {
        console.log(error.message);
      }
      server.close((err?: Error) => {
        if (err) {
          console.error(err.message);
        } else {
          // console.log('The server is closed');
        }
      });
    } else {
      console.log('Test Server did not start yet');
    }
  };
  return {
    start,
    close,
  };
};

export default serverFactory;
