import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeSlotService } from "./timeSlot.service";
import { TimeSlotControllerBase } from "./base/timeSlot.controller.base";

@swagger.ApiTags("timeSlots")
@common.Controller("timeSlots")
export class TimeSlotController extends TimeSlotControllerBase {
  constructor(
    protected readonly service: TimeSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
