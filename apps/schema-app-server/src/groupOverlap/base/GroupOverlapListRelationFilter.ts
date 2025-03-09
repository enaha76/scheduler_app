/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroupOverlapWhereInput } from "./GroupOverlapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GroupOverlapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GroupOverlapWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupOverlapWhereInput)
  @IsOptional()
  @Field(() => GroupOverlapWhereInput, {
    nullable: true,
  })
  every?: GroupOverlapWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupOverlapWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupOverlapWhereInput)
  @IsOptional()
  @Field(() => GroupOverlapWhereInput, {
    nullable: true,
  })
  some?: GroupOverlapWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupOverlapWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupOverlapWhereInput)
  @IsOptional()
  @Field(() => GroupOverlapWhereInput, {
    nullable: true,
  })
  none?: GroupOverlapWhereInput;
}
export { GroupOverlapListRelationFilter as GroupOverlapListRelationFilter };
