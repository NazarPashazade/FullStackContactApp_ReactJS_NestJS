import { EntityRepository, Repository } from "typeorm";
import{contact as ContactEntity} from 'src/entities/contact.entity';

@EntityRepository(ContactEntity)
export class ContactRepository extends Repository<ContactEntity>{
}