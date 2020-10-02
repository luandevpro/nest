import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Crud, CrudController } from '@nestjsx/crud';

import { PostEntity } from '../entities/post.entity';

@Crud({
  model: {
    type: PostEntity,
  },
  query: {
    join: {
      user: {
        eager: true,
      },
    },
  },
})
@Controller('posts')
export class PostsController implements CrudController<PostEntity> {
  constructor(public service: PostsService) {}
}
