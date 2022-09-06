import { MigrationInterface, QueryRunner } from "typeorm";

export class createBankerTable1662451734985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE bankers (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName Varchar(255) NULL,
                lastName Varchar(255) NULL,
                email Varchar(255) UNIQUE NOT NULL,
                employeeNumber Varchar(255) UNIQUE NOT NULL,
                createdAt timestamp not null default now(),
                updatedAt timestamp not null default now()
            );
        `);

        await queryRunner.query(`
            CREATE TABLE bankers_clients (
                bankerId  int,
                clientId  int
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bankers");
        await queryRunner.dropTable("bankers_clients");
    }
}
