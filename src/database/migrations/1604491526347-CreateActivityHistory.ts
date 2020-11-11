import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateActivityHistory1604491526347
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'activity_history',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'body',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'timecreated',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'author_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'is_public',
            type: 'smallint',
            isNullable: false,
          },
          {
            name: 'contributors_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'is_expired',
            type: 'smallint',
            isNullable: false,
          },
          {
            name: 'version',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('activity_history');
  }
}
