import request, { Response } from 'supertest';

interface ResponseEdited extends request.Response {
  statusCode?: number;
}

export default () => {
  describe('Testing Express Server and GraphQL Server', () => {
    it('Testing Express server test Route', async () => {
      const res: ResponseEdited = await request('http://localhost:4001').get('/test');
      expect(res.statusCode).toEqual(200);
    });

    it('Testing that GraphQL is Running and accepting Queries', async done => {
      const res = await request('http://localhost:4001')
        .post('/graphql')
        .send({
          query: '{user}',
        })
        .set('Accept', 'application/json');
      expect(res.body.data.user).toBe('this is a user');
      done();
    });
  });
};
