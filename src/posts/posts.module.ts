import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

import { PostsService } from './posts.service';

import { PostsController } from './posts.controller';

import { PostEntity } from '../entities/post.entity';

import { PostDTO } from '../dto/post.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PostEntity])],
      resolvers: [
        {
          DTOClass: PostDTO,
          EntityClass: PostEntity,
          enableSubscriptions: true,
          enableAggregate: true,
        },
      ],
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
