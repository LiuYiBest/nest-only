import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @Header('Cache-Control', 'none')
  findAll(): any {
    return {
      message: 'Hello from cats controller',
      status: 200,
      data: ['cat1', 'cat2', 'cat3'],
      error: null,
    };
  }
}
