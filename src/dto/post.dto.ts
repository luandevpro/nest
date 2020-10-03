import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

import { UserDTO } from './user.dto';

@ObjectType('Post')
@Relation('user', () => UserDTO, { disableRemove: true })
export class PostDTO {
  @FilterableField(() => String)
  id!: string;

  @FilterableField()
  title!: string;

  @FilterableField()
  description!: string;

  @FilterableField()
  createdAt!: string;

  @FilterableField()
  updatedAt!: string;

  @FilterableField()
  userId!: number;
}
