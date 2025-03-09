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
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { ScheduleUpdateManyWithoutRoomsInput } from "./ScheduleUpdateManyWithoutRoomsInput";
import { Type } from "class-transformer";

@InputType()
class RoomUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  schedule?: ScheduleUpdateManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string;
}

export { RoomUpdateInput as RoomUpdateInput };
