import { Controller, Get, Put, Post } from '@nestjs/common';


@Controller('api')
export class ApiController {

  @Get()
  getEndpoint(): string {
    return "get endpoint hit";
  }

  @Put()
  putEndpoint(): string {
    return "put endpoint hit";
  }

  @Post()
  posotEndpoint(): string {
    return "post endpoint hit";
  }
}
