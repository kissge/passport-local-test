import { Get, Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test/1')
  test1(): string {
    return 'ok';
  }

  @Get('test/2')
  @UseGuards(AuthGuard('local'))
  test2(): string {
    return 'ok';
  }
}
