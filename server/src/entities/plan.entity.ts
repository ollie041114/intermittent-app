import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Plan extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() mon: boolean;
  @Column() tue: boolean;
  @Column() wed: boolean;
  @Column() thu: boolean;
  @Column() fri: boolean;
  @Column() sat: boolean;
  @Column() sun: boolean;
  @Column({ type: 'int', unsigned: true, default: 0 }) depositAmount: number;
  @Column({ type: 'int', unsigned: true, default: 0 }) hoursPerDay: number;
  @Column({ type: 'int', unsigned: true, nullable: false }) userId: number;

  @ManyToOne(() => User, {
    createForeignKeyConstraints: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
