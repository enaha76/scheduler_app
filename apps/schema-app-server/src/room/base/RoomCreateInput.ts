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
import {
  IsInt,
  Max,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { ScheduleCreateNestedManyWithoutRoomsInput } from "./ScheduleCreateNestedManyWithoutRoomsInput";
import { Type } from "class-transformer";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  capacity!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => ScheduleCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => ScheduleCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => ScheduleCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  schedule?: ScheduleCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  typeField!: string;
}

export { RoomCreateInput as RoomCreateInput };
