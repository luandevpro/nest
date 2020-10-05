import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getMongoRepository, DeleteResult } from 'typeorm';
import { ObjectID } from 'mongodb';

import { PostEntity } from '../entities/post.entity';

import { CreatePostDto } from '../dto/post.dto';

@Injectable()
export class PostsService {
  constructor() {}

  async getPosts(): Promise<any> {
    return await getMongoRepository(PostEntity).find({ relations: ['user'] });
  }

  async getPost(id: string): Promise<any> {
    return await getMongoRepository(PostEntity).findOne(id);
  }

  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    return await getMongoRepository(PostEntity).save(createPostDto);
  }

  async updatePost(id: string, createPostDto: CreatePostDto): Promise<any> {
    return await getMongoRepository(PostEntity).findOneAndUpdate(
      { _id: new ObjectID(id) },
      { ...createPostDto, id },
    );
  }

  async deletePost(id: string): Promise<any> {
    return await getMongoRepository(PostEntity).delete(id);
  }
}
