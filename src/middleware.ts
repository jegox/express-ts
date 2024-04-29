import { Injectable } from '@decorators/di';
import { ErrorMiddleware } from '@decorators/express';
import { NextFunction } from 'express';

@Injectable()
class ServerErrorMiddleware implements ErrorMiddleware {
  public use(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    console.log({ error });
    next();
  }
}
