import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { timestamps } from './timestamps';

export class CreateTableWalletHolders1709286974868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        schema: 'public',
        name: 'wallet_holders',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'uuid', type: 'uuid', isUnique: true, isGenerated: true, generationStrategy: 'uuid' },
          { name: 'wallet_id', type: 'int' },
          { name: 'user_id', type: 'int' },
          { name: 'is_owner', type: 'boolean', default: false },
          ...timestamps
        ]
      })
    );
    await queryRunner.createIndices('wallet_holders', [
      new TableIndex({ columnNames: ['wallet_id'], name: 'IDX_WALLET_HOLDER_WALLET_ID' }),
      new TableIndex({ columnNames: ['user_id'], name: 'IDX_WALLET_HOLDER_USER_ID' })
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('wallet_holders');
    await queryRunner.dropIndices('wallet_holders', table.indices);
    await queryRunner.dropTable('wallet_holders');
  }
}
