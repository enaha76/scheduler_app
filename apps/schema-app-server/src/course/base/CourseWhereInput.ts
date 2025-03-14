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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { ProfessorAssignmentListRelationFilter } from "../../professorAssignment/base/ProfessorAssignmentListRelationFilter";
import { ScheduleListRelationFilter } from "../../schedule/base/ScheduleListRelationFilter";
import { WeeklyTeachingLoadListRelationFilter } from "../../weeklyTeachingLoad/base/WeeklyTeachingLoadListRelationFilter";

@InputType()
class CourseWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  code?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProfessorAssignmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProfessorAssignmentListRelationFilter)
  @IsOptional()
  @Field(() => ProfessorAssignmentListRelationFilter, {
    nullable: true,
  })
  professorAssignments?: ProfessorAssignmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ScheduleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ScheduleListRelationFilter)
  @IsOptional()
  @Field(() => ScheduleListRelationFilter, {
    nullable: true,
  })
  schedule?: ScheduleListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  semester?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  specialization?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WeeklyTeachingLoadListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WeeklyTeachingLoadListRelationFilter)
  @IsOptional()
  @Field(() => WeeklyTeachingLoadListRelationFilter, {
    nullable: true,
  })
  weeklyTeachingLoads?: WeeklyTeachingLoadListRelationFilter;
}

export { CourseWhereInput as CourseWhereInput };
