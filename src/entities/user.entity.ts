import {
  BaseEntity,
  Entity,
  Column,
  ObjectIdColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ObjectID } from 'mongodb';

import { PostEntity } from './post.entity';
import { Profile } from './profile.entity';

@Entity('User')
export class User {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() email: string;

  @Column() age: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(
    type => PostEntity,
    posts => posts.user,
    { onDelete: 'CASCADE' },
  )
  posts: PostEntity[];

  @OneToOne(
    type => Profile,
    profile => profile.user,
  )
  @JoinColumn()
  profile: Profile;

  constructor(pet?: Partial<User>) {
    Object.assign(this, pet);
  }
}
