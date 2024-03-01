import { IUserRepository } from '@adaptors/repository';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity';

@Injectable()
export class UsersRepository extends Repository<User> implements IUserRepository {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  findUsers(query: any): Promise<any[]> {
    return this.find({ where: {} });
  }
}
