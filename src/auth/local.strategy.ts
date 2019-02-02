import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, password: string) {
    console.log('validate');
    const user = await this.authService.validateUser(name, password);

    // todo: check password here maybe

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
