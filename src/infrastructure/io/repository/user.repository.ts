import { IUserRepository } from '@adaptors/repository';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entity';

@Injectable()
export class UsersRepository extends Repository<Users> implements IUserRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }
  findUsers(query: any): Promise<any[]> {
    return this.find({ where: {} });
  }
}
