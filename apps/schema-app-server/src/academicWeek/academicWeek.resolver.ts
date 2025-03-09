import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AcademicWeekResolverBase } from "./base/academicWeek.resolver.base";
import { AcademicWeek } from "./base/AcademicWeek";
import { AcademicWeekService } from "./academicWeek.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AcademicWeek)
export class AcademicWeekResolver extends AcademicWeekResolverBase {
  constructor(
    protected readonly service: AcademicWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
