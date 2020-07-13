import { Module } from '@nestjs/common';
import { config as DBConfig } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './modules/contact/contact.module';



@Module({
  imports: [ContactModule,TypeOrmModule.forRoot(DBConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
