import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Momsthebest2020$$',
    database: 'nestjs_mysql_tutorial',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    logging: true,
    logger: 'file',
    migrationsRun: true,
    migrations: ["dist/migrations/**/*{.ts,.js}"],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export default config;