import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true }) id: number;
  @Column({ type: 'varchar', length: 50 }) email: string;
  @Column() name: string;
  @Column({ type: 'varchar', length: 11 }) password: string;
}
