import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { timestamps } from './timestamps';

export class CreateTableTransactions1709287011848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        schema: 'public',
        name: 'transactions',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'uuid', type: 'uuid', isUnique: true, isGenerated: true, generationStrategy: 'uuid' },
          { name: 'wallet_id', type: 'int', isNullable: true },
          { name: 'currency', type: 'varchar', isNullable: true, length: '16' },
          { name: 'amount', type: 'int', isNullable: true },
          { name: 'type', type: 'varchar', isNullable: true, length: '32' },
          { name: 'remark', type: 'varchar', isNullable: true },
          { name: 'created_by', type: 'int', isNullable: true },
          ...timestamps
        ]
      })
    );
    await queryRunner.createIndices('transactions', [
      new TableIndex({ columnNames: ['wallet_id'], name: 'IDX_TRANSACTION_WALLET_ID' }),
      new TableIndex({ columnNames: ['type'], name: 'IDX_TRANSACTION_TYPE' }),
      new TableIndex({ columnNames: ['created_by'], name: 'IDX_TRANSACTION_CREATED_BY' })
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('transactions');
    await queryRunner.dropIndices('transactions', table.indices);
    await queryRunner.dropTable('transactions');
  }
}
