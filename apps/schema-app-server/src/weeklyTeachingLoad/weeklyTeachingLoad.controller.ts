import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";
import { WeeklyTeachingLoadControllerBase } from "./base/weeklyTeachingLoad.controller.base";

@swagger.ApiTags("weeklyTeachingLoads")
@common.Controller("weeklyTeachingLoads")
export class WeeklyTeachingLoadController extends WeeklyTeachingLoadControllerBase {
  constructor(
    protected readonly service: WeeklyTeachingLoadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
