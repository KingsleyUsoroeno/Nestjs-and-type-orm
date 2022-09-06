import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddedCreatedAtToPostEntity1661845274142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user_posts ADD createdAt Date;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user_posts DROP COLUMN createdAt;`);
    }

}
