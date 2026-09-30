import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enums/user-role.enum.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.NORMAL,
  })
  role: UserRole;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
