import { Params, Controller, Get } from '@decorators/express';

@Controller('/user')
export class UserController {
  constructor() {}

  @Get('/:id')
  getData(@Params('id') id: number) {
    return { id, ok: 'success' };
  }
}
