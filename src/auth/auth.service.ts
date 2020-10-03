import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from '../entities/user.entity';

import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userModel: Repository<User>,
    private jwtService: JwtService
  ) {}

  async login(user: CreateUserDto): Promise<any> {
    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<CreateUserDto> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
}
