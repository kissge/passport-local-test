import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { Serializer } from './auth.serializer';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthGuard, AuthService, LocalStrategy, Serializer],
})
export class AuthModule {}
