/* eslint-disable import/no-unresolved */
import express from 'express';
import { Server } from 'node:http';
import request, { Response } from 'supertest';
import loader from '../src/loaders/express';

interface ResponseEdited extends Response {
  statusCode: number;
}

/** Initialization of the Express App */
const app = express();
let server: Server;

beforeEach(async () => {
  await loader({ expressApp: app });
  server = app.listen(8000, () => {
    console.log('Mock Up server');
  });
});
afterEach(() => {
  server.close();
});
describe('Should recive 200 status', () => {
  it('should pass', async () => {
    const res = await request('http://localhost:8000').get('/test');
    /** @ts-ignore, statusCode is not defined inside of request.Response type */
    expect(res.statusCode).toEqual(200);
  });
});
