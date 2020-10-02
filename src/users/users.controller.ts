import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UsersService } from './users.service';

import { UserEntity } from '../entities/user.entity';

@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    join: {
      posts: {
        eager: true,
      },
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) {}
}
