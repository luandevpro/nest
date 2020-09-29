import { Controller, Get, Redirect, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  getAll(): string {
    return this.usersService.getAll();
  }
}
