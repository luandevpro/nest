import {
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { PostsService } from './posts.service';

import { PostEntity } from '../entities/post.entity';

import { CreatePostDto } from '../dto/post.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('posts')
  getPosts(): Promise<PostEntity[]> {
    return this.postsService.getPosts();
  }

  @Get('posts/:id')
  getPost(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.getPost(id);
  }

  @Post('posts')
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(createPostDto);
  }

  @Put('posts/:id')
  updatePost(
    @Param('id') id: string,
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.updatePost(id, createPostDto);
  }

  @Delete('posts/:id')
  deletePost(@Param('id') id: string): Promise<any> {
    return this.postsService.deletePost(id);
  }
}
