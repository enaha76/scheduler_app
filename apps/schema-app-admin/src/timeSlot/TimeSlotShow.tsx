import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { TIMESLOT_TITLE_FIELD } from "./TimeSlotTitle";
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { PROFESSOR_TITLE_FIELD } from "../professor/ProfessorTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const TimeSlotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Day Of Week" source="dayOfWeek" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="Slot Index" source="slotIndex" />
        <TextField label="Start Time" source="startTime" />
        <ReferenceManyField
          reference="ExceptionalClosure"
          target="timeSlotId"
          label="ExceptionalClosures"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <TextField label="Reason" source="reason" />
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
          reference="Schedule"
          target="timeSlotId"
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
          reference="WeeklyProfessorAvailability"
          target="timeSlotId"
          label="WeeklyProfessorAvailabilities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Available" source="isAvailable" />
            <ReferenceField
              label="Professor"
              source="professor.id"
              reference="Professor"
            >
              <TextField source={PROFESSOR_TITLE_FIELD} />
            </ReferenceField>
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
      </SimpleShowLayout>
    </Show>
  );
};
