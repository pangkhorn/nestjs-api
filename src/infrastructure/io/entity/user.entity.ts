import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 255 })
  username: string;

  @Column({ nullable: true, length: 255 })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ name: 'first_name', nullable: true, length: 255 })
  firstName?: string;

  @Column({ name: 'last_name', nullable: true, length: 255 })
  lastName?: string;

  @Column({ default: () => 'NOW()' })
  createdAt: Date;

  @Column({ default: () => 'NOW()', onUpdate: 'NOW()' })
  updatedAt: Date;
}
