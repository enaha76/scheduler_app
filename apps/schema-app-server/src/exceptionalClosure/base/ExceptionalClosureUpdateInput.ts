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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TimeSlotWhereUniqueInput } from "../../timeSlot/base/TimeSlotWhereUniqueInput";
import { Type } from "class-transformer";
import { AcademicWeekWhereUniqueInput } from "../../academicWeek/base/AcademicWeekWhereUniqueInput";

@InputType()
class ExceptionalClosureUpdateInput {
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
  reason?: string | null;

  @ApiProperty({
    required: false,
    type: () => TimeSlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeSlotWhereUniqueInput, {
    nullable: true,
  })
  timeSlot?: TimeSlotWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AcademicWeekWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcademicWeekWhereUniqueInput)
  @IsOptional()
  @Field(() => AcademicWeekWhereUniqueInput, {
    nullable: true,
  })
  week?: AcademicWeekWhereUniqueInput;
}

export { ExceptionalClosureUpdateInput as ExceptionalClosureUpdateInput };
