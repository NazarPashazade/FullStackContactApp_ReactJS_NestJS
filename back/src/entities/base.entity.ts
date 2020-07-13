import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export class Base_Entity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @CreateDateColumn({nullable:true})
  modifiedDate: Date;
}
