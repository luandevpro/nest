import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int } from '@nestjs/graphql';

import { PostDTO } from './post.dto';

@ObjectType('User')
@Relation('posts', () => [PostDTO], { disableRemove: true })
export class UserDTO {
  @FilterableField(() => Int)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  age!: number;

  @FilterableField()
  createdAt!: string;

  @FilterableField()
  updatedAt!: string;

  @FilterableField()
  isActive!: boolean;
}
