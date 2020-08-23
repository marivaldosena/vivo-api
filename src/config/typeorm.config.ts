import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: process.env.DB_TYPE || dbConfig.type,
    host: process.env.DB_HOST || process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.DB_PORT || process.env.RDS_PORT || dbConfig.port,
    username: process.env.DB_USERNAME || process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.DB_PASSWORD || process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.DB_NAME || process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};