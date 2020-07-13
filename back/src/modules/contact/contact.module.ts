import { Module } from '@nestjs/common';
import { ContactService } from 'src/services/contact/contact.service';
import { ContactController } from 'src/controllers/contact/contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact as ContactEntity } from 'src/entities/contact.entity';
import { ContactRepository } from 'src/repositories/contact.repository';

@Module({
  providers: [ContactService,ContactRepository],
  controllers: [ContactController],
  imports: [
      TypeOrmModule.forFeature([ContactEntity])
    ],
})
export class ContactModule {}
