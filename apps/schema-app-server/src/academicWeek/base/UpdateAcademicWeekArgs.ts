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
import { AcademicWeekWhereUniqueInput } from "./AcademicWeekWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AcademicWeekUpdateInput } from "./AcademicWeekUpdateInput";

@ArgsType()
class UpdateAcademicWeekArgs {
  @ApiProperty({
    required: true,
    type: () => AcademicWeekWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcademicWeekWhereUniqueInput)
  @Field(() => AcademicWeekWhereUniqueInput, { nullable: false })
  where!: AcademicWeekWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AcademicWeekUpdateInput,
  })
  @ValidateNested()
  @Type(() => AcademicWeekUpdateInput)
  @Field(() => AcademicWeekUpdateInput, { nullable: false })
  data!: AcademicWeekUpdateInput;
}

export { UpdateAcademicWeekArgs as UpdateAcademicWeekArgs };
