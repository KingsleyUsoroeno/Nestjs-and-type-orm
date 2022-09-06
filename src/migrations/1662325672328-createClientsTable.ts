// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class createClientsTable1662325672328 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: 'clients',
//                 columns: [
//                     {
//                         name: 'id',
//                         type: 'integer',
//                         isPrimary: true,
//                         isGenerated: true, // Auto-increment
//                         generationStrategy: 'increment',
//                     },
//                     {
//                         name: 'firstName',
//                         type: 'varchar',
//                     },
//                     {
//                         name: 'lastName',
//                         type: 'varchar',
//                     },
//                     {
//                         name: 'email',
//                         type: 'varchar',
//                         isUnique: true,
//                     },
//                     {
//                         name: 'cardNumber',
//                         type: 'varchar',
//                         isUnique: true,
//                         length: "10"
//                     },
//                     {
//                         name: 'balace',
//                         type: 'int'
//                     },
//                     {
//                         name: 'isActive',
//                         type: 'boolean',
//                         default: true
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
//                 //         referencedTableName: "transactions",
//                 //         referencedColumnNames: ["id"],
//                 //     },
//                 // ]
//             })
//         );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("clients");
//     }

// }
