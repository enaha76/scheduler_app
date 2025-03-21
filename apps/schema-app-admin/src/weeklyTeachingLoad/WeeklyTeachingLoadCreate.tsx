import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { GroupTitle } from "../group/GroupTitle";
import { AcademicWeekTitle } from "../academicWeek/AcademicWeekTitle";

export const WeeklyTeachingLoadCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceInput source="group.id" reference="Group" label="Group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Hours Required" source="hoursRequired" />
        <TextInput label="Teaching Type" source="teachingType" />
        <ReferenceInput source="week.id" reference="AcademicWeek" label="Week">
          <SelectInput optionText={AcademicWeekTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
