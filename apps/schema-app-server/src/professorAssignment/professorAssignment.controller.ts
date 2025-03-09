import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfessorAssignmentService } from "./professorAssignment.service";
import { ProfessorAssignmentControllerBase } from "./base/professorAssignment.controller.base";

@swagger.ApiTags("professorAssignments")
@common.Controller("professorAssignments")
export class ProfessorAssignmentController extends ProfessorAssignmentControllerBase {
  constructor(
    protected readonly service: ProfessorAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
