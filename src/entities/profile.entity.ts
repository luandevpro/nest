import { Entity, ObjectIdColumn, ObjectID, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @OneToOne(
    type => User,
    user => user.profile,
  ) // specify inverse side as a second parameter
  user: User;

  constructor(profile?: Partial<Profile>) {
    Object.assign(this, profile);
  }
}
