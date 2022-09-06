import { MigrationInterface, QueryRunner } from "typeorm";

export class createClientsAndTransactionsTable1662447086383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE clients (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                firstName Varchar(255) NULL,
                lastName Varchar(255) NULL,
                email Varchar(255) UNIQUE NOT NULL,
                balance int not null default 0,
                cardNumber VARCHAR(10) UNIQUE NOT NULL,
                isActive boolean not null default true,
                createdAt timestamp not null default now(),
                updatedAt timestamp not null default now()
            );
        `);

        await queryRunner.query(`
            CREATE TABLE transactions (
                id INT PRIMARY KEY AUTO_INCREMENT,
                transactionType ENUM('deposit', 'withdrawal') NOT NULL,
                amount int NOT NULL,
                createdAt timestamp not null default now(),
                updatedAt timestamp not null default now(),
                clientId INT,
                FOREIGN KEY (clientId) REFERENCES clients(id)
            );
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
        await queryRunner.dropTable("transactions");
    }

}
