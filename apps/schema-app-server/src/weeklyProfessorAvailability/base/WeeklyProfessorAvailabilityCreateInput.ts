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
import { IsBoolean, ValidateNested } from "class-validator";
import { ProfessorWhereUniqueInput } from "../../professor/base/ProfessorWhereUniqueInput";
import { Type } from "class-transformer";
import { TimeSlotWhereUniqueInput } from "../../timeSlot/base/TimeSlotWhereUniqueInput";
import { AcademicWeekWhereUniqueInput } from "../../academicWeek/base/AcademicWeekWhereUniqueInput";

@InputType()
class WeeklyProfessorAvailabilityCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isAvailable!: boolean;

  @ApiProperty({
    required: true,
    type: () => ProfessorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfessorWhereUniqueInput)
  @Field(() => ProfessorWhereUniqueInput)
  professor!: ProfessorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeSlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereUniqueInput)
  @Field(() => TimeSlotWhereUniqueInput)
  timeSlot!: TimeSlotWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AcademicWeekWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcademicWeekWhereUniqueInput)
  @Field(() => AcademicWeekWhereUniqueInput)
  week!: AcademicWeekWhereUniqueInput;
}

export { WeeklyProfessorAvailabilityCreateInput as WeeklyProfessorAvailabilityCreateInput };
