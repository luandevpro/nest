import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from '../schemas/users.schema';

import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(id: String): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async updateUser(id: String, createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id: id }, createUserDto, {
      new: true,
      upsert: false,
      runValidators: true,
    });
  }

  async deleteUser(id: String): Promise<User> {
    return this.userModel.findOneAndRemove({ _id: id });
  }
}
