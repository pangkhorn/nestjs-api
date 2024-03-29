import { IUserRepository } from '@adaptors/repository';
import { Injectable } from '@nestjs/common';
import { IListUserRepoQuery, IListUserRepoResponse } from '@shares/type/user.interface';
import { fromOrder, fromPaginate } from '@utilities/paginate.utility';
import { DataSource, FindManyOptions, ILike, Repository } from 'typeorm';
import { Users } from '../entity';

@Injectable()
export class UsersRepository extends Repository<Users> implements IUserRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }
  async findUsers(query: IListUserRepoQuery): Promise<IListUserRepoResponse> {
    const { page, size, skip, take } = fromPaginate({ page: query.page, size: query.size });
    const { orderBy, sortBy } = fromOrder(query.sort, {
      defaultOrder: 'DESC',
      defaultSort: 'createdAt',
      allowFieldSorts: ['createdAt', 'updatedAt', 'email', 'firstName', 'lastName']
    });

    const findOptions: FindManyOptions<Users> = {
      where: query.keyword
        ? [
            { firstName: ILike(`%${query.keyword}%`) },
            { lastName: ILike(`%${query.keyword}%`) },
            { email: ILike(`%${query.keyword}%`) }
          ]
        : {}
    };

    const [users, total] = await this.findAndCount({
      select: ['id', 'uuid', 'email', 'firstName', 'lastName', 'createdAt', 'updatedAt'],
      ...findOptions,
      take,
      skip,
      order: { [sortBy]: orderBy }
    });
    return { total, page, size, users };
  }
}
