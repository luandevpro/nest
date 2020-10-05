import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { User } from '../entities/user.entity';

import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor() {}

  async getUsers(): Promise<any> {
    return await getMongoRepository(User).find({
      join: {
        alias: 'post',
        innerJoinAndSelect: {
          posts: 'post.userId',
        },
      },
    });
  }

  async getUser(id: string): Promise<User> {
    return await getMongoRepository(User).findOne(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await getMongoRepository(User).save(createUserDto);
  }

  async updateUser(id: ObjectID, createUserDto: CreateUserDto): Promise<any> {
    return await getMongoRepository(User).findOneAndUpdate(
      {
        _id: new ObjectID(id),
      },
      { $set: createUserDto },
      { upsert: true },
    );
  }

  async deleteUser(id: ObjectID): Promise<any> {
    return await getMongoRepository(User).findOneAndDelete({
      _id: new ObjectID(id),
    });
  }
}
