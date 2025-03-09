import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProfessorAssignmentResolverBase } from "./base/professorAssignment.resolver.base";
import { ProfessorAssignment } from "./base/ProfessorAssignment";
import { ProfessorAssignmentService } from "./professorAssignment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProfessorAssignment)
export class ProfessorAssignmentResolver extends ProfessorAssignmentResolverBase {
  constructor(
    protected readonly service: ProfessorAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
