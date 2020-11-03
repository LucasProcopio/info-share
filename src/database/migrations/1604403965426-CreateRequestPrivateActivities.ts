import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRequestPrivateActivities1604403965426
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'request_private_activities',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'authorid',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'userid',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'accepted',
            type: 'smallint',
            isNullable: false,
          },
          {
            name: 'timecreated',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('request_private_activities');
  }
}
