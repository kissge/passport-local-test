import { Get, Post, Controller, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Req() req): string {
    req.login(req.body, (error) => {
      if (error) {
        throw error;
      }
    });

    return 'ok';
  }

  @Get('test/1')
  test1(@Req() req): string {
    console.log(req.user);
    return 'ok';
  }

  @Get('test/2')
  @UseGuards(AuthGuard)
  test2(): string {
    return 'ok';
  }
}
