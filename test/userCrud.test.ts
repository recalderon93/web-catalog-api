/* eslint-disable import/no-unresolved */
import express from 'express';
import { Server } from 'node:http';
import { UserInfo } from 'node:os';
import request, { Response } from 'supertest';
import loader from '../src/loaders';
import config from '../src/config';
import UserModel from '../src/models/User/user.model';

interface ResponseEdited extends Response {
  statusCode: number;
}

/** Initialization of the Express App */
const app = express();
let server: Server;

beforeAll(async () => {
  await loader({ expressApp: app });
  server = app.listen(4001, () => {
    console.log('test server');
  });
});
afterAll(async () => {
  await server.close();
});
describe('User Crud', () => {
  it('should pass', async () => {
    const user = await UserModel.create({
      firstName: 'Rafaele',
      lastName: 'Calderone',
      age: 20,
    });
    expect(user.firstName).toBe('Rafaele');
  });
  it('Query Data', async () => {
    const user = await UserModel.findAll();
    console.log(user);
    expect(user).toBeTruthy();
  });
});
