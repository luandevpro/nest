import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { PostEntity } from '../entities/post.entity';

import { CreatePostDto } from '../dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postModel: Repository<PostEntity>,
  ) {}

  async getPosts(): Promise<PostEntity[]> {
    return this.postModel.find({ relations: ['user'] });
  }

  async getPost(id: string): Promise<PostEntity> {
    return this.postModel.findOne(id);
  }

  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    console.log(createPostDto);
    return this.postModel.save(createPostDto);
  }

  async updatePost(
    id: string,
    createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postModel.save({ ...createPostDto, id });
  }

  async deletePost(id: string): Promise<DeleteResult> {
    return this.postModel.delete(id);
  }
}
