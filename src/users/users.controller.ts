import {
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
  Body,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { User } from '../entities/user.entity';

import { CreateUserDto } from '../dto/user.dto';

import { ValidationPipe } from '../pipes/users.pipes';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get('users/:id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @UsePipes(ValidationPipe)
  @Post('users')
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Put('users/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: number): Promise<any> {
    return this.usersService.deleteUser(id);
  }
}
