import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { timestamps } from './timestamps';

export class CreateTableUsers1709279883200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        schema: 'public',
        name: 'users',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'uuid', type: 'uuid', isUnique: true, isGenerated: true, generationStrategy: 'uuid' },
          { name: 'sub', type: 'uuid', isNullable: true },
          { name: 'username', type: 'varchar', isNullable: true },
          { name: 'email', type: 'varchar', isNullable: true },
          { name: 'first_name', type: 'varchar', isNullable: true },
          { name: 'last_name', type: 'varchar', default: null, isNullable: true },
          { name: 'password', type: 'varchar', isNullable: true },
          ...timestamps
        ]
      })
    );

    await queryRunner.createIndices('users', [
      new TableIndex({ columnNames: ['username'], name: 'IDX_USER_USERNAME' }),
      new TableIndex({ columnNames: ['email'], name: 'IDX_USER_EMAIL' }),
      new TableIndex({ columnNames: ['sub'], name: 'IDX_USER_SUB' })
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users');
    await queryRunner.dropIndices('users', table.indices);
    await queryRunner.dropTable('users');
  }
}
