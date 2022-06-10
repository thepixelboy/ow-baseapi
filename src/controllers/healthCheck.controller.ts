import { HealthCheckService } from '../services/healthCheck.service';
import { Request, Response } from 'express';

export class HealthCheckController {
  private healthCheckService: HealthCheckService;

  constructor() {
    this.healthCheckService = new HealthCheckService();
  }

  public checkHealth = (req: Request, res: Response) => {
    const apiStatus = this.healthCheckService.checkHealth();
    return res.status(200).send(apiStatus);
  };
}
