import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WeeklyTeachingLoadResolverBase } from "./base/weeklyTeachingLoad.resolver.base";
import { WeeklyTeachingLoad } from "./base/WeeklyTeachingLoad";
import { WeeklyTeachingLoadService } from "./weeklyTeachingLoad.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WeeklyTeachingLoad)
export class WeeklyTeachingLoadResolver extends WeeklyTeachingLoadResolverBase {
  constructor(
    protected readonly service: WeeklyTeachingLoadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
