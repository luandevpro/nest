import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { PostEntity } from './entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/typeorm',
      useNewUrlParser: true,
      synchronize: false,
      logging: true,
      entities: [User, PostEntity, Profile],
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
