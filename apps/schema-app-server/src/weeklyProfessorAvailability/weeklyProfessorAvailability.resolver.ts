import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WeeklyProfessorAvailabilityResolverBase } from "./base/weeklyProfessorAvailability.resolver.base";
import { WeeklyProfessorAvailability } from "./base/WeeklyProfessorAvailability";
import { WeeklyProfessorAvailabilityService } from "./weeklyProfessorAvailability.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeeklyProfessorAvailability)
export class WeeklyProfessorAvailabilityResolver extends WeeklyProfessorAvailabilityResolverBase {
  constructor(
    protected readonly service: WeeklyProfessorAvailabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
