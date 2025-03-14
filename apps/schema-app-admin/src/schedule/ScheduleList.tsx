import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { PROFESSOR_TITLE_FIELD } from "../professor/ProfessorTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ACADEMICWEEK_TITLE_FIELD } from "../academicWeek/AcademicWeekTitle";

export const ScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Course" source="course.id" reference="Course">
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
