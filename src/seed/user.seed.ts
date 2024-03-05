import { faker } from '@faker-js/faker';
import { Users } from '@infrastructures/io/entity';
import { Logger } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import { times } from 'lodash';
import { Command, CommandRunner, Option } from 'nest-commander';
import { EntityManager } from 'typeorm';

@Command({ name: 'users', description: 'Seed user' })
export class UserSeed extends CommandRunner {
  private readonly logger = new Logger(UserSeed.name);
  constructor(@InjectEntityManager() private readonly manager: EntityManager) {
    super();
  }

  @Option({ flags: '-n --number [number]', defaultValue: '10', description: 'Number of users that you want to seed' })
  parseNumber(val: string): number {
    return Number(val);
  }

  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    console.log('val===', passedParams, options);
    let numOfUsers = 10;
    if (+passedParams[0] && +passedParams[0] <= 100) {
      numOfUsers = +passedParams;
    }

    const users: Users[] = [];
    times(numOfUsers, () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      users.push({
        id: undefined,
        uuid: randomUUID(),
        firstName,
        lastName,
        username: faker.internet.userName({ firstName, lastName }),
        email: faker.internet.email({ firstName, lastName, provider: 'gmail.com' }),
        password: bcrypt.hashSync('admin123', 10)
      });
    });

    try {
      this.logger.debug('*** Start seed user ***');
      await this.manager.save(Users, users, { chunk: 20 });
      this.logger.debug(`Number of user created: ${users.length}`);
      this.logger.debug('*** End seed user ***');
    } catch (error) {
      console.error(error);
    }
  }
}
