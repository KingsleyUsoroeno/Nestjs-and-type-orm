// import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
// import { TransactionType } from '../transactions/entities/transaction.entity';

// export class createTransactionTable1662324679262 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: 'transactions',
//                 columns: [
//                     {
//                         name: 'id',
//                         type: 'integer',
//                         isPrimary: true,
//                         isGenerated: true, // Auto-increment
//                         generationStrategy: 'increment',
//                     },

//                     {
//                         name: 'transactionType',
//                         type: 'varchar',
//                     },
//                     {
//                         name: 'amount',
//                         type: 'int',
//                     },
//                     {
//                         name: 'createdAt',
//                         type: 'timestamp',
//                         default: 'now()'
//                     },
//                     {
//                         name: 'updated',
//                         type: 'timestamp',
//                         default: 'now()'
//                     },
//                 ],
//                 // foreignKeys: [
//                 //     {
//                 //         columnNames: ["id"],
//                 //         referencedTableName: "clients",
//                 //         referencedColumnNames: ["id"],
//                 //     },
//                 // ]
//             })
//         );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("transactions");
//     }

// }
