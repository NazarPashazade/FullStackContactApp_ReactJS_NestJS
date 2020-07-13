import { Injectable } from '@nestjs/common';
import { contact as ContactEntity } from 'src/entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactRepository } from 'src/repositories/contact.repository';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly  contactRepository: ContactRepository,
  ) {}

  async save(c: ContactEntity): Promise<ContactEntity> {
    return  await this.contactRepository.save(c) ;
  }

  async findAll(): Promise<ContactEntity[]> {
    return await this.contactRepository.find();
  }

  async findById(id: number): Promise<ContactEntity> {
    return await this.contactRepository.findOne(id);
  }

  async deleteOne(id: number): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }

  async updateOne(id: number, c: ContactEntity): Promise<UpdateResult> {
    return await this.contactRepository.update(id, c);
  }
}
