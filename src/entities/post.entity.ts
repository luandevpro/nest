import {
  Entity,
  Column,
  ObjectIdColumn,
  ManyToOne,
  BaseEntity,
  ObjectID,
} from 'typeorm';

import { User } from './user.entity';

@Entity('Post')
export class PostEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @ManyToOne(
    type => User,
    user => user.posts,
    { onDelete: 'CASCADE' },
  )
  user: User;
}
