import supertest, { Response } from 'supertest';

declare global {
  type Shoe = {
    name: String;
    model: String;
    color: String;
  };

  interface ResponseEdited extends Response {
    statusCode: number;
  }
  interface UserInstance {
    userData: UserData;
    updateData: void;
  }
}
