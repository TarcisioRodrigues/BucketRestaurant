import {MigrationInterface, QueryRunner, Table,TableForeignKey} from "typeorm";

export class SaveFilm1637893780678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
                  name: 'save_film',
                  columns: [
                    {
                      name: 'id',
                      type: 'uuid',
                      isPrimary: true,
                     
                    },
                  
                    {
                      name: 'user_id',
                      type: 'uuid',
                    },
                    {
                      name: 'film',
                      type: 'varchar',
                    },
                    {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                    },
                ],
                    foreignKeys: [
                        {
                          name: 'FKUserSenderFilm',
                          referencedTableName: 'users',
                          referencedColumnNames: ['id'],
                          columnNames: ['user_id'],
                          onDelete: 'SET NULL',
                          onUpdate: 'SET NULL',
                        },
                    ]
        
                }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('save_film');
    }

}
