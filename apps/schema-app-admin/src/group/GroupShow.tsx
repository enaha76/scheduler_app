import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import { GROUP_TITLE_FIELD } from "./GroupTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { PROFESSOR_TITLE_FIELD } from "../professor/ProfessorTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Semester" source="semester" />
        <TextField label="Specialization" source="specialization" />
        <ReferenceManyField
          reference="GroupOverlap"
          target="group1Id"
          label="GroupOverlaps"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Can Overlap" source="canOverlap" />
            <ReferenceField label="Group1" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Group2" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GroupOverlap"
          target="group2Id"
          label="GroupOverlaps"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Can Overlap" source="canOverlap" />
            <ReferenceField label="Group1" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Group2" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProfessorAssignment"
          target="groupId"
          label="ProfessorAssignments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Professor"
              source="professor.id"
              reference="Professor"
            >
              <TextField source={PROFESSOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Teaching Type" source="teachingType" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="groupId"
          label="Schedules"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Professor"
              source="professor.id"
              reference="Professor"
            >
              <TextField source={PROFESSOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Teaching Type" source="teachingType" />
            <ReferenceField
              label="Time Slot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Week"
              source="academicweek.id"
              reference="AcademicWeek"
            >
              <TextField source={ACADEMICWEEK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WeeklyTeachingLoad"
          target="groupId"
          label="WeeklyTeachingLoads"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Group" source="group.id" reference="Group">
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Hours Required" source="hoursRequired" />
            <TextField label="ID" source="id" />
            <TextField label="Teaching Type" source="teachingType" />
            <ReferenceField
              label="Week"
              source="academicweek.id"
              reference="AcademicWeek"
            >
              <TextField source={ACADEMICWEEK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
