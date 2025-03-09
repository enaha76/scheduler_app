import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfessorService } from "./professor.service";
import { ProfessorControllerBase } from "./base/professor.controller.base";

@swagger.ApiTags("professors")
@common.Controller("professors")
export class ProfessorController extends ProfessorControllerBase {
  constructor(
    protected readonly service: ProfessorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
