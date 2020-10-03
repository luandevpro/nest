import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { User } from '../entities/user.entity';

import { AuthService } from './auth.service';
import { UsersService } from "../users/users.service";

import { AuthController } from './auth.controller';

import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: "luandev",
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, UsersService ,LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
