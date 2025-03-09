import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GroupOverlapResolverBase } from "./base/groupOverlap.resolver.base";
import { GroupOverlap } from "./base/GroupOverlap";
import { GroupOverlapService } from "./groupOverlap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GroupOverlap)
export class GroupOverlapResolver extends GroupOverlapResolverBase {
  constructor(
    protected readonly service: GroupOverlapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
