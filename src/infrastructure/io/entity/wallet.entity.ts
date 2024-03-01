import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamps } from './timestamps.entity';

@Entity({ name: 'wallets' })
export class Wallets extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column({ name: 'uuid' })
  uuid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  currency: string;

  @Column({ default: 0 })
  balance: number;

  @Column({ default: 0 })
  income: number;

  @Column({ default: 0 })
  expense: number;
}
