import { HealthCheckService } from './healthCheck.service';

describe('healthCheckTest', () => {
  describe('checkHealthTest', () => {
    it('should return a status', () => {
      const healthCheckService = new HealthCheckService();
      const checkHealthSpy = jest.spyOn(healthCheckService, 'checkHealth');
      const expectedResult = { status: `I'm Alive` };
      expect(healthCheckService.checkHealth()).toEqual(expectedResult);
      expect(checkHealthSpy).toBeCalled();
      expect(checkHealthSpy).toHaveBeenCalledTimes(1);
    });
  });
});
