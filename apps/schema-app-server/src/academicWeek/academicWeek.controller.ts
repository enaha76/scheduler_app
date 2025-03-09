import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AcademicWeekService } from "./academicWeek.service";
import { AcademicWeekControllerBase } from "./base/academicWeek.controller.base";

@swagger.ApiTags("academicWeeks")
@common.Controller("academicWeeks")
export class AcademicWeekController extends AcademicWeekControllerBase {
  constructor(
    protected readonly service: AcademicWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
