import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ContactService } from 'src/services/contact/contact.service';
import { contact as ContactEntity } from 'src/entities/contact.entity';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  findAllContact(): Promise<ContactEntity[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  findContactById(@Param()id:number): Promise<ContactEntity> {
    return this.contactService.findById(id);
  }


@Post()
createContact(@Body()contactEntity:ContactEntity):Promise<ContactEntity>{
    return this.contactService.save(contactEntity);
}


@Put(':id')
updateContactById(@Body()contactEntity:ContactEntity,@Param()id:number):Promise<any>{
    return this.contactService.updateOne(id,contactEntity);
}

@Delete(':id')
deleteContactById(@Param()id:number):Promise<any>{
    return this.contactService.deleteOne(id);
}


}
