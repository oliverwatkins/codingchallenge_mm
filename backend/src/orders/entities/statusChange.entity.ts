import { ObjectType, Field, Int, GraphQLTimestamp } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Employee} from "../../employees/entities/employee.entity";
import {Order} from "./order.entity";

@Entity()
@ObjectType()
export class StatusChange {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    status: string;

    @Column()
    @Field()
    updatedDate: string; // TODO dates should be long or date object, but having problems with Graphql and dates at the moment, so using string for now

    @ManyToOne(() => Order, order => order.statusChanges)
    @Field(type => Order)
    order: Order

    @ManyToOne(() => Employee, employee => employee.statusChanges)
    @Field(type => Employee)
    employee: Employee

}
