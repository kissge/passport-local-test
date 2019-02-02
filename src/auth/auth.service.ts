import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(name: string, password: string) {
    console.log('validateUser', { name, password });
    return await this.userService.findOneByName(name);
  }
}
