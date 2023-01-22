import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientsAndTransactionsTable1662886845966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(` 
            CREATE TABLE clients (
            clientId INT PRIMARY KEY AUTO_INCREMENT,
            firstName Varchar(100) NULL,
            lastName Varchar(100) NULL,
            email Varchar(150) UNIQUE NOT NULL,
            balance int default 0,
            cardNumber Varchar(10) UNIQUE NOT NULL,
            isActive boolean default true,
            createdAt timestamp not null default now(),
            updatedAt timestamp not null default now()
            );`);

        await queryRunner.query(` 
                CREATE TABLE bankers (
                bankerId INT PRIMARY KEY AUTO_INCREMENT,
                firstName Varchar(100) NULL,
                lastName Varchar(100) NULL,
                email Varchar(150) UNIQUE NOT NULL,
                employeeNumber varchar(10) not null,
                createdAt timestamp not null default now(),
                updatedAt timestamp not null default now()
            );`);

        await queryRunner.query(`
                CREATE TABLE transactions (
                transactionId INT PRIMARY KEY AUTO_INCREMENT,
                amount int not null,
                transactionType Enum('deposit', 'withdrawal'),
                createdAt timestamp default now(),
                updatedAt timestamp default now(),
                clientId int,
                constraint FK_clientId_pk
                FOREIGN KEY (clientId) REFERENCES clients(clientId) on delete cascade
            );`);

        await queryRunner.query(
            `CREATE TABLE bankers_clients (
                bankerId INT,
                clientId INT,
                constraint FK_bankers_clients_bankerId_pk
                FOREIGN KEY (bankerId) REFERENCES bankers (bankerId) on delete cascade,
                constraint FK_bankers_clients_clientId_pk
                FOREIGN KEY (clientId) REFERENCES clients (clientId) on delete cascade
              );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
        await queryRunner.dropTable('bankers');
        await queryRunner.dropTable('transactions');
    }

}
