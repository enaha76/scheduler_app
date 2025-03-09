/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "../../course/base/Course";
import {
  ValidateNested,
  IsDate,
  IsInt,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Group } from "../../group/base/Group";
import { Professor } from "../../professor/base/Professor";
import { Room } from "../../room/base/Room";
import { TimeSlot } from "../../timeSlot/base/TimeSlot";
import { AcademicWeek } from "../../academicWeek/base/AcademicWeek";

@ObjectType()
class Schedule {
  @ApiProperty({
    required: true,
    type: () => Course,
  })
  @ValidateNested()
  @Type(() => Course)
  course?: Course;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Group,
  })
  @ValidateNested()
  @Type(() => Group)
  group?: Group;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Professor,
  })
  @ValidateNested()
  @Type(() => Professor)
  professor?: Professor;

  @ApiProperty({
    required: true,
    type: () => Room,
  })
  @ValidateNested()
  @Type(() => Room)
  room?: Room;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  teachingType!: string;

  @ApiProperty({
    required: true,
    type: () => TimeSlot,
  })
  @ValidateNested()
  @Type(() => TimeSlot)
  timeSlot?: TimeSlot;

  @ApiProperty({
    required: true,
    type: () => AcademicWeek,
  })
  @ValidateNested()
  @Type(() => AcademicWeek)
  week?: AcademicWeek;
}

export { Schedule as Schedule };
