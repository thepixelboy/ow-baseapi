import request from 'supertest';
import app from '../app';

describe('healthCheckControllerTest', () => {
  describe('check health status test', () => {
    it('GET /healthCheck should return the API status', async () => {
      const apiResponse = await request(app).get('/healthCheck').send();
      expect(apiResponse.status).toBe(200);
      expect(apiResponse.body.status).toBe(`I'm Alive`);
    });
  });
});
