import { HealthCheckController } from '../controllers/healthCheck.controller';
import express from 'express';

export class HealthCheckRoute {
  private healthCheckController: HealthCheckController;
  constructor() {
    this.healthCheckController = new HealthCheckController();
  }

  public routes(app: express.Application) {
    app.route('/healthCheck').get(this.healthCheckController.checkHealth);
  }
}
