import {TypeOrmModuleOptions} from '@nestjs/typeorm'


export const config:TypeOrmModuleOptions={
    type:'postgres',
    port:5432,
    username:'postgres',
    password:'postgres',
    host:'127.0.0.1',
    database:'contact',
    synchronize:true,
        entities: ['dist/**/*.entity{.ts,.js}']
}