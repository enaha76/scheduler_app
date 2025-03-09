import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeeklyProfessorAvailabilityService } from "./weeklyProfessorAvailability.service";
import { WeeklyProfessorAvailabilityControllerBase } from "./base/weeklyProfessorAvailability.controller.base";

@swagger.ApiTags("weeklyProfessorAvailabilities")
@common.Controller("weeklyProfessorAvailabilities")
export class WeeklyProfessorAvailabilityController extends WeeklyProfessorAvailabilityControllerBase {
  constructor(
    protected readonly service: WeeklyProfessorAvailabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
