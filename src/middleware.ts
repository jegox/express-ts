import { Injectable } from '@decorators/di';
import { ErrorMiddleware } from '@decorators/express';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ServerErrorMiddleware implements ErrorMiddleware {
  public use(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    console.log({ error });
    next();
  }
}
