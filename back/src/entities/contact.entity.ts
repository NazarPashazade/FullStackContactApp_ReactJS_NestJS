import { Entity, Column } from "typeorm";
import {Base_Entity}from './base.entity'

@Entity('contact')
export class contact extends Base_Entity{

    @Column({nullable:true,type:"varchar",length:100})
    firstName: string;
    
    @Column({nullable:true,type:"varchar",length:100})
    lastName: string;

    @Column({nullable:true,type:"varchar",length:100})
    phone: string;
    
    @Column({nullable:true,type:"varchar",length:100})
    phoneType: string;
}

