import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { timestamps } from './timestamps';

export class CreateTableWallets1709286957470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        schema: 'public',
        name: 'wallets',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'uuid', type: 'uuid', isUnique: true, isGenerated: true, generationStrategy: 'uuid' },
          { name: 'name', type: 'varchar', isNullable: true },
          { name: 'description', type: 'varchar', isNullable: true },
          { name: 'currency', type: 'varchar', isNullable: true, length: '16' },
          { name: 'balance', type: 'int', default: 0, isNullable: true },
          { name: 'income', type: 'int', default: 0, isNullable: true },
          { name: 'expense', type: 'int', default: 0, isNullable: true },
          ...timestamps
        ]
      })
    );
    await queryRunner.createIndices('wallets', [new TableIndex({ columnNames: ['name'], name: 'IDX_WALLET_NAME' })]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('wallets');
    await queryRunner.dropIndices('wallets', table.indices);
    await queryRunner.dropTable('wallets');
  }
}
