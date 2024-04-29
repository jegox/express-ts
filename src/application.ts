import express, { Application as ExApplication, Router } from 'express';
import { UserController } from './infrastructure/controllers';
import { attachControllers } from '@decorators/express';

class Application {
  private readonly _instance: ExApplication;
  private readonly _router: Router;

  get instance(): ExApplication {
    return this._instance;
  }

  constructor() {
    this._instance = express();
    this._router = express.Router();

    this._instance.use(express.json());
    this._instance.use('/api/v1', this._router);
    this.registerRouters();
  }

  private registerRouters() {
    attachControllers(this._router, [UserController]);
  }
}
export default new Application();
