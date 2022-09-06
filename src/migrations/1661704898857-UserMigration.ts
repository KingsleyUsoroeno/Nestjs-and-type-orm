import { MigrationInterface, QueryRunner } from "typeorm"

export class UserMigration1661704898857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("users", "username", "name");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("users", "name", "username");
    }
}