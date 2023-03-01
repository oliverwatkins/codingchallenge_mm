import {InputType, Int, Field, PartialType} from '@nestjs/graphql';
import {CreateOrderInput} from "./create-order.input";


@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
    @Field(() => Int)
    id: number;
}
