import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateActivities1604139732521
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activities',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
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
            name: 'timeupdated',
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
    await queryRunner.dropTable('activities');
  }
}
