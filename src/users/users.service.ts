import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';

import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userModel: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find({ relations: ['posts'] });
  }

  async getUser(id: number): Promise<User> {
    return this.userModel.findOne({ id: Number(id) });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.userModel.save({...createUserDto , password: hashedPassword });
  }

  async updateUser(id: number, createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.userModel.save({ ...createUserDto, password: hashedPassword ,id: Number(id) });
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.userModel.delete({ id: Number(id) });
  }
}
