import {
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';

import { LocalAuthGuard } from './guards/local.guard';

import { JwtAuthGuard } from './guards/jwt.guard';

import { AuthService } from './auth.service';
import { UsersService } from "../users/users.service";

import { User } from '../entities/user.entity';

import { CreateUserDto } from '../dto/user.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<User[]> {
    return this.authService.login(req.user);
  }

  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }
 
}
