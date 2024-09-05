/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryStatusCreateInput } from "./DeliveryStatusCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDeliveryStatusArgs {
  @ApiProperty({
    required: true,
    type: () => DeliveryStatusCreateInput,
  })
  @ValidateNested()
  @Type(() => DeliveryStatusCreateInput)
  @Field(() => DeliveryStatusCreateInput, { nullable: false })
  data!: DeliveryStatusCreateInput;
}

export { CreateDeliveryStatusArgs as CreateDeliveryStatusArgs };
